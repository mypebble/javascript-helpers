import _ from 'underscore';
import Marionette from 'backbone.marionette';


const Notification = Marionette.LayoutView.extend({
  template: require('./templates/notification.html'),

  templateHelpers: function() {
    const link = this.model.get('link');
    return {
      readClass: this.model.isCleared() ?
        '' : 'background-color: #d6e5ed;',
      getLink: link ? `href=${link}` : '',
      mutedText: link ? '' : 'text-muted'
    };
  }
});


const Bell = Marionette.CompositeView.extend({
  childView: Notification,
  childViewContainer: 'ul',
  className: 'dropdown',

  attributes: {
    style: 'padding: 15px 15px 5px 15px;'
  },

  template: require('./templates/bell.html'),

  collectionEvents: {
    'sync': 'render'
  },

  notifyLoop: function() {
    this.collection.fetch({
      data: {
        notification_type: 'global',
        active_school: this.model.getActiveSchool()
      },
      success: (collection) => {
        if (collection.length == 0) {
          collection.add({text: 'No notifications'});
        }

        _.delay(() => this.notifyLoop(), 30000);
      },
      error: (collection) => {
        collection.add({text: `There was an error getting your notifications.
          Please try again later.`});
      }
    });
  },

  initialize: function() {
    this.notifyLoop();
  },

  templateHelpers: function() {
    const unread_count = this._getUnread();
    return {
      unreadCount: unread_count,
      hidden: unread_count ? '' : 'hidden'
    };
  },

  _getUnread: function() {
    const unread = this.collection.filter((notification) => {
      return !notification.isCleared();
    });
    return unread.length;
  }
});


export const TopbarView = Marionette.LayoutView.extend({
  attributes: {
    'id': 'navbar-container'
  },

  template: require('./templates/topbar.html'),

  regions: {
    bell: '.nav-bell-hook'
  },

  onRender: function() {
    const bell = new Bell({
      model: this.model.getUser(),
      collection: this.collection
    });

    this.showChildView('bell', bell);
  },

  templateHelpers: function() {
    return {
      multipleOrgs: this.model.multipleOrgs()
    };
  }
});
