import {Region} from 'backbone.marionette';

import {NavModel} from '../nav/models';
import {NotificationCollection} from './collections/notification';
import {TopbarView} from './views/layout';


export const TopbarRegion = Region.extend({
  el: '#navbar',

  showTopbar: function(user) {
    const model = new NavModel();
    model.setUser(user);

    const notification_collection = new NotificationCollection([], {
      urlBase: '/notifications/',
      search_params: {
        notification_type: 'global',
        active_school: user.getActiveSchool()
      },
      state: {
        pageSize: 5,
        pagesInRange: 5
      }
    });

    const unread_collection = new NotificationCollection([], {
      urlBase: '/notifications/unread/',
      search_params: {
        notification_type: 'global',
        active_school: user.getActiveSchool(),
      },
      state: {
        pageSize: 5,
        pagesInRange: 5
      }
    });

    this.show(new TopbarView({
      model: model,
      collection: notification_collection,
      unread_collection: unread_collection
    }));
  }
});
