import Marionette from 'backbone.marionette';


const Project = Marionette.LayoutView.extend({
  tagName: 'span',
  template: require('./templates/project.html'),

  modelEvents: {
    'change:project': 'render',
    'sync': 'render'
  }
});


export const NavView = Marionette.LayoutView.extend({
  el: 'body',
  template: false,

  ui: {
    container: '#container',
    toggle: '.mainnav-toggle'
  },

  modelEvents: {
    'change:nav': 'updateLocalStorage'
  },

  triggers: {
    'click @ui.toggle': 'toggle:nav'
  },

  regions: {
    project: '.project-notification-hook'
  },

  initialize: function() {
    this.model.fetchArro();
  },

  onRender: function() {
    const navStatus = this.model.get('nav');
    if (navStatus === 'large') {
      this.ui.container.addClass('mainnav-lg');
      this.ui.container.removeClass('mainnav-sm');
    }
    else if (navStatus === 'small') {
      this.ui.container.addClass('mainnav-sm');
      this.ui.container.removeClass('mainnav-lg');
    }

    this.showChildView('project', new Project({
      model: this.model
    }));
  },

  updateLocalStorage: function(model) {
    model.updateLocalStorage();
  },

  onToggleNav: function() {
    const navStatus = this._getNavStatus();
    this.model.set('nav', navStatus);
  },

  /** Return the new nav status.
  */
  _getNavStatus: function() {
    return this.model.get('nav') === 'large' ? 'small' : 'large';
  }
});
