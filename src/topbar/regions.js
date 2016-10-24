import {Region} from 'backbone.marionette';

import {TopbarModel} from './models';
import {NotificationCollection} from './collections';
import {TopbarView} from './views';


export const TopbarRegion = Region.extend({
  el: '#navbar',

  showTopbar: function(user, options) {
    const model = new TopbarModel();
    model.setUser(user);

    this.show(new TopbarView({
      model: model,
      collection: new NotificationCollection(),
      organisationName: options.organisationName,
      organisationUrl: options.organisationUrl
    }));
  }
});
