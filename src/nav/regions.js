import {Region} from 'backbone.marionette';

import {NavModel, TopbarModel} from './models';
import {NavView, Topbar} from './views';


export const NavRegion = Region.extend({
  el: '#mainnav-container',

  showNav: function(user, options) {
    const model = new NavModel({user: user});
    this.show(new NavView({
      model: model
    }));
  }
});


export const TopRegion = Region.extend({
  el: '#navbar',

  showTop: function(user) {
    const model = new TopbarModel();
    model.setUser(user);
    this.show(new Topbar({model: model}));
  }
});
