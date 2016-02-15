import accounting from 'accounting';
import Marionette from 'marionette';


var ProjectRow = Marionette.LayoutView.extend({
  tagName: 'tr',
  template: require('../templates/project/row.html'),

  ui: {
    checkbox: '.toggle-project'
  },

  events: {
    'change @ui.checkbox': 'toggleProject'
  },

  modelEvents: {
    'add:project': 'triggerProjectUpdated',
    'remove:project': 'triggerProjectUpdated'
  },

  onRender: function() {
    if (this.model.isSelected(this.getOption('grant'))) {
      this.$el.addClass('selected');
    }
    else {
      this.$el.removeClass('selected');
    }
  },

  templateHelpers: function() {
    var model = this.model;
    var grant = this.getOption('grant');

    return {
      getChecked: function() {
        return model.isSelected(grant) ? 'checked' : '';
      },
      formatAmount: function(amount) {
        var options = {
          precision: 2,
          thousand: ',',
          symbol: '£ '
        };
        return accounting.formatMoney(amount, options);
      },
    };
  },

  toggleProject: function() {
    var grant = this.getOption('grant');

    if (this.model.isSelected(grant)) {
      this.model.removeFromProject(grant);
    }
    else {
      this.model.addToProject(grant);
    }
  },

  triggerProjectUpdated: function() {
    this.triggerMethod('project:updated');
  }
});


export const ProjectLayout = Marionette.CompositeView.extend({
  className: 'modal-footer-save-to',
  template: require('../templates/project/layout.html'),
  childView: ProjectRow,
  childViewContainer: 'tbody',

  childViewOptions: function() {
    return {
      grant: this.model
    };
  },

  ui: {
    saveProject: '.save-project'
  },

  events: {
    'click @ui.saveProject': 'saveProjectStatus'
  },

  onChildviewProjectUpdated: function() {
    this.render();
  },

  saveProjectStatus: function() {
    var model = this.model;
    var project = model.get('project');

    var modelOptions = {
      xhrFields: {withCredentials: true},
      headers: {'X-CSRFToken': this.collection.at(0).get('csrf_token')}
    };

    this.model.save({project: model.get('project')}, {patch: true});
    var slug = model.get('slug');

    var toClear = this.collection.filter(function(projectModel) {
      var grants = projectModel.get('attached_grants');

      if (projectModel.id === project.id) {
        return false;
      }

      if (!grants.length) {
        return false;
      }

      var withProject = grants.where({slug: slug});
      return withProject.length;
    });

    _.each(toClear, function(projectModel) {
      var deleteGrant = model.getGrantForDelete(projectModel.get('grant_url'));
      var grants = projectModel.get('attached_grants');
      grants.remove(slug);
      deleteGrant.destroy(modelOptions);
    });

    if (project) {
      var projectModel = this.collection.filter(function(pm) {
        return window.location.protocol +
          pm.get('url') == project.canonical_url;
      })[0];

      var grant = model.getArroGrant(projectModel.get('grant_url'));
      var grants = projectModel.get('attached_grants');
      grants.add(model.pick(
        'title', 'url', 'image_url', 'slug', 'award', 'grant_difficulty',
        'time_to_complete', 'deadline'
      ));

      grant.save({}, modelOptions);
    }
  }
});
