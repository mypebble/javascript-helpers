import Marionette from 'backbone.marionette';

export const GrantModal = Marionette.Behavior.extend({
  ui: {
    detail: '.grant-detail',
    expand: '.read-more'
  },

  events: {
    'click @ui.expand': 'expandDialog'
  },

  expandDialog: function() {
    this.ui.detail.removeClass('hide');
    this.ui.expand.addClass('hide');
  }
});
