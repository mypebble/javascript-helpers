import _ from 'underscore';
import parse from 'url-parse';
import root from 'window-or-global';

import {Model} from 'backbone';
import {reverse} from './routes';


export const NavModel = Model.extend({
  setUser: function(user) {
    this.set({user: user});
  },

  getUser: function() {
    return this.get('user') || null;
  },

  isStaff: function() {
    const user = this.getUser();
    return user.get('is_staff');
  },

  multipleOrgs: function() {
    const user = this.getUser();
    return this.isStaff() || user.getSchools.length > 1;
  },

  reverse(urlName, options={}) {
    return reverse(urlName, options);
  },

  activeNav: function(sectionName) {
    const url = parse(root.location.href);
    const pathComponents = url.pathname.split('/');

    const sections = {
      grant: pathComponents[1] === 'grants',
      support: pathComponents[2] === 'support' ||
        (pathComponents[2] === 'schools' && pathComponents[3] !== 'change') ||
        pathComponents[2] === 'users',
      choose: pathComponents[3] === 'change',
      project: pathComponents[3] === 'project',
      contact: pathComponents[3] === 'name' && pathComponents[4] !== 'group',
      admin: pathComponents[3] === 'account' || pathComponents[4] === 'group'
    };

    return sections[sectionName] ? 'active' : '';
  }
});


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
