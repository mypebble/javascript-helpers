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

	var _regions2 = __webpack_require__(24);

	Object.keys(_regions2).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _regions2[key];
	    }
	  });
	});

	var _regions3 = __webpack_require__(32);

	Object.keys(_regions3).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _regions3[key];
	    }
	  });
	});

	var _models = __webpack_require__(46);

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

	  showNav: function showNav(user, active_feature_flags) {
	    var model = new _models.NavModel({ user: user });
	    this.show(new _views.NavView({
	      model: model,
	      active_feature_flags: active_feature_flags
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
	  defaults: {
	    activeSchool: '',
	    userName: ''
	  },

	  setUser: function setUser(user) {
	    var username = user.pick('first_name', 'last_name');

	    this.set({
	      user: user,
	      userName: username.first_name + ' ' + username.last_name,
	      activeSchool: user.getActiveSchoolName()
	    });
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
	      volunteer: pathComponents[3] === 'volunteer',
	      sponsor: pathComponents[3] === 'sponsor',
	      letting: pathComponents[3] === 'letting',
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
	    volunteer: schoolRoot + 'volunteer/',
	    sponsor: schoolRoot + 'sponsor/',
	    letting: schoolRoot + 'letting/',
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

	var _backbone = __webpack_require__(2);

	var _backbone2 = _interopRequireDefault(_backbone);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavView = exports.NavView = _backbone2.default.LayoutView.extend({
	  attributes: {
	    'id': 'mainnav'
	  },

	  template: __webpack_require__(23),

	  templateHelpers: function templateHelpers() {
	    var _this = this;

	    var user = this.model.getUser();

	    return {
	      activeOrganisation: user.getActiveSchool(),
	      getActive: this.model.activeNav,
	      getUrl: function getUrl(urlName, organisation) {
	        return _this.model.reverse(urlName, { organisation: organisation });
	      },
	      isStaff: this.model.isStaff(),
	      multipleOrgs: this.model.multipleOrgs(),
	      feature_enabled: function feature_enabled(feature) {
	        return _this._active_feature(feature);
	      }
	    };
	  },

	  _active_feature: function _active_feature(feature) {
	    var active_feature_flags = this.getOption('active_feature_flags');
	    return _underscore2.default.isUndefined(active_feature_flags) ? false : active_feature_flags.indexOf(feature) !== -1;
	  }
	});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<div id="mainnav-menu-wrap">\n  <div class="nano">\n    <div class="nano-content">\n      <ul id="mainnav-menu" class="list-group">\n\n        <li class="nav-projects '+
	((__t=( getActive('project') ))==null?'':_.escape(__t))+
	'">\n          <a href="'+
	((__t=( getUrl('project', activeOrganisation) ))==null?'':_.escape(__t))+
	'"\n             class="b-b" style="padding:20px;">\n             <i class="fa fa-sitemap"></i>\n             <span class="menu-title">Projects</span>\n          </a>\n        </li>\n\n        <li class="nav-grants '+
	((__t=( getActive('grant') ))==null?'':_.escape(__t))+
	'">\n          <a href="/grants/" class="b-b" style="padding:20px;">\n            <i class="fa fa-briefcase"></i>\n            <span class="menu-title">Grants</span>\n          </a>\n        </li>\n\n        <li class="nav-donations '+
	((__t=( getActive('donation') ))==null?'':_.escape(__t))+
	'">\n          <a href="'+
	((__t=( getUrl('donation', activeOrganisation) ))==null?'':_.escape(__t))+
	'create"\n             class="b-b" style="padding:20px;">\n             <i class="fa fa-gift"></i>\n             <span class="menu-title">Donations</span>\n             <i class="arrow"></i>\n          </a>\n          <ul class="collapse">\n            <li>\n              <a href="'+
	((__t=( getUrl('donation', activeOrganisation) ))==null?'':_.escape(__t))+
	'create">\n                Record Donation\n              </a>\n            </li>\n            <li class="list-divider"></li>\n            <li>\n              <a href="'+
	((__t=( getUrl('donation', activeOrganisation) ))==null?'':_.escape(__t))+
	'">\n                View Donations\n              </a>\n            </li>\n            <li>\n              <a href="'+
	((__t=( getUrl('donation', activeOrganisation) ))==null?'':_.escape(__t))+
	'period/">\n                Gift Aid Claims\n              </a>\n            </li>\n            <li class="list-divider"></li>\n            <li>\n              <a href="'+
	((__t=( getUrl('donation', activeOrganisation) ))==null?'':_.escape(__t))+
	'amend/">\n                Amend/Remove Donations\n              </a>\n            </li>\n          </ul>\n        </li>\n\n        ';
	 if (feature_enabled('volunteers')) { 
	__p+='\n          <li class="nav-volunteers '+
	((__t=( getActive('volunteer') ))==null?'':_.escape(__t))+
	'">\n            <a href="'+
	((__t=( getUrl('volunteer', activeOrganisation) ))==null?'':_.escape(__t))+
	'">\n              <span class="menu-title">Volunteers</span>\n            </a>\n          </li>\n        ';
	 } 
	__p+='\n\n        ';
	 if (feature_enabled('sponsors')) { 
	__p+='\n          <li class="nav-sponsorship '+
	((__t=( getActive('sponsor') ))==null?'':_.escape(__t))+
	'">\n            <a href="'+
	((__t=( getUrl('sponsor', activeOrganisation) ))==null?'':_.escape(__t))+
	'">\n              <span class="menu-title">Sponsors</span>\n            </a>\n          </li>\n        ';
	 } 
	__p+='\n\n        ';
	 if (feature_enabled('lettings')) { 
	__p+='\n          <li class="nav-admin '+
	((__t=( getActive('letting') ))==null?'':_.escape(__t))+
	'">\n            <a href="'+
	((__t=( getUrl('letting', activeOrganisation) ))==null?'':_.escape(__t))+
	'">\n              <span class="menu-title">Services and Lettings</span>\n            </a>\n          </li>\n        ';
	 } 
	__p+='\n\n        <li class="nav-stakeholder '+
	((__t=( getActive('contact') ))==null?'':_.escape(__t))+
	'">\n          <a href="'+
	((__t=( getUrl('contact', activeOrganisation) ))==null?'':_.escape(__t))+
	'">\n            <span class="menu-title">Campaigns</span>\n          </a>\n        </li>\n\n        <li class="nav-admin '+
	((__t=( getActive('admin') ))==null?'':_.escape(__t))+
	'">\n          <a href="#">\n            <span class="menu-title">Admin</span>\n            <i class="arrow"></i>\n          </a>\n          <ul class="collapse">\n            <li>\n              <a href="'+
	((__t=( getUrl('costcentre', activeOrganisation) ))==null?'':_.escape(__t))+
	'">Accounts</a>\n            </li>\n            <li>\n              <a href="'+
	((__t=( getUrl('bank', activeOrganisation) ))==null?'':_.escape(__t))+
	'">Bank Account</a>\n            </li>\n            <li>\n              <a href="'+
	((__t=( getUrl('group', activeOrganisation) ))==null?'':_.escape(__t))+
	'">Groups</a>\n            </li>\n          </ul>\n        </li>\n\n        ';
	 if (isStaff) { 
	__p+='\n        <li class="list-divider"></li>\n        <li class="nav-stakeholder '+
	((__t=( getActive('support') ))==null?'':_.escape(__t))+
	'">\n          <a href="'+
	((__t=( getUrl('support') ))==null?'':_.escape(__t))+
	'">\n            <span class="menu-title">Support</span>\n          </a>\n        </li>\n        ';
	 } 
	__p+='\n\n        ';
	 if (multipleOrgs) { 
	__p+='\n        <li class="nav-admin '+
	((__t=( getActive('choose') ))==null?'':_.escape(__t))+
	'">\n          <a href="'+
	((__t=( getUrl('choose') ))==null?'':_.escape(__t))+
	'">\n            <span class="menu-title">School</span>\n          </a>\n        </li>\n        ';
	 } 
	__p+='\n\n        <li>\n          <a href="//www.mypebble.co.uk/support/arro/" target="_blank"\n              rel="noopener noreferrer">\n            Help\n          </a>\n        </li>\n      </ul>\n\n      <div class="pos-abt" style="bottom:0px; width:100%;">\n        <span class="block font-bold text-white"\n              style="padding-left:20px; margin-bottom:10px;">\n          See what\'s coming soon!\n        </span>\n\n        <ul id="mainnav-menu" class="list-group m-b-none">\n          <li>\n            <a href="/club/" class="b-b">\n              <span class="menu-title">\n                Clubs &amp; Events\n              </span>\n            </a>\n          </li>\n          <li>\n            <a href="/service/" class="b-b">\n              <span class="menu-title">\n                Services &amp; Lettings\n              </span>\n            </a>\n          </li>\n          <li>\n            <div style="background:gray; padding:10px;">\n              <strong class="text-white" style="padding-left:20px;">\n                &copy; Arro by Pebble\n              </strong>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n';
	}
	return __p;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PromptRegion = undefined;

	var _backbone = __webpack_require__(2);

	var _page = __webpack_require__(25);

	var _page2 = _interopRequireDefault(_page);

	var _views = __webpack_require__(28);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PromptRegion = exports.PromptRegion = _backbone.Region.extend({
	  el: '#prompt-hook',

	  showPrompts: function showPrompts(user) {
	    var PromptCollection = _page2.default.extend();
	    var prompt_collection = new PromptCollection([], {
	      urlBase: '/notifications/',
	      search_params: {
	        notification_type: 'prompt',
	        active_school: user.getActiveSchool(),
	        read: false,
	        location: window.location.pathname + window.location.hash
	      }
	    });

	    this.show(new _views.PromptView({
	      model: user,
	      collection: prompt_collection
	    }));
	  }
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _underscore = __webpack_require__(4);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _backbone = __webpack_require__(26);

	var _backbone2 = _interopRequireDefault(_backbone);

	var _base = __webpack_require__(27);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** Provides some helper methods and default values for the pageable
	* collection.
	*/
	var PagColProto = _backbone2.default.prototype;

	var DefaultPageCollection = _backbone2.default.extend({
	  model: _base2.default,
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

	  pageSet: function pageSet() {
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

	    var pages = _underscore2.default.range(middle - this.state.pagesInRange, max);
	    return pages;
	  },

	  parseRecords: function parseRecords(response) {
	    return response.results;
	  },

	  parseState: function parseState(response) {
	    var rtnState = {
	      totalRecords: response.count,
	      totalPages: response.page_count
	    };

	    if (response.per_page) {
	      rtnState.pageSize = response.per_page;
	    }

	    return rtnState;
	  },

	  url: function url() {
	    return this.urlBase;
	  },

	  initialize: function initialize(models, options) {
	    this.options = options || {};
	    this.urlBase = options.urlBase;
	    this.search_params = options.search_params || {};
	    var state = _underscore2.default.clone(this.state);

	    if (_underscore2.default.isUndefined(this.urlBase)) {
	      console.error('urlBase cannot be undefined');
	    }

	    if (options.state) {
	      _underscore2.default.extend(state, options.state);
	      this.state = state;
	    }
	  },

	  /** Override the backbone paginator's fetch to always set search_params,
	  * always reset and use the proper jQuery calls
	  */
	  fetch: function fetch(options) {
	    options = options || {};
	    var data = options.data || {};
	    data = _underscore2.default.extend(data, this.search_params);
	    options.data = data;
	    options.traditional = true;
	    PagColProto.fetch.call(this, options);
	  },

	  /** Clears the form.
	  */
	  clearForm: function clearForm() {
	    this.search_params = {};

	    this.fetch({ page: 1 });
	    return this;
	  },

	  /** Empty the collection
	  */
	  empty: function empty() {
	    this.set([]);
	  },

	  /**
	  * Instruct the server to restrict collection based on category filters.
	  */
	  categoryFilter: function categoryFilter(categoryFilterTerms) {
	    _underscore2.default.extend(this.search_params, categoryFilterTerms);

	    this.state.currentPage = 1;
	    this.fetch();
	    return this;
	  },

	  /** Run a search against the API.
	  */
	  search: function search(term) {
	    term = term || undefined;
	    this.search_params.search = term;

	    this.state.currentPage = 1;
	    this.fetch();
	    return this;
	  },

	  /** Handle cases of an initial empty state.
	  */
	  multiplePages: function multiplePages() {
	    if (this.state.totalPages) {
	      return this.state.totalPages > 1;
	    }
	    return false;
	  },

	  singlePage: function singlePage() {
	    return !this.multiplePages();
	  }
	});

	exports.default = DefaultPageCollection;

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("backbone.paginator");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _underscore = __webpack_require__(4);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _backbone = __webpack_require__(20);

	var _backbone2 = _interopRequireDefault(_backbone);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _backbone2.default.Model.extend({
	  initialize: function initialize(options) {
	    options = options || {};

	    if (_underscore2.default.isUndefined(this.options)) {
	      this.options = {};
	    }
	    _underscore2.default.extend(this.options, options);
	  },

	  /** Handle the create/update cases in a single method.
	  */
	  url: function url() {
	    var url = this.get('url');

	    if (_underscore2.default.isUndefined(url)) {
	      url = this.options.url;
	    }

	    if (_underscore2.default.isUndefined(url) && this.collection) {
	      if (_underscore2.default.isFunction(this.collection.url)) {
	        url = this.collection.url();
	      } else {
	        url = this.collection.url;
	      }
	    }

	    if (_underscore2.default.isUndefined(url)) {
	      console.error('url is undefined');
	    }

	    var last = url.slice(url.length - 1, url.length);

	    if (last !== '/') {
	      url += '/';
	    }

	    return url;
	  }
	});

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PromptView = undefined;

	var _backbonePoller = __webpack_require__(29);

	var _backbonePoller2 = _interopRequireDefault(_backbonePoller);

	var _backbone = __webpack_require__(2);

	var _backbone2 = _interopRequireDefault(_backbone);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Prompt = _backbone2.default.LayoutView.extend({
	  template: __webpack_require__(30)
	});

	var PromptView = exports.PromptView = _backbone2.default.CompositeView.extend({
	  childView: Prompt,
	  childViewContainer: 'ul',

	  template: __webpack_require__(31),

	  initialize: function initialize() {
	    var poller = _backbonePoller2.default.get(this.collection, {
	      continueOnError: false,
	      delay: 30000
	    });

	    this.listenTo(poller, 'success', this.render);
	    poller.start();
	  }
	});

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("backbone-poller");

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<div title="'+
	((__t=( alt_text ))==null?'':__t)+
	'" class="prompt prompt-info">\n  <div class="step">Next Step</div>\n  <div class="prompt-body">\n    '+
	((__t=( text ))==null?'':__t)+
	'\n  </div>\n  <div class="action">\n    <a class="btn" href="'+
	((__t=( link ))==null?'':_.escape(__t))+
	'">'+
	((__t=( button_text ))==null?'':_.escape(__t))+
	'</a>\n  </div>\n</div>\n';
	}
	return __p;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<ul class="list-unstyled"></ul>\n';
	}
	return __p;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TopbarRegion = undefined;

	var _backbone = __webpack_require__(2);

	var _models = __webpack_require__(17);

	var _notification = __webpack_require__(33);

	var _layout = __webpack_require__(36);

	var TopbarRegion = exports.TopbarRegion = _backbone.Region.extend({
	  el: '#navbar',

	  showTopbar: function showTopbar(user) {
	    var model = new _models.NavModel();
	    model.setUser(user);

	    var notification_collection = new _notification.NotificationCollection([], {
	      urlBase: '/notifications/',
	      search_params: {
	        notification_type: 'global',
	        active_school: user.getActiveSchool()
	      },
	      state: {
	        pageSize: 5,
	        pagesInRange: 5
	      }
	    });

	    var unread_collection = new _notification.NotificationCollection([], {
	      urlBase: '/notifications/unread/',
	      search_params: {
	        notification_type: 'global',
	        active_school: user.getActiveSchool()
	      },
	      state: {
	        pageSize: 5,
	        pagesInRange: 5
	      }
	    });

	    this.show(new _layout.TopbarView({
	      model: model,
	      collection: notification_collection,
	      unread_collection: unread_collection
	    }));
	  }
	});

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NotificationCollection = undefined;

	var _page = __webpack_require__(25);

	var _page2 = _interopRequireDefault(_page);

	var _models = __webpack_require__(34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NotificationCollection = exports.NotificationCollection = _page2.default.extend({
	  model: _models.NotificationModel
	});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NotificationModel = undefined;

	var _underscore = __webpack_require__(4);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _form = __webpack_require__(35);

	var _form2 = _interopRequireDefault(_form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NotificationModel = exports.NotificationModel = _form2.default.extend({
	  defaults: {
	    datetime_cleared: '',
	    link: '',
	    notification_class: ''
	  },

	  isCleared: function isCleared() {
	    return !_underscore2.default.isNull(this.get('datetime_cleared'));
	  }
	});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(27);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** Generic form handler model that we can pass into any form view
	* Extend this to add extra defaults, or module-specific logic.
	*/
	exports.default = _base2.default.extend();

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TopbarView = undefined;

	var _underscore = __webpack_require__(4);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _backbonePoller = __webpack_require__(29);

	var _backbonePoller2 = _interopRequireDefault(_backbonePoller);

	var _backbone = __webpack_require__(2);

	var _backbone2 = _interopRequireDefault(_backbone);

	var _backbone3 = __webpack_require__(20);

	var _backbone4 = _interopRequireDefault(_backbone3);

	var _pagination = __webpack_require__(37);

	var _pagination2 = _interopRequireDefault(_pagination);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Notification = _backbone2.default.LayoutView.extend({
	  template: __webpack_require__(39),

	  templateHelpers: function templateHelpers() {
	    var notification_class = this.model.get('notification_class');
	    var read_class = this.model.isCleared() ? '' : 'notification-unread';
	    var link = this.model.get('link');

	    return {
	      mutedText: link ? '' : 'text-muted',
	      notification_class: notification_class + ' ' + read_class,
	      link: link + '?auth=' + this._getToken()
	    };
	  },

	  _getToken: function _getToken() {
	    return this.getOption('user').getToken();
	  }
	});

	var NotificationList = _backbone2.default.CompositeView.extend({
	  childView: Notification,
	  childViewContainer: 'ul',

	  childViewOptions: function childViewOptions() {
	    return {
	      user: this.model
	    };
	  },

	  template: __webpack_require__(40),

	  collectionEvents: {
	    change: 'render'
	  }
	});

	var UnreadCountView = _backbone2.default.LayoutView.extend({
	  template: __webpack_require__(41),

	  collectionEvents: {
	    'sync': 'render'
	  },

	  templateHelpers: function templateHelpers() {
	    var unread_count = this.collection.state.totalRecords;
	    return {
	      unreadCount: unread_count,
	      hidden: unread_count ? '' : 'hidden'
	    };
	  }
	});

	var BellIcon = _backbone2.default.LayoutView.extend({
	  template: __webpack_require__(42),

	  ui: {
	    bell: '.fa-bell'
	  },

	  collectionEvents: {
	    sync: 'animate'
	  },

	  events: function events() {
	    var _this = this;

	    var events = {};
	    var animation_end_events = ['webkitAnimationEnd', 'mozAnimationEnd', 'MSAnimationEnd', 'onanimationend', 'animationend'];

	    _underscore2.default.each(animation_end_events, function (event) {
	      events[event + ' @ui.bell'] = function () {
	        return _this.ui.bell.removeClass('animated swing');
	      };
	    });

	    return events;
	  },

	  animate: function animate() {
	    var old_count = this.count;
	    this.count = this.collection.state.totalRecords;
	    if (this.count == old_count || this.count == 0) {
	      return;
	    }

	    this.ui.bell.addClass('animated swing');
	  }
	});

	var ClearView = _backbone2.default.LayoutView.extend({
	  template: __webpack_require__(43),

	  ui: {
	    clearAll: '.clear-all'
	  },

	  events: {
	    'click @ui.clearAll': 'clearAll'
	  },

	  collectionEvents: {
	    sync: 'render'
	  },

	  templateHelpers: function templateHelpers() {
	    return {
	      disable_clear: this.collection.state.totalRecords > 5 ? '' : 'hidden'
	    };
	  },

	  clearAll: function clearAll() {
	    var full_collection = this.getOption('full_collection');

	    var query_params = full_collection.search_params;
	    var school = query_params.active_school;
	    var type = query_params.notification_type;

	    var base_url = '/notifications/markread/';
	    var url = base_url + '?active_school=' + school + '&notification_type=' + type;

	    _backbone4.default.sync('create', new _backbone4.default.Model(), {
	      url: url,
	      success: function success() {
	        return full_collection.fetch();
	      }
	    });
	  }
	});

	var BellLayout = _backbone2.default.LayoutView.extend({
	  className: 'dropdown',

	  attributes: {
	    style: 'padding: 15px 15px 5px 15px;'
	  },

	  template: __webpack_require__(44),

	  regions: {
	    notificationList: '.notification-list-hook',
	    unreadCount: '.unread-count-hook',
	    page: '.page-hook',
	    bellIcon: '.bell-icon-hook',
	    clear: '.clear-hook'
	  },

	  onRender: function onRender() {
	    var notifications_view = new NotificationList({
	      collection: this.collection,
	      model: this.model
	    });

	    var unread_view = new UnreadCountView({
	      collection: this.getOption('unread_collection')
	    });

	    var page_view = new _pagination2.default({
	      collection: this.collection
	    });

	    var bell_icon = new BellIcon({
	      collection: this.getOption('unread_collection')
	    });

	    var clear_button = new ClearView({
	      collection: this.getOption('unread_collection'),
	      full_collection: this.collection
	    });

	    this.showChildView('notificationList', notifications_view);
	    this.showChildView('unreadCount', unread_view);
	    this.showChildView('page', page_view);
	    this.showChildView('bellIcon', bell_icon);
	    this.showChildView('clear', clear_button);
	  }
	});

	var TopbarView = exports.TopbarView = _backbone2.default.LayoutView.extend({
	  attributes: {
	    'id': 'navbar-container'
	  },

	  template: __webpack_require__(45),

	  regions: {
	    bell: '.nav-bell-hook'
	  },

	  collectionEvents: function collectionEvents() {
	    var _this2 = this;

	    return {
	      sync: function sync() {
	        return _this2.getOption('unread_collection').fetch();
	      }
	    };
	  },

	  templateHelpers: function templateHelpers() {
	    return {
	      multipleOrgs: this.model.multipleOrgs()
	    };
	  },

	  onRender: function onRender() {
	    this.getOption('unread_collection').fetch();
	    var poller = _backbonePoller2.default.get(this.collection, {
	      continueOnError: false,
	      delay: 30000
	    });

	    this.listenTo(poller, 'error', this.reportError);
	    this.listenTo(poller, 'success', this.noNotifications);
	    poller.start();

	    var bell = new BellLayout({
	      model: this.model.getUser(),
	      collection: this.collection,
	      unread_collection: this.getOption('unread_collection')
	    });

	    this.showChildView('bell', bell);
	  },

	  noNotifications: function noNotifications() {
	    if (this.collection.length == 0) {
	      this.collection.set([{
	        text: 'No notifications',
	        link: null
	      }]);
	    }
	  },

	  reportError: function reportError() {
	    this.collection.set([{ text: 'There was an error getting your notifications.\n      Please try again later.' }]);
	  }
	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _underscore = __webpack_require__(4);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _backbone = __webpack_require__(2);

	var _backbone2 = _interopRequireDefault(_backbone);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Simplified version of Arro's page view for the notifications menu.
	*/
	exports.default = _backbone2.default.LayoutView.extend({
	  className: 'row',
	  template: __webpack_require__(38),

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

	  templateHelpers: function templateHelpers() {
	    var model = null;

	    if (!_underscore2.default.isUndefined(this.model)) {
	      model = this.model;
	    } else if (!_underscore2.default.isUndefined(this.collection)) {
	      model = this.collection;
	    } else {
	      console.error('this.model or this.collection must be set');
	    }

	    return {
	      page: model.state.currentPage,

	      disabledFirst: function disabledFirst() {
	        if (!model.hasPreviousPage()) {
	          return 'disabled';
	        }
	        return '';
	      },

	      disabledLast: function disabledLast() {
	        if (!model.hasNextPage()) {
	          return 'disabled';
	        }
	        return '';
	      }
	    };
	  },

	  onPageNext: function onPageNext() {
	    if (this.collection.hasNextPage()) {
	      this.collection.getNextPage();
	    }
	  },

	  onPagePrev: function onPagePrev() {
	    if (this.collection.hasPreviousPage()) {
	      this.collection.getPreviousPage();
	    }
	  }
	});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<div class="col-md-2 col-md-offset-3">\n  <div class="pull-right">\n    <a data-page="prev" href="#" aria-label="Previous"\n                                 class="page-prev '+
	((__t=( disabledFirst() ))==null?'':_.escape(__t))+
	'">\n       <span class="glyphicon glyphicon-chevron-left"></span>\n    </a>\n  </div>\n</div>\n\n<div class="col-md-2">\n  <div class="text-center">\n    '+
	((__t=( page ))==null?'':_.escape(__t))+
	'\n  </div>\n</div>\n\n<div class="col-md-2">\n  <div class="pull-left">\n    <a data-page="next" href="#" aria-label="Next"\n                                 class="page-next '+
	((__t=( disabledLast() ))==null?'':_.escape(__t))+
	'">\n     <span class="glyphicon glyphicon-chevron-right"></span>\n    </a>\n  </div>\n</div>\n';
	}
	return __p;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<li class="notification '+
	((__t=( notification_class ))==null?'':_.escape(__t))+
	'">\n  <a class="'+
	((__t=( mutedText ))==null?'':_.escape(__t))+
	'" href="'+
	((__t=( link ))==null?'':_.escape(__t))+
	'">\n    '+
	((__t=( text ))==null?'':__t)+
	'\n  </a>\n</li>\n';
	}
	return __p;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<ul class="list-unstyled"></ul>\n';
	}
	return __p;
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<span class="label label-danger pos-abt '+
	((__t=( hidden ))==null?'':_.escape(__t))+
	'"\n      style="top:5px; right:5px; padding:3px 5px;">\n      '+
	((__t=( unreadCount ))==null?'':_.escape(__t))+
	'\n</span>\n';
	}
	return __p;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<i class="fa fa-lg fa-bell" style="color:gray;"></i>\n';
	}
	return __p;
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<div class="pull-right" '+
	((__t=( disable_clear ))==null?'':_.escape(__t))+
	'>\n  <a class="clear-all">Clear All</a>\n</div>\n';
	}
	return __p;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<a class="dropdown-toggle" type="button" id="dropdownMenu1"\n                                         data-toggle="dropdown"\n                                         aria-haspopup="true"\n                                         aria-expanded="true">\n  <div class="bell-icon-hook"></div>\n  <div class="unread-count-hook"></div>\n</a>\n<div class="notification-header dropdown-menu" aria-labelledby="dropdownMenu1"\n                                              style="min-width:300px;">\n  <div class="bg-dark wrapper" style="min-height: 62px;">\n    <div class="row">\n      <div class="col-md-12">\n        <div class="pull-left" style="line-height: 32px;">\n          <strong>Notifications</strong>\n        </div>\n        <div class="clear-hook"></div>\n      </div>\n    </div>\n  </div>\n  <div class="notification-list-hook"></div>\n  <div class="bg-dark wrapper-sm">\n    <div class="page-hook"></div>\n  </div>\n</div>\n';
	}
	return __p;
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<div class="navbar-header">\n  <a class="navbar-brand" href="/"></a>\n</div>\n\n<div class="navbar-content clearfix">\n  <div class="col-lg-12">\n    <ul class="nav navbar-nav navbar-left">\n      <li class="user_name">\n        <a href="/main/schools/change/">\n          ';
	 if (activeSchool) { 
	__p+='\n          '+
	((__t=( activeSchool ))==null?'':_.escape(__t))+
	'\n          ';
	 if (multipleOrgs) { 
	__p+='\n          &ndash; Change School\n          ';
	 } 
	__p+='\n          ';
	 } else { 
	__p+='\n          Choose School\n          ';
	 } 
	__p+='\n        </a>\n      </li>\n    </ul>\n\n    <ul class="nav navbar-nav navbar-right">\n\n      <li style="padding-bottom:10px;border-right: 2px solid #f1f1f1; border-left: 2px solid #f1f1f1;"\n        class="nav-bell-hook"></li>\n\n      <li class="user_name dropdown">\n        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"\n          aria-haspopup="true" aria-expanded="false">\n          '+
	((__t=( userName ))==null?'':_.escape(__t))+
	'\n        </a>\n        <ul class="dropdown-menu">\n          <li>\n            <a href="/logout/">\n              <i class="fa fa-power-off"></i> Logout\n            </a>\n          </li>\n        </ul>\n      </li>\n\n    </ul>\n  </div>\n</div>\n';
	}
	return __p;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.User = undefined;

	var _underscore = __webpack_require__(4);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _windowOrGlobal = __webpack_require__(19);

	var _windowOrGlobal2 = _interopRequireDefault(_windowOrGlobal);

	var _backbone = __webpack_require__(20);

	var _backbone2 = __webpack_require__(47);

	var _backbone3 = _interopRequireDefault(_backbone2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** The User model forces the current user into local storage so we can easily
	 * maintain their session with JWT.
	 */
	var User = exports.User = _backbone.Model.extend({
	  idAttribute: 'email',
	  localStorage: new _backbone3.default('User'),

	  parse: function parse(data) {
	    return data[0] ? data[0] : data;
	  },

	  /** Attach the JWT and payload to this user. */
	  setCredentials: function setCredentials(jwt) {
	    var data = jwt.user;
	    data.token = jwt.token;
	    this.save(data);
	  },

	  /** Return the JWT for this user to pass into the Authorization header. */
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

	  /** Return the ID of the current active school */
	  getActiveSchool: function getActiveSchool() {
	    return this.get('activeSchool');
	  },

	  /** Return the name of the current active school or an empty string.
	   * Note that for staff users this may return empty as they don't necessarily
	   * list the school in their organisations list.
	   */
	  getActiveSchoolName: function getActiveSchoolName() {
	    var activeSchool = this.getActiveSchool();
	    var schoolName = '';

	    if (activeSchool) {
	      var school = (0, _underscore2.default)(this.getSchools()).findWhere({ id: activeSchool });
	      if (school) {
	        schoolName = school.name;
	      }
	    }

	    return schoolName;
	  },

	  /** Return the list of schools that this user can see.
	   * For staff users, this only returns the schools that they are attached to
	   * in the database. The server will not send a list of every school, for
	   * obvious reasons.
	   */
	  getSchools: function getSchools() {
	    return this.get('organisations') || [];
	  }
	});

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("backbone.localstorage");

/***/ }
/******/ ]);