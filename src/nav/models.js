import Backbone from 'backbone';

import window from 'window-or-global';


/** Deal with rendering the navigation component for users.
    This handles a fair few concepts including:
      - Whether the navbar should be shrunk or fulll
      - The notification icons to display on each line
    We also supply a listener for the Radio to instruct this to update its
    notification widgets, with the number to reduce the notifications by.
*/
export const Nav = Backbone.Model.extend({
  initialize: function() {
    const channel = Backbone.Wreqr.radio.channel('navigation');
    console.log(channel);
    this.listenTo(channel.vent, 'update', this.updateNavigation);
  },

  url: function() {
    return this.get('arroUrl') || this.get('grantUrl');
  },

  defaults: function() {
    const storage = window.localStorage;
    const nav = storage.getItem('navStatus');
    return {
      nav: nav || 'large',
      arroUrl: '',
      grantUrl: '',
      project: 0
    };
  },

  updateLocalStorage: function() {
    const storage = window.localStorage;
    storage.setItem('navStatus', this.get('nav'));
  },

  fetchArro: function() {
    this._doFetch('arroUrl');
  },

  fetchGrant: function() {
    this._doFetch('grantUrl');
  },

  updateNavigation: function(key, reduceBy) {
    const val = this.get(key);
    const newVal = val - reduceBy;
    this.set(key, newVal < 0 ? 0 : newVal);
  },

  _doFetch: function(urlKey) {
    const url = this.get(urlKey);
    if (url) {
      this.fetch({url: url});
    }
  }
});
