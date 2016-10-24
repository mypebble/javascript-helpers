import {Region} from 'backbone.marionette';

import {TopbarView} from './views';


export const TopbarRegion = Region.extend({
  el: '#topbar-hook',

  showTopbar: function(user, options) {
    this.show(new TopbarView({
      model: user,
      organisationName: options.organisationName,
      organisationUrl: options.organisationUrl
    }));
  }
});
