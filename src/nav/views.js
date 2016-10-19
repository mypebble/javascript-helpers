import _ from 'underscore';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';


const Project = Marionette.LayoutView.extend({
  tagName: 'span',
  template: require('./templates/project.html'),

  modelEvents: {
    'change:project': 'render',
    'sync': 'render'
  }
});


const Notification = Marionette.ItemView.extend({
  // tagName: 'li',
  template: require('./templates/notification.html'),

  initialize: function() {
    console.log(this);
  },

  templateHelpers: function() {
    return {
      readClass: _.isNull(this.model.get('datetime_read')) ?
        'border-left:4px solid #fc6e51;' : ''
    };
  }
});


const Bell = Marionette.CompositeView.extend({
  childView: Notification,
  childViewContainer: 'ul',

  template: require('./templates/bell.html'),

  initialize: function() {
    this.collection = new Backbone.Collection();
    this.collection.url = '/notifications/';

    this.collection.fetch({
      data: {notification_type: 'global'},
      success: () => this.render()
    });
  },

  templateHelpers: function() {
    return {
      notificationCount: this._getUnread()
    };
  },

  _getUnread: function() {
    return this.collection.filter((notification) => {
      return _.isNull(notification.get('datetime_read'));
    }).length;
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
    project: '.project-notification-hook',
    bell: '.nav-bell-hook'
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

    this.showChildView('bell', new Bell({
      model: this.model
    }));

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
