import _ from 'underscore';
import Mn from 'backbone.marionette';


export const NavView = Mn.LayoutView.extend({
  attributes: {
    'id': 'mainnav'
  },

  template: require('./templates/nav.html'),

  templateHelpers: function() {
    const user = this.model.getUser();

    return {
      activeOrganisation: user.getActiveSchool(),
      getActive: this.model.activeNav,
      getUrl: (urlName, organisation) =>
        this.model.reverse(urlName, {organisation: organisation}),
      isStaff: this.model.isStaff(),
      multipleOrgs: this.model.multipleOrgs(),
      volunteers_enabled: this._active_feature('volunteers')
    };
  },

  _active_feature: function(feature) {
    const active_feature_flags = this.getOption('active_feature_flags');
    return _.isUndefined(active_feature_flags) ?
      false : active_feature_flags.indexOf(feature) !== -1;
  }
});
