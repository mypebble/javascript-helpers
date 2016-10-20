import root from 'window-or-global';

import {Model} from 'backbone';

import LocalStorage from 'backbone.localstorage';


export const User = Model.extend({
  idAttribute: 'email',
  localStorage: new LocalStorage('User'),

  setCredentials: function(jwt) {
    const data = jwt.user;
    data.token = jwt.token;
    this.save(data);
  },

  getToken: function() {
    return this.get('token');
  },

  /** Looks up the window.location.href and figures out what the school id
   * should be. If the school id isn't set, then this makes no change.
   */
  setActiveSchool: function() {
    const path = root.location.pathname;
    if (path) {
      const parts = path.split('/');
      if (parts[1] == 'school') {
        const schoolId = parseInt(parts[2]);
        this.save({activeSchool: schoolId});
      }
    }
  },

  getActiveSchool: function() {
    return this.get('activeSchool');
  },

  getSchools: function() {
    return this.get('organisations') || [];
  }
});
