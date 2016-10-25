import {Region} from 'backbone.marionette';

import {NavModel} from '../nav/models';
import {NotificationCollection} from './collections';
import {TopbarView} from './views';


export const TopbarRegion = Region.extend({
  el: '#navbar',

  showTopbar: function(user) {
    const model = new NavModel();
    model.setUser(user);

    this.show(new TopbarView({
      model: model,
      collection: new NotificationCollection()
    }));
  }
});
