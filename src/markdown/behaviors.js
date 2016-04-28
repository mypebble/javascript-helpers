import {Behavior} from 'backbone.marionette';

export const LinkBehavior = Behavior.extend({
  ui: {
    a: 'anchor'
  },

  onRender: function() {
    const anchors = this.view.getUI('anchor');
    anchors.attr('target', '_blank');
  }
});
