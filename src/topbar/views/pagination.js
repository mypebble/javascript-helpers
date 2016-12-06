import _ from 'underscore';
import Marionette from 'backbone.marionette';

/**
 * Simplified version of Arro's page view for the notifications menu.
*/
export default Marionette.LayoutView.extend({
  tagName: 'ul',
  template: require('topbar/templates/page.html'),

  collectionEvents: {
    'reset': 'render',
    'fetch': 'render',
    'update': 'render'
  },

  ui: {
    previous: '.page-prev',
    next: '.page-next'
  },

  triggers: {
    'click @ui.previous': 'page:prev',
    'click @ui.next': 'page:next'
  },

  templateHelpers: function() {
    var model = null;

    if (!_.isUndefined(this.model)) {
      model = this.model;
    }
    else if (!_.isUndefined(this.collection)) {
      model = this.collection;
    }
    else {
      console.error('this.model or this.collection must be set');
    }

    return {
      disabledFirst: function() {
        if (!model.hasPreviousPage()) {
          return 'disabled';
        }
        return '';
      },

      disabledLast: function() {
        if (!model.hasNextPage()) {
          return 'disabled';
        }
        return '';
      }
    };
  },

  onPageNext: function() {
    if (this.collection.hasNextPage()) {
      this.collection.getNextPage();
    }
  },

  onPagePrev: function() {
    if (this.collection.hasPreviousPage()) {
      this.collection.getPreviousPage();
    }
  }
});
