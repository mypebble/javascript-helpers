import parse from 'url-parse';
import root from 'window-or-global';

import {Model} from 'backbone';
import {reverse} from './routes';


export const NavModel = Model.extend({
  defaults: {
    activeSchool: '',
    userName: ''
  },

  setUser: function(user) {
    const username = user.pick('first_name', 'last_name');

    this.set({
      user: user,
      userName: `${username.first_name} ${username.last_name}`,
      activeSchool: user.getActiveSchoolName()
    });
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
      volunteer: pathComponents[3] === 'volunteer',
      sponsor: pathComponents[3] === 'sponsor',
      letting: pathComponents[3] === 'letting',
      contact: pathComponents[3] === 'name' && pathComponents[4] !== 'group',
      admin: pathComponents[3] === 'account' || pathComponents[4] === 'group'
    };

    return sections[sectionName] ? 'active' : '';
  }
});
