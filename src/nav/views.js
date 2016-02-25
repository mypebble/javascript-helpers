import Marionette from 'backbone.marionette';


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
