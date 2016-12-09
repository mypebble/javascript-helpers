import Poller from 'backbone-poller';
import Marionette from 'backbone.marionette';

import Page from 'topbar/views/pagination';


const Notification = Marionette.LayoutView.extend({
  template: require('topbar/templates/notification.html'),

  templateHelpers: function() {
    const notification_class = this.model.get('notification_class');
    const read_class = this.model.isCleared() ? '' : 'notification-unread';
    return {
      mutedText: this.model.get('link') ? '' : 'text-muted',
      notification_class: `${notification_class} ${read_class}`
    };
  }
});


const NotificationList = Marionette.CompositeView.extend({
  childView: Notification,
  childViewContainer: 'ul',

  template: require('topbar/templates/notification_list.html')
});


const UnreadCountView = Marionette.LayoutView.extend({
  template: require('topbar/templates/unread_count.html'),

  collectionEvents: {
    'sync': 'render'
  },

  templateHelpers: function() {
    const unread_count = this.collection.state.totalRecords;
    return {
      unreadCount: unread_count,
      hidden: unread_count ? '' : 'hidden'
    };
  }
});


const BellIcon = Marionette.LayoutView.extend({
  template: require('topbar/templates/bell_icon.html'),

  ui: {
    bell: '.fa-bell'
  },

  collectionEvents: {
    sync: 'animate'
  },

  animate: function() {
    const old_count = this.count;
    this.count = this.collection.state.totalRecords;
    if (this.count == old_count || this.count == 0) {
      return;
    }

    const animation_end = 'webkitAnimationEnd mozAnimationEnd '
                          + 'MSAnimationEnd oanimationend animationend';
    this.ui.bell.addClass('animated swing').on(animation_end, () => {
      this.ui.bell.removeClass('animated swing');
    });
  }
});


const BellLayout = Marionette.LayoutView.extend({
  className: 'dropdown',

  attributes: {
    style: 'padding: 15px 15px 5px 15px;'
  },

  template: require('topbar/templates/bell_layout.html'),

  regions: {
    notificationList: '.notification-list-hook',
    unreadCount: '.unread-count-hook',
    page: '.page-hook',
    bellIcon: '.bell-icon-hook'
  },

  onRender: function() {
    const notifications_view = new NotificationList({
      collection: this.collection
    });

    const unread_view = new UnreadCountView({
      collection: this.getOption('unread_collection')
    });

    const page_view = new Page({
      collection: this.collection
    });

    const bell_icon = new BellIcon({
      collection: this.getOption('unread_collection')
    });

    this.showChildView('notificationList', notifications_view);
    this.showChildView('unreadCount', unread_view);
    this.showChildView('page', page_view);
    this.showChildView('bellIcon', bell_icon);
  }
});


export const TopbarView = Marionette.LayoutView.extend({
  attributes: {
    'id': 'navbar-container'
  },

  template: require('topbar/templates/topbar.html'),

  regions: {
    bell: '.nav-bell-hook'
  },

  collectionEvents: function() {
    return {
      sync: () => this.getOption('unread_collection').fetch()
    };
  },

  templateHelpers: function() {
    return {
      multipleOrgs: this.model.multipleOrgs()
    };
  },

  onRender: function() {
    this.getOption('unread_collection').fetch();
    const poller = Poller.get(this.collection, {
      continueOnError: false,
      delay: 30000
    });

    this.listenTo(poller, 'error', this.reportError);
    this.listenTo(poller, 'success', this.noNotifications);
    poller.start();

    const bell = new BellLayout({
      model: this.model.getUser(),
      collection: this.collection,
      unread_collection: this.getOption('unread_collection')
    });

    this.showChildView('bell', bell);
  },

  noNotifications: function() {
    if (this.collection.length == 0) {
      this.collection.set([{
        text: 'No notifications',
        link: null
      }]);
    }
  },

  reportError: function() {
    this.collection.set([{text: `There was an error getting your notifications.
      Please try again later.`}]);
  }
});
