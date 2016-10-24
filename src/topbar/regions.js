import {Collection} from 'backbone';
import {Region} from 'backbone.marionette';

import {NotificationModel} from './models';

import {TopbarView} from './views';


export const TopbarRegion = Region.extend({
  el: '#topbar-hook',

  showTopbar: function(user, options) {
    const NotificationCollection = Collection.extend({
      model: NotificationModel,
      url: '/notifications/'
    });

    this.show(new TopbarView({
      model: user,
      collection: new NotificationCollection(),
      organisationName: options.organisationName,
      organisationUrl: options.organisationUrl
    }));
  }
});
