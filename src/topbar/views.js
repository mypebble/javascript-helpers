import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import {NotificationModel} from './models';


const Notification = Marionette.LayoutView.extend({
  // tagName: 'li',
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

  template: require('./templates/bell.html'),

  initialize: function() {
    const user = this.getOption('user');

    const NotificationCollection = Backbone.Collection.extend({
      model: NotificationModel
    });
    this.collection = new NotificationCollection();
    this.collection.url = '/notifications/';

    this.collection.fetch({
      data: {
        notification_type: 'global',
        active_school: user.get('activeSchool')
      },
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
      return !notification.isCleared();
    });
    return unread.length;
  }
});


export const TopbarView = Marionette.LayoutView.extend({
  attributes: {
    'id': '#topbar-hook'
  },

  template: require('./templates/topbar.html'),

  regions: {
    bell: '.nav-bell-hook'
  },

  templateHelpers: function() {
    return {
      organisationName: this.getOption('organisationName'),
      organisationUrl: this.getOption('organisationUrl')
    };
  },

  onRender: function() {
    const bell = new Bell({
      user: this.getOption('user')
    });

    this.showChildView('bell', bell);
  }
});