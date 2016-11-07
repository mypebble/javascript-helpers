import Poller from 'backbone-poller';
import Marionette from 'backbone.marionette';


const Notification = Marionette.LayoutView.extend({
  template: require('./templates/notification.html'),

  templateHelpers: function() {
    const notification_class = this.model.get('notification_class');
    const read_class = this.model.isCleared() ? '' : 'notification-unread';
    return {
      mutedText: this.model.get('link') ? '' : 'text-muted',
      notification_class: `${notification_class} ${read_class}`
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
    'sync': 'notificationUpdate'
  },

  notificationUpdate: function () {
    console.log('My collection:'); //eslint-disable-line no-console
    console.log(this.collection); //eslint-disable-line no-console
    this.render();
  },

  initialize: function() {
    const poller = Poller.get(this.collection, {
      delay: 30000,
      data: {
        notification_type: 'global',
        active_school: this.model.getActiveSchool()
      }
    });

    poller.on('success', (collection) => {
      console.log('Incoming collection'); //eslint-disable-line no-console
      console.log(collection); //eslint-disable-line no-console
    });

    poller.start();
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
