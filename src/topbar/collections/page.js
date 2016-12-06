import _ from 'underscore';
import PageableCollection from 'backbone.paginator';

import BaseModel from 'base/models/base';


/** Provides some helper methods and default values for the pageable
* collection.
*/
var PagColProto = PageableCollection.prototype;

var DefaultPageCollection = PageableCollection.extend({
  model: BaseModel,
  mode: 'server',

  /* We don't need to send this information to the server
  */
  queryParams: {
    sortKey: 'ordering',
    totalRecords: null,
    totalPages: null
  },

  state: {
    pageSize: 20,
    pagesInRange: 10
  },

  pageSet: function() {
    if (!this.multiplePages()) {
      return [];
    }

    var middle = this.state.currentPage;
    if (middle <= this.state.pagesInRange) {
      middle = 1 + this.state.pagesInRange;
    }

    var max = middle + this.state.pagesInRange;
    if (max > this.state.totalPages) {
      max = this.state.totalPages + 1;
    }

    var pages =_.range(middle - this.state.pagesInRange, max);
    return pages;
  },

  parseRecords: function(response) {
    return response.results;
  },

  parseState: function(response) {
    var rtnState = {
      totalRecords: response.count,
      totalPages: response.page_count
    };

    if (response.per_page) {
      rtnState.pageSize = response.per_page;
    }

    return rtnState;
  },

  url: function() {
    return this.urlBase;
  },

  initialize: function(models, options) {
    this.options = options || {};
    this.urlBase = options.urlBase;
    this.search_params = options.search_params || {};
    var state = _.clone(this.state);

    if (_.isUndefined(this.urlBase)) {
      console.error('urlBase cannot be undefined');
    }

    if (options.state) {
      _.extend(state, options.state);
      this.state = state;
    }
  },

  /** Override the backbone paginator's fetch to always set search_params,
  * always reset and use the proper jQuery calls
  */
  fetch: function(options) {
    options = options || {};
    var data = options.data || {};
    data = _.extend(data, this.search_params);
    options.data = data;
    options.traditional = true;
    PagColProto.fetch.call(this, options);
  },

  /** Clears the form.
  */
  clearForm: function() {
    this.search_params = {};

    this.fetch({page: 1});
    return this;
  },

  /** Empty the collection
  */
  empty: function() {
    this.set([]);
  },

  /**
  * Instruct the server to restrict collection based on category filters.
  */
  categoryFilter: function(categoryFilterTerms) {
    _.extend(this.search_params, categoryFilterTerms);

    this.state.currentPage = 1;
    this.fetch();
    return this;
  },

  /** Run a search against the API.
  */
  search: function(term) {
    term = term || undefined;
    this.search_params.search = term;

    this.state.currentPage = 1;
    this.fetch();
    return this;
  },

  /** Handle cases of an initial empty state.
  */
  multiplePages: function() {
    if (this.state.totalPages) {
      return this.state.totalPages > 1;
    }
    return false;
  },

  singlePage: function() {
    return !this.multiplePages();
  }
});


export default DefaultPageCollection;
