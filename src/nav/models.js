import Backbone from 'backbone';

import window from 'window-or-global';


export const Nav = Backbone.Model.extend({
  defaults: function() {
    const storage = window.localStorage;
    const nav = storage.getItem('navStatus');
    return {
      nav: nav || 'large'
    };
  },

  updateLocalStorage: function() {
    const storage = window.localStorage;
    storage.setItem('navStatus', this.get('nav'));
  }
});
