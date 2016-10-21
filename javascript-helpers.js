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

	var _regions = __webpack_require__(16);

	Object.keys(_regions).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _regions[key];
	    }
	  });
	});

	var _models = __webpack_require__(28);

	Object.keys(_models).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _models[key];
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
	exports.NavRegion = undefined;

	var _backbone = __webpack_require__(2);

	var _models = __webpack_require__(17);

	var _views = __webpack_require__(22);

	var NavRegion = exports.NavRegion = _backbone.Region.extend({
	  el: '#mainnav-container',

	  showNav: function showNav(user, options) {
	    var model = new _models.NavModel({ user: user });
	    this.show(new _views.NavView({
	      model: model,
	      organisationName: options.organisationName,
	      organisationUrl: options.organisationUrl
	    }));
	  }
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NavModel = undefined;

	var _urlParse = __webpack_require__(18);

	var _urlParse2 = _interopRequireDefault(_urlParse);

	var _windowOrGlobal = __webpack_require__(19);

	var _windowOrGlobal2 = _interopRequireDefault(_windowOrGlobal);

	var _backbone = __webpack_require__(20);

	var _routes = __webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavModel = exports.NavModel = _backbone.Model.extend({
	  setUser: function setUser(user) {
	    this.set({ user: user });
	  },

	  getUser: function getUser() {
	    return this.get('user') || null;
	  },

	  isStaff: function isStaff() {
	    var user = this.getUser();
	    return user.get('is_staff');
	  },

	  multipleOrgs: function multipleOrgs() {
	    var user = this.getUser();
	    return this.isStaff() || user.getSchools.length > 1;
	  },

	  reverse: function reverse(urlName) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    return (0, _routes.reverse)(urlName, options);
	  },


	  activeNav: function activeNav(sectionName) {
	    var url = (0, _urlParse2.default)(_windowOrGlobal2.default.location.href);
	    var pathComponents = url.pathname.split('/');

	    var sections = {
	      grant: pathComponents[1] === 'grants',
	      support: pathComponents[2] === 'support' || pathComponents[2] === 'schools' && pathComponents[3] !== 'change' || pathComponents[2] === 'users',
	      choose: pathComponents[3] === 'change',
	      project: pathComponents[3] === 'project',
	      contact: pathComponents[3] === 'name' && pathComponents[4] !== 'group',
	      admin: pathComponents[3] === 'account' || pathComponents[4] === 'group'
	    };

	    return sections[sectionName] ? 'active' : '';
	  }
	});

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("url-parse");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("window-or-global");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("backbone");

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reverse = reverse;
	/** Return the full URL for the given route */
	function reverse(name) {
	  var routeArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var schoolRoot = '/school/' + routeArgs.organisation + '/';

	  var routes = {
	    dashboard: schoolRoot,
	    donation: schoolRoot + 'donation/',
	    project: schoolRoot + 'project/',
	    contact: schoolRoot + 'name/',
	    costcentre: schoolRoot + 'account/',
	    bank: schoolRoot + 'account/bank/',
	    group: schoolRoot + 'name/group/',
	    support: '/main/support/',
	    choose: '/main/schools/change/'
	  };

	  return routes[name];
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NavView = undefined;

	var _underscore = __webpack_require__(4);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _backbone = __webpack_require__(20);

	var _backbone2 = _interopRequireDefault(_backbone);

	var _backbone3 = __webpack_require__(2);

	var _backbone4 = _interopRequireDefault(_backbone3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Prompt = _backbone4.default.ItemView.extend({
	  className: 'alert alert-info',
	  template: __webpack_require__(23)
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
	        read: false,
	        location: window.location.pathname
	      },
	      success: function success() {
	        return _this.render();
	      }
	    });
	  }
	});

	var Notification = _backbone4.default.ItemView.extend({
	  // tagName: 'li',
	  template: __webpack_require__(25),

	  templateHelpers: function templateHelpers() {
	    // A notifications model will be made to handle defaults and make methods
	    // like this neater
	    var link = this.model.get('link');
	    var notification_class = this.model.get('notification_class');
	    var no_notifications = _underscore2.default.isUndefined(link);
	    return {
	      readClass: _underscore2.default.isNull(this.model.get('datetime_cleared')) ? 'background-color: #d6e5ed;' : '',
	      getLink: no_notifications ? '' : 'href=' + link,
	      mutedText: no_notifications ? 'text-muted' : '',
	      getClass: _underscore2.default.isNull('notification_class') ? '' : notification_class
	    };
	  }
	});

	var Bell = _backbone4.default.CompositeView.extend({
	  childView: Notification,
	  childViewContainer: 'ul',

	  template: __webpack_require__(26),

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
	    var unread_count = this._getUnread();
	    return {
	      unreadCount: unread_count,
	      hidden: unread_count == 0 ? 'hidden' : ''
	    };
	  },

	  _getUnread: function _getUnread() {
	    var unread = this.collection.filter(function (notification) {
	      return _underscore2.default.isNull(notification.get('datetime_cleared'));
	    });
	    return unread.length;
	  }
	});

	var NavView = exports.NavView = _backbone4.default.LayoutView.extend({
	  attributes: {
	    'id': '#mainnav'
	  },

	  template: __webpack_require__(27),

	  regions: {
	    bell: '.nav-bell-hook'
	  },

	  templateHelpers: function templateHelpers() {
	    var _this3 = this;

	    var user = this.model.getUser();

	    return {
	      activeOrganisation: user.getActiveSchool(),
	      getActive: this.model.activeNav,
	      getUrl: function getUrl(urlName, organisation) {
	        return _this3.model.reverse(urlName, { organisation: organisation });
	      },
	      isStaff: this.model.isStaff(),
	      multipleOrgs: this.model.multipleOrgs(),
	      organisationName: this.getOption('organisationName'),
	      organisationUrl: this.getOption('organisationUrl')
	    };
	  },

	  onRender: function onRender() {
	    var bell = new Bell({
	      model: this.model
	    });

	    this.showChildView('bell', bell);
	  }
	});

