import {Behavior} from 'backbone.marionette';

export const LinkBehavior = Behavior.extend({
  ui: {
    a: 'anchor'
  },

  onRender: function() {
    this.ui.anchor.attr('target', '_blank');
  }
});
