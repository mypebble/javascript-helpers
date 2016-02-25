import Backbone from 'backbone';

import window from 'window-or-global';


/** Deal with rendering the navigation component for users.
    This handles a fair few concepts including:
      - Whether the navbar should be shrunk or fulll
      - The notification icons to display on each line
*/
export const Nav = Backbone.Model.extend({
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

  _doFetch: function(urlKey) {
    const url = this.get(urlKey);
    if (url) {
      this.fetch({url: url});
    }
  }
});
