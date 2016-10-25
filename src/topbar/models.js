import _ from 'underscore';

import {Model} from 'backbone';


export const NotificationModel = Model.extend({
  defaults: {
    datetime_cleared: '',
    link: '',
    notification_class: ''
  },

  isCleared: function() {
    return !_.isNull(this.get('datetime_cleared'));
  }
});


export const TopbarModel = Model.extend({
  defaults: {
    activeSchool: '',
    userName: ''
  },

  /** Assign the user to the top bar to re-render it cleanly. */
  setUser: function(user) {
    const username = user.pick('first_name', 'last_name');
    this.set({
      user: user,
      userName: `${username.first_name} ${username.last_name}`,
      activeSchool: user.getActiveSchoolName()
    });
  },

  /** Returns the user model attached to the topbar. */
  getUser: function() {
    return this.get('user') || null;
  }
});
