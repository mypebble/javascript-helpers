import {Region} from 'backbone.marionette';

import {NavModel} from './models';
import {NavView} from './views';


export const NavRegion = Region.extend({
  el: 'mainnav-container',

  showNav: function(user) {
    const model = new NavModel({user: user});
    this.show(new NavView({
      model: model
    }));
  }
});

