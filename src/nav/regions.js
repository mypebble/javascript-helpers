import {Region} from 'backbone.marionette';

import {NavModel} from './models';
import {NavView} from './views';


export const NavRegion = Region.extend({
  el: '#mainnav-container',

  showNav: function(user, active_feature_flags) {
    const model = new NavModel({user: user});
    this.show(new NavView({
      model: model,
      active_feature_flags: active_feature_flags
    }));
  }
});