/***/ },
/* 23 */
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
	__p+='<li class="'+
	((__t=( getClass ))==null?'':_.escape(__t))+
	'" style="'+
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<li style="margin:0px 15px; border-right: 2px solid #f1f1f1; border-left: 2px solid #f1f1f1;" class="dropdown">\n  <a class="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">\n    <i class="fa fa-lg fa-bell" style="color:gray;"></i>\n    <span class="label label-danger pos-abt '+
	((__t=( hidden ))==null?'':_.escape(__t))+
	'"\n      style="top:5px; right:5px; padding:3px 5px;">\n      '+
	((__t=( unreadCount ))==null?'':_.escape(__t))+
	'\n    </span>\n  </a>\n  <div class="dropdown-menu" aria-labelledby="dropdownMenu1" style="min-width:300px;">\n    <div class="bg-dark wrapper">\n      <strong>Notifications</strong>\n    </div>\n    <ul class="list-unstyled">\n    </ul>\n  </div>\n</li>\n';
	}
	return __p;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<div id="mainnav-menu-wrap">\n  <header id="navbar">\n    <div id="navbar-container">\n      <div class="navbar-header">\n        <a class="navbar-brand" href="{% url "index" %}"></a>\n      </div>\n      <div class="navbar-content clearfix">\n        <div class="col-lg-12">\n          <div class="navbar-left menu-button">\n            <a href="" class="mainnav-toggle">\n              <i class="fa fa-navicon fa-lg"></i>\n            </a>\n          </div>\n          <ul class="nav navbar-nav navbar-right">\n            <li><div class="nav-bell-hook"></div></li>\n            <li class="user_name">\n              <a href="'+
	((__t=( organisationUrl ))==null?'':_.escape(__t))+
	'">\n                '+
	((__t=( organisationName ))==null?'':_.escape(__t))+
	'\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </header>\n  <div class="nano">\n    <div class="nano-content">\n      <ul id="mainnav-menu" class="list-group">\n      <li class="'+
	((__t=( getActive('dashboard') ))==null?'':_.escape(__t))+
	'">\n          <a href="'+
	((__t=( getUrl('dashboard', activeOrganisation) ))==null?'':_.escape(__t))+
	'">\n          <i class="fa fa-dashboard"></i>\n          <span class="menu-title">\n              <strong>Dashboard</strong>\n          </span>\n          </a>\n      </li>\n\n      <li class="list-divider"></li>\n      <li class="list-header">Activities</li>\n\n      <li class="nav-donations '+
	((__t=( getActive('donation') ))==null?'':_.escape(__t))+
	'">\n        <a href="'+
	((__t=( getUrl('donation', activeOrganisation) ))==null?'':_.escape(__t))+
	'create">\n          <i class="fa fa-gift"></i>\n            <span class="menu-title">Donations</span>\n          <i class="arrow"></i>\n        </a>\n        <ul class="collapse">\n          <li class="">\n            <a href="'+
	((__t=( getUrl('donation', activeOrganisation) ))==null?'':_.escape(__t))+
	'create">\n              Record Donation\n            </a>\n          </li>\n          <li class="list-divider"></li>\n          <li>\n            <a href="'+
	((__t=( getUrl('donation', activeOrganisation) ))==null?'':_.escape(__t))+
	'">\n              View Donations\n            </a>\n          </li>\n          <li>\n            <a href="'+
	((__t=( getUrl('donation', activeOrganisation) ))==null?'':_.escape(__t))+
	'period/">\n              Gift Aid Claims\n            </a>\n          </li>\n          <li class="list-divider"></li>\n          <li>\n            <a href="'+
	((__t=( getUrl('donation', activeOrganisation) ))==null?'':_.escape(__t))+
	'amend/">\n              Amend/Remove Donations\n            </a>\n          </li>\n        </ul>\n      </li>\n\n      <li class="nav-grants '+
	((__t=( getActive('grant') ))==null?'':_.escape(__t))+
	'">\n        <a href="/grants/">\n          <i class="fa fa-briefcase"></i>\n          <span class="menu-title">Grants</span>\n          <i class="arrow"></i>\n        </a>\n      </li>\n\n      <li class="list-divider"></li>\n\n      <li class="list-header">System</li>\n\n      <li class="nav-projects '+
	((__t=( getActive('project') ))==null?'':_.escape(__t))+
	'">\n          <a href="'+
	((__t=( getUrl('project', activeOrganisation) ))==null?'':_.escape(__t))+
	'"\n            class="project-notification-hook">\n            <i class="fa fa-sitemap"></i>\n            <span class="menu-title">Projects</span>\n            <i class="arrow"></i>\n          </a>\n      </li>\n\n      <li class="nav-reports '+
	((__t=( getActive('report') ))==null?'':_.escape(__t))+
	'">\n        <a href="'+
	((__t=( getUrl('dashboard', activeOrganisation) ))==null?'':_.escape(__t))+
	'">\n          <i class="fa fa-folder-o"></i>\n          <span class="menu-title">Reports</span>\n          <i class="arrow"></i>\n        </a>\n      </li>\n\n      <li class="nav-stakeholder '+
	((__t=( getActive('contact') ))==null?'':_.escape(__t))+
	'">\n        <a href="'+
	((__t=( getUrl('contact', activeOrganisation) ))==null?'':_.escape(__t))+
	'">\n          <i class="fa fa-users"></i>\n          <span class="menu-title">SRM</span>\n          <i class="arrow"></i>\n        </a>\n      </li>\n\n      <li class="nav-admin '+
	((__t=( getActive('admin') ))==null?'':_.escape(__t))+
	'">\n        <a href="#">\n          <i class="fa fa-wrench"></i>\n          <span class="menu-title">Admin</span>\n          <i class="arrow"></i>\n        </a>\n        <ul class="collapse">\n        <li>\n          <a href="'+
	((__t=( getUrl('costcentre', activeOrganisation) ))==null?'':_.escape(__t))+
	'">Accounts</a>\n        </li>\n        <li>\n          <a href="'+
	((__t=( getUrl('bank', activeOrganisation) ))==null?'':_.escape(__t))+
	'">Bank Account</a>\n        </li>\n        <li>\n          <a href="'+
	((__t=( getUrl('group', activeOrganisation) ))==null?'':_.escape(__t))+
	'">Groups</a>\n        </li>\n        </ul>\n      </li>\n\n      ';
	 if (isStaff) { 
	__p+='\n      <li class="list-divider"></li>\n      <li class="nav-stakeholder '+
	((__t=( getActive('support') ))==null?'':_.escape(__t))+
	'">\n        <a href="'+
	((__t=( getUrl('support') ))==null?'':_.escape(__t))+
	'">\n        <i class="fa fa-crosshairs"></i>\n        <span class="menu-title">Support</span>\n        <i class="arrow"></i>\n        </a>\n      </li>\n      ';
	 } 
	__p+='\n\n      ';
	 if (multipleOrgs) { 
	__p+='\n      <li class="nav-admin '+
	((__t=( getActive('choose') ))==null?'':_.escape(__t))+
	'">\n          <a href="'+
	((__t=( getUrl('choose') ))==null?'':_.escape(__t))+
	'">\n          <i class="fa fa-home"></i>\n          <span class="menu-title">School</span>\n          <i class="arrow"></i>\n          </a>\n      </li>\n      ';
	 } 
	__p+='\n\n      <li class="list-divider"></li>\n      <li class="">\n        <a href="/logout/">\n          <i class="fa fa-off"></i>\n          <span class="menu-title">Logout</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n';
	}
	return __p;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.User = undefined;

	var _windowOrGlobal = __webpack_require__(19);

	var _windowOrGlobal2 = _interopRequireDefault(_windowOrGlobal);

	var _backbone = __webpack_require__(20);

	var _backbone2 = __webpack_require__(29);

	var _backbone3 = _interopRequireDefault(_backbone2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var User = exports.User = _backbone.Model.extend({
	  idAttribute: 'email',
	  localStorage: new _backbone3.default('User'),

	  setCredentials: function setCredentials(jwt) {
	    var data = jwt.user;
	    data.token = jwt.token;
	    this.save(data);
	  },

	  getToken: function getToken() {
	    return this.get('token');
	  },

	  /** Looks up the window.location.href and figures out what the school id
	   * should be. If the school id isn't set, then this makes no change.
	   */
	  setActiveSchool: function setActiveSchool() {
	    var path = _windowOrGlobal2.default.location.pathname;
	    if (path) {
	      var parts = path.split('/');
	      if (parts[1] == 'school') {
	        var schoolId = parseInt(parts[2]);
	        this.save({ activeSchool: schoolId });
	      }
	    }
	  },

	  getActiveSchool: function getActiveSchool() {
	    return this.get('activeSchool');
	  },

	  getSchools: function getSchools() {
	    return this.get('organisations') || [];
	  }
	});

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("backbone.localstorage");

/***/ }
/******/ ]);