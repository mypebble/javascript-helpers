import _ from 'underscore';
import Backbone from 'backbone';


export default Backbone.Model.extend({
  initialize: function(options) {
    options = options || {};

    if (_.isUndefined(this.options)) {
      this.options = {};
    }
    _.extend(this.options, options);
  },

  /** Handle the create/update cases in a single method.
  */
  url: function() {
    let url = this.get('url');

    if (_.isUndefined(url)) {
      url = this.options.url;
    }

    if (_.isUndefined(url) && this.collection) {
      if (_.isFunction(this.collection.url)) {
        url = this.collection.url();
      }
      else {
        url = this.collection.url;
      }
    }

    if (_.isUndefined(url)) {
      console.error('url is undefined');
    }

    const last = url.slice(url.length - 1, url.length);

    if (last !== '/') {
      url += '/';
    }

    return url;
  }
});
