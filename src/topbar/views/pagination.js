import _ from 'underscore';
import Marionette from 'backbone.marionette';

/** The pagination view renders the collection and handles paging with the
*   server. This also contains an extra collection listener to deal with the
*   underlying contents of the collection changing for whatever reason.
*
*   collection listeners:
*     - reset
*     - fetch
*     - update
*/
export default Marionette.LayoutView.extend({
  className: 'row',
  template: require('topbar/templates/page.html'),

  collectionEvents: {
    'reset': 'render',
    'fetch': 'render',
    'update': 'render'
  },

  ui: {
    previous: '.page-prev',
    next: '.page-next',
    page: '.page'
  },

  triggers: {
    'click @ui.previous': 'page:prev',
    'click @ui.next': 'page:next'
  },

  events: {
    'click @ui.page': 'handlePageChange'
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
      active: function(page) {
        var active = page == model.state.currentPage;
        return active ? 'active' : '';
      },

      page: model.state.currentPage,

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

  handleSelectAll: function(is_checked) {
    if (_.isUndefined(is_checked)) {
      return;
    }

    var table = this.options.table;
    var selectAll = table.ui.selectAll;
    _.delay(() => {
      if (is_checked) {
        if (!selectAll[0].checked) {
          selectAll.trigger('click');
        }
      }
      else {
        selectAll[0].checked = false;
      }
    }, 50);
  },

  _getSelectStatus: function() {
    var table = this.options.table;
    if (!table) {
      return;
    }

    return table.ui.selectAll[0].checked;
  },

  onPageNext: function() {
    if (this.collection.hasNextPage()) {
      const select_is_checked = this._getSelectStatus();
      this.collection.getNextPage({success: () => {
        this.handleSelectAll(select_is_checked);
      }
      });
    }
  },

  onPagePrev: function() {
    if (this.collection.hasPreviousPage()) {
      const select_is_checked = this._getSelectStatus();
      this.collection.getPreviousPage({success: () => {
        this.handleSelectAll(select_is_checked);
      }
      });
    }
  },

  handlePageChange: function(event) {
    event.preventDefault();
    var $el = $(event.target);

    var page = $el.data('page');
    this.triggerMethod('change:page', parseInt(page));
  },

  onChangePage: function(page) {
    if (_.isNaN(page) || this._outOfRange(page)) {
      return;
    }

    const select_is_checked = this._getSelectStatus();
    this.collection.getPage(page, {success: () => {
      this.handleSelectAll(select_is_checked);
    }
    });
  },

  _getPageOptions: function() {
    return {};
  },

  _outOfRange: function(page) {
    var state = this.collection.state;
    return page > state.lastPage || page < state.firstPage;
  }
});
