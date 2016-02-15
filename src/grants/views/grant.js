/** The Grant Modal */
import Marionette from 'backbone.marionette';
import markdown from 'markdown';
import moment from 'moment';

const {ProjectLayout} = require('./project');


const TitleView = Marionette.LayoutView.extend({
  template: require('templates/grants/grant_title.jst'),
  className: 'body-title',
  modelEvents: {
    sync: 'render'
  }
});


const StarView = Marionette.LayoutView.extend({
  tagName: 'a',
  className: 'btn btn-block btn-modal-option text-favourite save-grant',

  template: require('templates/grants/detail_star.jst'),

  modelEvents: {
    'change:is_saved': 'render'
  }
});


const GrantDetailView = Marionette.LayoutView.extend({
  behaviors: {
    modal: {
      behaviorClass: require('behaviors/modal')
    }
  },
  template: require('templates/grants/detail.jst'),

  templateHelpers: {
    fromNow: function(deadline) {
      if (!deadline) {
        return 'No Deadline';
      }
      return moment(deadline).calendar(
        null,
        {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'DD/MM/YYYY'
        }
      );
    },
    renderMarkdown: markdown.markdown.toHTML
  },

  regions: {
    project: '.save-project-hook',
    star: '.star-hook',
    title: '.title-hook'
  },

  ui: {
    detail: '.grant-detail',
    expand: '.read-more',
    toggleProject: '.add-project',
    save: '.save-grant'
  },

  events: {
    'click @ui.toggleProject': 'toggleProject',
    'click @ui.expand': 'expandDialog',
    'click @ui.save': 'saveGrant'
  },

  modelEvents: {
    sync: 'closeProject'
  },

  onShow: function() {
    const starView = new StarView({
      model: this.model
    });
    const title = new TitleView({
      model: this.model
    });

    this.showChildView('star', starView);
    this.showChildView('title', title);
  },

  saveGrant: function () {
    this.model.starGrant();
  },

  expandDialog: function() {
    this.ui.detail.removeClass('hide');
    this.ui.expand.addClass('hide');
  },

  toggleProject: function() {
    const projectRegion = this.getRegion('project');

    if (projectRegion.hasView()) {
      this.closeProject();
    }
    else {
      let projectView = new ProjectLayout({
        collection: this.getOption('projects'),
        model: this.model
      });
      this.showChildView('project', projectView);
    }
  },

  closeProject: function() {
    const projectRegion = this.getRegion('project');
    projectRegion.reset();
  }
});


module.exports = GrantDetailView;
