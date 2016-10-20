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


const Prompt = Marionette.ItemView.extend({
  className: 'alert alert-info',
  template: require('./templates/prompt.html')
});


const PromptContainer = Marionette.CompositeView.extend({
  childView: Prompt,
  childViewContainer: 'ul',

  template: require('./templates/prompts.html'),

  initialize: function() {
    this.collection = new Backbone.Collection();
    this.collection.url = '/notifications/';

    this.collection.fetch({
      data: {
        notification_type: 'prompt',
        read: false,
        location: window.location.pathname
      },
      success: () => this.render()
    });
  }
});


const Notification = Marionette.ItemView.extend({
  // tagName: 'li',
  template: require('./templates/notification.html'),

  templateHelpers: function() {
    // A notifications model will be made to handle defaults and make methods
    // like this neater
    console.log(this);
    const link = this.model.get('link');
    const notification_class = this.model.get('notification_class');
    const no_notifications = _.isUndefined(link);
    return {
      readClass: _.isNull(this.model.get('datetime_cleared')) ?
        'background-color: #d6e5ed;' : '',
      getLink: no_notifications ? '' : `href=${link}`,
      mutedText: no_notifications ? 'text-muted' : '',
      getClass: _.isNull('notification_class') ? '' : notification_class
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
      success: (collection) => {
        if (collection.length == 0) {
          collection.add(new Backbone.Model({
            text: 'No notifications'
          }));
        }
        this.render();
      }
    });
  },

  templateHelpers: function() {
    const unread_count = this._getUnread();
    return {
      unreadCount: unread_count,
      hidden: unread_count == 0 ? 'hidden' : ''
    };
  },

  _getUnread: function() {
    const unread = this.collection.filter((notification) => {
      return _.isNull(notification.get('datetime_cleared'));
    });
    return unread.length;
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
    bell: '.nav-bell-hook',
    prompts: '#notification-hook-2'
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

    const promptContainer = new PromptContainer({
      model: this.model
    });
    this.showChildView('prompts', promptContainer);

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
