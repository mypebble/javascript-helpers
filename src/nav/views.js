import Marionette from 'backbone.marionette';


export const NavView = Marionette.LayoutView.extend({
  attributes: {
    'id': '#mainnav'
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
      multipleOrgs: this.model.multipleOrgs()
    };
  }
});
