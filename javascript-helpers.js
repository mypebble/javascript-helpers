module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _behaviors = __webpack_require__(1);

	Object.keys(_behaviors).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _behaviors[key];
	    }
	  });
	});

	var _grant = __webpack_require__(3);

	Object.keys(_grant).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _grant[key];
	    }
	  });
	});

	var _behaviors2 = __webpack_require__(5);

	Object.keys(_behaviors2).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _behaviors2[key];
	    }
	  });
	});

	var _util = __webpack_require__(9);

	Object.keys(_util).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _util[key];
	    }
	  });
	});

	var _util2 = __webpack_require__(14);

	Object.keys(_util2).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _util2[key];
	    }
	  });
	});

	var _behaviors3 = __webpack_require__(6);

	Object.keys(_behaviors3).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _behaviors3[key];
	    }
	  });
	});

	var _util3 = __webpack_require__(7);

	Object.keys(_util3).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _util3[key];
	    }
	  });
	});

	var _init = __webpack_require__(16);

	Object.keys(_init).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _init[key];
	    }
	  });
	});

	var _models = __webpack_require__(17);

	Object.keys(_models).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _models[key];
	    }
	  });
	});

	var _views = __webpack_require__(20);

	Object.keys(_views).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _views[key];
	    }
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GrantModal = undefined;

	var _backbone = __webpack_require__(2);

	var _backbone2 = _interopRequireDefault(_backbone);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var GrantModal = exports.GrantModal = _backbone2.default.Behavior.extend({
	  ui: {
	    detail: '.grant-detail',
	    expand: '.read-more'
	  },

	  events: {
	    'click @ui.expand': 'expandDialog'
	  },

	  expandDialog: function expandDialog() {
	    this.ui.detail.removeClass('hide');
	    this.ui.expand.addClass('hide');
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("backbone.marionette");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GrantView = exports.FooterView = exports.TitleView = undefined;

	var _underscore = __webpack_require__(4);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _backbone = __webpack_require__(2);

	var _backbone2 = _interopRequireDefault(_backbone);

	var _behaviors = __webpack_require__(5);

	var _behaviors2 = __webpack_require__(6);

	var _util = __webpack_require__(7);

	var _util2 = __webpack_require__(9);

	var _behaviors3 = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TitleView = exports.TitleView = _backbone2.default.LayoutView.extend({
	  template: __webpack_require__(11),
	  className: 'body-title',
	  modelEvents: {
	    sync: 'render'
	  },

	  templateHelpers: {
	    hasProjects: function hasProjects(projects) {
	      return projects.length;
	    },

	    project: function project(projects) {
	      if (projects.length > 1) {
	        return projects.length + ' projects';
	      }
	      var project = _underscore2.default.first(projects);

	      if (_underscore2.default.isUndefined(project.attributes)) {
	        return project.title;
	      }
	      return project.get('title');
	    }
	  }
	}); /** The Grant Modal */
	var FooterView = exports.FooterView = _backbone2.default.LayoutView.extend({
	  tagName: 'ul',
	  className: 'row list-unstyled list-inline list-facts-three',
	  template: __webpack_require__(12)
	});

	var GrantView = exports.GrantView = _backbone2.default.LayoutView.extend({
	  behaviors: {
	    modal: {
	      behaviorClass: _behaviors.ModalBehavior
	    },
	    grant: {
	      behaviorClass: _behaviors3.GrantModal
	    },
	    link: {
	      behaviorClass: _behaviors2.LinkBehavior
	    }
	  },

	  template: __webpack_require__(13),

	  templateHelpers: {
	    fromNow: _util2.fromNow,
	    renderMarkdown: _util.markdown.toHTML
	  },

	  regions: {
	    title: '.title-hook',
	    footer: '.footer-hook'
	  },

	  onRender: function onRender() {
	    this.showTitle();
	    this.showFooter();
	    this.showOther();
	  },

	  showTitle: function showTitle() {
	    var title = new TitleView({
	      model: this.model
	    });

	    this.showChildView('title', title);
	  },

	  showFooter: function showFooter() {
	    var footer = new FooterView({
	      model: this.model
	    });

	    this.showChildView('footer', footer);
	  },

	  showOther: function showOther() {}
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("underscore");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModalBehavior = undefined;

	var _backbone = __webpack_require__(2);

	var _backbone2 = _interopRequireDefault(_backbone);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** Turn a given view into a modal that can be modified.
	    This behavior automatically turns a view into a modal that must be closed
	    by clicking the abandon button.

	    Templates:
	      The template must contain the close-modal class on all buttons that can
	      close this modal.
	    Triggers:
	        To close the modal, you must fire the close:modal trigger so it can
	        clean itself up properly.
	        Once the close:modal is completed, this behavior fires the
	        close:modal:complete trigger which you can listen to to apply additional
	        clean-up in any parent views.
	        If the confirm button is clicked, the confirm:action is fired
	*/
	var ModalBehavior = exports.ModalBehavior = _backbone2.default.Behavior.extend({
	  defaults: {
	    backdrop: 'static'
	  },

	  ui: {
	    wrapper: '.modal-hook',
	    close: '.close-modal',
	    confirm: '.confirm-modal'
	  },

	  triggers: {
	    'hidden.bs.modal @ui.wrapper': 'destroy:modal',
	    'click @ui.close': 'close:modal'
	  },

	  events: {
	    'click @ui.confirm': 'fireConfirmTrigger'
	  },

	  /** Cause the dialog box to be displayed on-screen.
	  */
	  onAttach: function onAttach() {
	    this._guardedModal(this.ui.wrapper, this._getModalOptions());
	  },

	  onCloseModal: function onCloseModal() {
	    this._guardedModal(this.ui.wrapper, 'hide');
	  },

	  onDestroyModal: function onDestroyModal() {
	    this.view.triggerMethod('close:modal:complete');
	  },

	  fireConfirmTrigger: function fireConfirmTrigger() {
	    this.view.triggerMethod('confirm:action');
	  },

	  _getModalOptions: function _getModalOptions() {
	    return {
	      backdrop: this.getOption('backdrop')
	    };
	  },

	  _guardedModal: function _guardedModal(selector, options) {
	    if (selector.modal) {
	      selector.modal(options);
	    } else {
	      console.warn('Bootstrap modal is not available');
	    }
	  }
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LinkBehavior = undefined;

	var _backbone = __webpack_require__(2);

	var LinkBehavior = exports.LinkBehavior = _backbone.Behavior.extend({
	  ui: {
	    anchor: 'a'
	  },

	  onRender: function onRender() {
	    this.ui.anchor.attr('target', '_blank');
	    this.ui.anchor.attr('rel', 'noopener noreferrer');
	  }
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.markdown = undefined;

	var _commonmark = __webpack_require__(8);

	var _commonmark2 = _interopRequireDefault(_commonmark);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var markdown = exports.markdown = {
	  toHTML: function toHTML(mdText) {
	    var reader = new _commonmark2.default.Parser();
	    var writer = new _commonmark2.default.HtmlRenderer({ safe: true, smart: true });
	    var parsed = reader.parse(mdText);
	    return writer.render(parsed);
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("commonmark");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formatObj = formatObj;
	exports.dateObj = dateObj;
	exports.formatDate = formatDate;
	exports.formatDateTime = formatDateTime;
	exports.fromNow = fromNow;

	var _moment = __webpack_require__(10);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DATE_FORMATS = ['YYYY-MM-DD', 'YYYY-MM-DD HH:mm', 'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD H:mm', 'YYYY-MM-DD H:mm:ss', 'DD/MM/YYYY', 'DD/MM/YYYY HH:mm', 'DD/MM/YYYY HH:mm:ss', 'DD/MM/YYYY H:mm', 'DD/MM/YYYY H:mm:ss', 'DD/MM/YYYY', 'YYYY/MM/DD', 'YYYY/MM/DD HH:mm', 'YYYY/MM/DD HH:mm:ss', 'YYYY/MM/DD H:mm', 'YYYY/MM/DD H:mm:ss'];

	/** Take a moment object and return the date formatted in dd/mm/yyyy */
	function formatObj(obj) {
	  return obj.format('DD/MM/YYYY');
	}

	/** Take a dateString and return a moment object */
	function dateObj(dateString) {
	  return (0, _moment2.default)(dateString, DATE_FORMATS);
	}

	/** Take a dateString and return the date formatted in dd/mm/yyyy */
	function formatDate(dateString) {
	  var date = formatObj(dateObj(dateString));
	  if (date === 'Invalid date') {
	    return '';
	  }
	  return date;
	}

	/** Take a dateString and return the datetime formatted in dd/mm/yyyy hh:mm */
	function formatDateTime(dateString) {
	  return dateObj(dateString).format('DD/MM/YYYY HH:mm');
	}

	/** Take a futureDate string and return a string representing future dates */
	function fromNow(futureDate) {
	  if (!futureDate) {
	    return 'No Deadline';
	  }
	  return dateObj(futureDate).calendar(null, {
	    sameDay: '[Today]',
	    nextDay: '[Tomorrow]',
	    nextWeek: 'dddd',
	    lastDay: '[Yesterday]',
	    lastWeek: '[Last] dddd',
	    sameElse: 'DD/MM/YYYY'
	  });
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<img src="'+
	((__t=( image_url ))==null?'':_.escape(__t))+
	'">\n<div class="title">'+
	((__t=( title ))==null?'':_.escape(__t))+
	'</div>\n';
	 if (hasProjects(projects)) { 
	__p+='\n<span class="label label-info">'+
	((__t=( project(projects) ))==null?'':_.escape(__t))+
	'</span>\n';
	 } 
	__p+='\n';
	}
	return __p;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<li class="col-lg-4 col-md-4 col-sm-4 col-sm-offset-4 col-md-offset-4 col-lg-offset-4">\n  <a class="btn btn-block btn-modal-option text-danger close-modal">\n    <i class="fa fa-times"></i> <span class="block">Close</span>\n  </a>\n</li>\n';
	}
	return __p;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<div class="modal modal-hook" role="dialog">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header modal-header-clear">\n        <button aria-label="Close" class="close close-modal" type="button">\n          <span aria-hidden="true">x</span>\n        </button>\n      </div>\n      <div class="modal-body modal-body-clear">\n\n        <div class="title-hook"></div>\n\n        <ul class="row list-unstyled list-inline list-facts-three">\n          <li class="col-lg-4 col-md-4 col-sm-4">\n            <i class="fa fa-trophy block"></i>\n            '+
	((__t=( award ))==null?'':_.escape(__t))+
	'\n            <small>'+
	((__t=( display_grant ))==null?'':_.escape(__t))+
	'</small>\n          </li>\n          <li class="col-lg-4 col-md-4 col-sm-4 rating">\n            <i class="fa fa-bolt block"></i>\n            '+
	((__t=( grant_difficulty ))==null?'':_.escape(__t))+
	'\n            <small>'+
	((__t=( time_to_complete ))==null?'':_.escape(__t))+
	'</small>\n          </li>\n          <li class="col-lg-4 col-md-4 col-sm-4">\n            <i class="fa fa-clock-o block"></i>\n            '+
	((__t=( fromNow(deadline) ))==null?'':_.escape(__t))+
	'\n            <small class="block">Deadline</small>\n          </li>\n        </ul>\n\n        <div class="row">\n          <div class="col-lg-12 col-md-12">\n\n            <div class="text-summary">\n              <p class="text-center">'+
	((__t=( renderMarkdown(summary) ))==null?'':__t)+
	'</p>\n            </div>\n\n            <div class="actions-row">\n              <a class="read-more">Read More</a>\n            </div>\n            <div class="hide grant-detail">\n              <div class="panel">\n                <div class="panel-title">Who is Eligible?</div>\n                <div class="panel-body">\n                  '+
	((__t=( renderMarkdown(who_is_eligible) ))==null?'':__t)+
	'\n                </div>\n                <div class="panel-title">What Will I Get?</div>\n                <div class="panel-body">\n                  '+
	((__t=( renderMarkdown(what_will_i_get) ))==null?'':__t)+
	'\n                </div>\n                <div class="panel-title">What Next?</div>\n                <div class="panel-body">\n                  '+
	((__t=( renderMarkdown(now_what) ))==null?'':__t)+
	'\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n\n      <div class="modal-footer footer-hook"></div>\n    </div>\n  </div>\n</div>\n';
	}
	return __p;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formatAmount = formatAmount;
	exports.formatNumber = formatNumber;

	var _accounting = __webpack_require__(15);

	var _accounting2 = _interopRequireDefault(_accounting);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function formatAmount(amount) {
	  var places = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

	  var options = {
	    precision: places,
	    thousand: ',',
	    symbol: '£ '
	  };
	  return _accounting2.default.formatMoney(amount, options);
	}

	function formatNumber(amount, precision) {
	  return _accounting2.default.formatNumber(amount, precision || 2, ',');
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("accounting");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.navInit = undefined;

	var _models = __webpack_require__(17);

	var _views = __webpack_require__(20);

	var navInit = exports.navInit = function navInit(options) {
	  var model = new _models.Nav(options);
	  var nav = new _views.NavView({ model: model });
	  nav.render();
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Nav = undefined;

	var _backbone = __webpack_require__(18);

	var _backbone2 = _interopRequireDefault(_backbone);

	var _windowOrGlobal = __webpack_require__(19);

	var _windowOrGlobal2 = _interopRequireDefault(_windowOrGlobal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** Deal with rendering the navigation component for users.
	    This handles a fair few concepts including:
	      - Whether the navbar should be shrunk or fulll
	      - The notification icons to display on each line
	    We also supply a listener for the Radio to instruct this to update its
	    notification widgets, with the number to reduce the notifications by.
	*/
	var Nav = exports.Nav = _backbone2.default.Model.extend({
	  initialize: function initialize() {
	    var channel = _backbone2.default.Wreqr.radio.channel('navigation');
	    this.listenTo(channel.vent, 'update', this.updateNavigation);
	  },

	  url: function url() {
	    return this.get('arroUrl') || this.get('grantUrl');
	  },

	  defaults: function defaults() {
	    var storage = _windowOrGlobal2.default.localStorage;
	    var nav = storage.getItem('navStatus');
	    return {
	      nav: nav || 'large',
	      arroUrl: '',
	      grantUrl: '',
	      project: 0
	    };
	  },

	  updateLocalStorage: function updateLocalStorage() {
	    var storage = _windowOrGlobal2.default.localStorage;
	    storage.setItem('navStatus', this.get('nav'));
	  },

	  fetchArro: function fetchArro() {
	    this._doFetch('arroUrl');
	  },

	  fetchGrant: function fetchGrant() {
	    this._doFetch('grantUrl');
	  },

	  updateNavigation: function updateNavigation(key, reduceBy) {
	    var val = this.get(key);
	    var newVal = val - reduceBy;
	    this.set(key, newVal < 0 ? 0 : newVal);
	  },

	  _doFetch: function _doFetch(urlKey) {
	    var url = this.get(urlKey);
	    if (url) {
	      this.fetch({ url: url, xhrFields: { withCredentials: true } });
	    }
	  }
	});

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("backbone");

/***/ },
/* 19 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict'
	module.exports = (typeof self === 'object' && self.self === self && self) ||
	  (typeof global === 'object' && global.global === global && global) ||
	  this

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NavView = undefined;

	var _underscore = __webpack_require__(4);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _backbone = __webpack_require__(18);

	var _backbone2 = _interopRequireDefault(_backbone);

	var _backbone3 = __webpack_require__(2);

	var _backbone4 = _interopRequireDefault(_backbone3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Project = _backbone4.default.LayoutView.extend({
	  tagName: 'span',
	  template: __webpack_require__(21),

	  modelEvents: {
	    'change:project': 'render',
	    'sync': 'render'
	  }
	});

	var Prompt = _backbone4.default.ItemView.extend({
	  className: 'alert alert-info',
	  template: __webpack_require__(25)
	});

	var PromptContainer = _backbone4.default.CompositeView.extend({
	  childView: Prompt,
	  childViewContainer: 'ul',

	  template: __webpack_require__(24),

	  initialize: function initialize() {
	    var _this = this;

	    this.collection = new _backbone2.default.Collection();
	    this.collection.url = '/notifications/';

	    this.collection.fetch({
	      data: {
	        notification_type: 'prompt',
	        read: 'false'
	      },
	      success: function success() {
	        return _this.render();
	      }
	    });
	  }
	});

	var Notification = _backbone4.default.ItemView.extend({
	  // tagName: 'li',
	  template: __webpack_require__(22),

	  templateHelpers: function templateHelpers() {
	    console.log(this);
	    var link = this.model.get('link');
	    var no_notifications = _underscore2.default.isUndefined(link);
	    return {
	      readClass: _underscore2.default.isNull(this.model.get('datetime_read')) ? 'background-color: #d6e5ed;' : '',
	      getLink: no_notifications ? '' : 'href=' + link,
	      mutedText: no_notifications ? 'text-muted' : ''
	    };
	  }
	});

	var Bell = _backbone4.default.CompositeView.extend({
	  childView: Notification,
	  childViewContainer: 'ul',

	  template: __webpack_require__(23),

	  initialize: function initialize() {
	    var _this2 = this;

	    this.collection = new _backbone2.default.Collection();
	    this.collection.url = '/notifications/';

	    this.collection.fetch({
	      data: { notification_type: 'global' },
	      success: function success(collection) {
	        if (collection.length == 0) {
	          collection.add(new _backbone2.default.Model({
	            text: 'No notifications'
	          }));
	        }
	        _this2.render();
	      }
	    });
	  },

	  templateHelpers: function templateHelpers() {
	    return {
	      unreadCount: this._getUnread()
	    };
	  },

	  _getUnread: function _getUnread() {
	    var unread = this.collection.filter(function (notification) {
	      return _underscore2.default.isNull(notification.get('datetime_read'));
	    });
	    return unread.length;
	  }
	});

	var NavView = exports.NavView = _backbone4.default.LayoutView.extend({
	  el: 'body',
	  template: false,

	  ui: {
	    container: '#container',
	    toggle: '.mainnav-toggle'
	  },

	  modelEvents: {
	    'change:nav': 'updateLocalStorage'
	  },

	  triggers: {
	    'click @ui.toggle': 'toggle:nav'
	  },

	  regions: {
	    project: '.project-notification-hook',
	    bell: '.nav-bell-hook',
	    prompts: '#notification-hook-2'
	  },

	  initialize: function initialize() {
	    this.model.fetchArro();
	  },

	  onRender: function onRender() {
	    var navStatus = this.model.get('nav');
	    if (navStatus === 'large') {
	      this.ui.container.addClass('mainnav-lg');
	      this.ui.container.removeClass('mainnav-sm');
	    } else if (navStatus === 'small') {
	      this.ui.container.addClass('mainnav-sm');
	      this.ui.container.removeClass('mainnav-lg');
	    }

	    var promptContainer = new PromptContainer({
	      model: this.model
	    });
	    this.showChildView('prompts', promptContainer);

	    this.showChildView('bell', new Bell({
	      model: this.model
	    }));

	    this.showChildView('project', new Project({
	      model: this.model
	    }));
	  },

	  updateLocalStorage: function updateLocalStorage(model) {
	    model.updateLocalStorage();
	  },

	  onToggleNav: function onToggleNav() {
	    var navStatus = this._getNavStatus();
	    this.model.set('nav', navStatus);
	  },

	  /** Return the new nav status.
	  */
	  _getNavStatus: function _getNavStatus() {
	    return this.model.get('nav') === 'large' ? 'small' : 'large';
	  }
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<i class="fa fa-sitemap"></i>\n<span class="menu-title">\n  Projects\n  ';
	 if (project) { 
	__p+='<span class="notification">'+
	((__t=( project ))==null?'':_.escape(__t))+
	'</span>';
	 } 
	__p+='\n</span>\n<i class="arrow"></i>\n';
	}
	return __p;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<li class="b-b b-light" style="border-left:4px solid #fc6e51; '+
	((__t=( readClass ))==null?'':_.escape(__t))+
	'">\n  <a class="'+
	((__t=( mutedText ))==null?'':_.escape(__t))+
	'" '+
	((__t=( getLink ))==null?'':_.escape(__t))+
	' style="color:#555555">\n    '+
	((__t=( text ))==null?'':__t)+
	'\n  </a>\n</li>\n';
	}
	return __p;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<li style="margin:0px 15px; border-right: 2px solid #f1f1f1; border-left: 2px solid #f1f1f1;" class="dropdown">\n  <a class="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">\n    <i class="fa fa-lg fa-bell" style="color:gray;"></i>\n    <span class="label label-danger pos-abt" style="top:5px; right:5px; padding:3px 5px;">\n      '+
	((__t=( unreadCount ))==null?'':_.escape(__t))+
	'\n    </span>\n  </a>\n  <div class="dropdown-menu" aria-labelledby="dropdownMenu1" style="min-width:300px;">\n    <div class="bg-dark wrapper">\n      <strong>Notifications</strong>\n    </div>\n    <ul class="list-unstyled">\n    </ul>\n  </div>\n</li>\n';
	}
	return __p;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<ul class="list-unstyled"></ul>\n';
	}
	return __p;
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<a href="'+
	((__t=( link ))==null?'':_.escape(__t))+
	'">'+
	((__t=( text ))==null?'':_.escape(__t))+
	'</a>\n';
	}
	return __p;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }
/******/ ]);