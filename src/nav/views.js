import _ from 'underscore';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';


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
  attributes: {
    'id': '#mainnav'
  },

  template: require('./templates/nav.html'),

  regions: {
    bell: '.nav-bell-hook'
  },

  templateHelpers: function() {
    const user = this.model.getUser();

    return {
      activeOrganisation: user.getActiveSchool(),
      getActive: this.model.activeNav,
      getUrl: (urlName, organisation) =>
        this.model.reverse(urlName, {organisation: organisation}),
      isStaff: this.model.isStaff(),
      multipleOrgs: this.model.multipleOrgs()
    };
  },

  onRender: function() {
    const bell = new Bell({
      model: this.model
    });

    this.showChildView('bell', bell);
  }
});
