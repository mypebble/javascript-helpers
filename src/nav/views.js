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
    return !!(this.getOption('active_feature_flags').indexOf(feature) + 1);
  }
});
