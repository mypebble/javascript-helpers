import _ from 'underscore';
import root from 'window-or-global';

import { Model } from 'backbone';

import LocalStorage from 'backbone.localstorage';


/** The User model forces the current user into local storage so we can easily
 * maintain their session with JWT.
 */
export const User = Model.extend({
  idAttribute: 'email',
  localStorage: new LocalStorage('User'),

  /**
   * Override Model#parse to unpack Arrays from localStorage.
   *
   * @param {Array|Object} data The data returned from the localStorage.
   * @returns {Object} The data parsed from localStorage into a user.
   */
  parse(data) {
    return data[0] ? data[0] : data;
  },

  /** Attach the JWT and payload to this user.
   * @param {Object} jwt The Token containing `user` and `token` attributes.
   * @returns {undefined}
  */
  setCredentials(jwt) {
    const data = jwt.user;
    data.token = jwt.token;
    this.save(data);
  },

  /** Return the JWT for this user to pass into the Authorization header. */
  getToken() {
    return this.get('token');
  },

  /** Looks up the window.location.href and figures out what the school id
   * should be. If the school id isn't set, then this makes no change.
   *
   * @returns {undefined}
   */
  setActiveSchool() {
    const path = root.location.pathname;

    if (path) {
      const parts = path.split('/');
      if (parts[1] == 'school') {
        const schoolId = parseInt(parts[2]);

        this.save({activeSchool: schoolId});
      }
    }
  },

  /** Return the ID of the current active school
   * @returns {number} The school ID.
  */
  getActiveSchool() {
    return this.get('activeSchool');
  },

  /** Return the name of the current active school or an empty string.
   * Note that for staff users this may return empty as they don't necessarily
   * list the school in their organisations list.
   *
   * @returns {string} The name of the school.
   */
  getActiveSchoolName() {
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
   *
   * @returns {Model[]} The list of organisations for the user.
   */
  getSchools() {
    return this.get('organisations') || [];
  }
});
