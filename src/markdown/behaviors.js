import {Behavior} from 'backbone.marionette';

export const LinkBehavior = Behavior.extend({
  ui: {
    anchor: 'a'
  },

  onRender: function() {
    this.ui.anchor.attr('target', '_blank');
  }
});
