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

	var _loop = function _loop(_key7) {
	  if (_key7 === "default") return 'continue';
	  Object.defineProperty(exports, _key7, {
	    enumerable: true,
	    get: function get() {
	      return _behaviors[_key7];
	    }
	  });
	};

	for (var _key7 in _behaviors) {
	  var _ret = _loop(_key7);

	  if (_ret === 'continue') continue;
	}

	var _grant = __webpack_require__(3);

	var _loop2 = function _loop2(_key8) {
	  if (_key8 === "default") return 'continue';
	  Object.defineProperty(exports, _key8, {
	    enumerable: true,
	    get: function get() {
	      return _grant[_key8];
	    }
	  });
	};

	for (var _key8 in _grant) {
	  var _ret2 = _loop2(_key8);

	  if (_ret2 === 'continue') continue;
	}

	var _behaviors2 = __webpack_require__(4);

	var _loop3 = function _loop3(_key9) {
	  if (_key9 === "default") return 'continue';
	  Object.defineProperty(exports, _key9, {
	    enumerable: true,
	    get: function get() {
	      return _behaviors2[_key9];
	    }
	  });
	};

	for (var _key9 in _behaviors2) {
	  var _ret3 = _loop3(_key9);

	  if (_ret3 === 'continue') continue;
	}

	var _util = __webpack_require__(7);

	var _loop4 = function _loop4(_key10) {
	  if (_key10 === "default") return 'continue';
	  Object.defineProperty(exports, _key10, {
	    enumerable: true,
	    get: function get() {
	      return _util[_key10];
	    }
	  });
	};

	for (var _key10 in _util) {
	  var _ret4 = _loop4(_key10);

	  if (_ret4 === 'continue') continue;
	}

	var _util2 = __webpack_require__(13);

	var _loop5 = function _loop5(_key11) {
	  if (_key11 === "default") return 'continue';
	  Object.defineProperty(exports, _key11, {
	    enumerable: true,
	    get: function get() {
	      return _util2[_key11];
	    }
	  });
	};

	for (var _key11 in _util2) {
	  var _ret5 = _loop5(_key11);

	  if (_ret5 === 'continue') continue;
	}

	var _util3 = __webpack_require__(5);

	var _loop6 = function _loop6(_key12) {
	  if (_key12 === "default") return 'continue';
	  Object.defineProperty(exports, _key12, {
	    enumerable: true,
	    get: function get() {
	      return _util3[_key12];
	    }
	  });
	};

	for (var _key12 in _util3) {
	  var _ret6 = _loop6(_key12);

	  if (_ret6 === 'continue') continue;
	}

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

	var _backbone = __webpack_require__(2);

	var _backbone2 = _interopRequireDefault(_backbone);

	var _behaviors = __webpack_require__(4);

	var _util = __webpack_require__(5);

	var _util2 = __webpack_require__(7);

	var _behaviors2 = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TitleView = exports.TitleView = _backbone2.default.LayoutView.extend({
	  template: __webpack_require__(9),
	  className: 'body-title',
	  modelEvents: {
	    sync: 'render'
	  }
	}); /** The Grant Modal */


	var FooterView = exports.FooterView = _backbone2.default.LayoutView.extend({
	  tagName: 'ul',
	  className: 'row list-unstyled list-inline list-facts-three',
	  template: __webpack_require__(11)
	});

	var GrantView = exports.GrantView = _backbone2.default.LayoutView.extend({
	  behaviors: {
	    modal: {
	      behaviorClass: _behaviors.ModalBehavior
	    },
	    grant: {
	      behaviorClass: _behaviors2.GrantModal
	    }
	  },
	  template: __webpack_require__(12),

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
	  }
	});

/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.markdown = undefined;

	var _commonmark = __webpack_require__(6);

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
/* 6 */
/***/ function(module, exports) {

	module.exports = require("commonmark");

/***/ },
/* 7 */
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

	var _moment = __webpack_require__(8);

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
/* 8 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<img src="'+
	((__t=( image_url ))==null?'':_.escape(__t))+
	'">\n<div class="title">'+
	((__t=( title ))==null?'':_.escape(__t))+
	'</div>\n';
	 if (project) { 
	__p+='\n<span class="label label-info">'+
	((__t=( project.title ))==null?'':_.escape(__t))+
	'</span>\n';
	 } 
	__p+='\n';
	}
	return __p;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("underscore");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(obj){
	var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
	with(obj||{}){
	__p+='<li class="col-lg-4 col-md-4 col-sm-4 col-sm-offset-4 col-md-offset-4 col-lg-offset-4">\n  <a class="btn btn-block btn-modal-option text-danger close-modal">\n    <i class="fa fa-times"></i> <span class="block">Close</span>\n  </a>\n</li>\n';
	}
	return __p;
	};

/***/ },
/* 12 */
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
	'\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n\n      <div class="modal-footer footer-hook">\n        <div class="save-project-hook"></div>\n      </div>\n    </div>\n  </div>\n</div>\n';
	}
	return __p;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formatAmount = formatAmount;
	exports.formatNumber = formatNumber;

	var _accounting = __webpack_require__(14);

	var _accounting2 = _interopRequireDefault(_accounting);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function formatAmount(amount, places) {
	  var options = {
	    precision: places || 2,
	    thousand: ',',
	    symbol: '£ '
	  };
	  return _accounting2.default.formatMoney(amount, options);
	}

	function formatNumber(amount, precision) {
	  return _accounting2.default.formatNumber(amount, precision || 2, ',');
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("accounting");

/***/ }
/******/ ]);