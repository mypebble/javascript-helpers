import _ from 'underscore';
import root from 'window-or-global';

import {Model} from 'backbone';

import LocalStorage from 'backbone.localstorage';


/** The User model forces the current user into local storage so we can easily
 * maintain their session with JWT.
 */
export const User = Model.extend({
  idAttribute: 'email',
  localStorage: new LocalStorage('User'),

  /** Attach the JWT and payload to this user. */
  setCredentials: function(jwt) {
    const data = jwt.user;
    data.token = jwt.token;
    this.save(data);
  },

  /** Return the JWT for this user to pass into the Authorization header. */
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

  /** Return the ID of the current active school */
  getActiveSchool: function() {
    return this.get('activeSchool');
  },

  /** Return the name of the current active school or an empty string.
   * Note that for staff users this may return empty as they don't necessarily
   * list the school in their organisations list.
   */
  getActiveSchoolName: function() {
    const activeSchool = this.getActiveSchool();
    let schoolName = '';

    if (activeSchool) {
      let school = _(this.getSchools()).findWhere({id: activeSchool});
      if (school) {
        schoolName = school.name;
      }
    }

    return schoolName;
  },

  /** Return the list of schools that this user can see.
   * For staff users, this only returns the schools that they are attached to
   * in the database. The server will not send a list of every school, for
   * obvious reasons.
   */
  getSchools: function() {
    return this.get('organisations') || [];
  }
});
