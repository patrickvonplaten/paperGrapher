webpackHotUpdate(5,{

/***/ "./components/GraphSurface.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphSurface; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/patrickvonplaten/paperGrapher/components/GraphSurface.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isBrowser = typeof window !== 'undefined';
var Sigma = isBrowser ? __webpack_require__("./node_modules/react-sigma/es/index.js") : undefined;

var GraphSurface =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GraphSurface, _React$Component);

  function GraphSurface(props) {
    var _this;

    _classCallCheck(this, GraphSurface);

    _this = _possibleConstructorReturn(this, (GraphSurface.__proto__ || Object.getPrototypeOf(GraphSurface)).call(this, props));
    _this.state = {
      searchResult: _this.props.searchResult
    };
    return _this;
  }

  _createClass(GraphSurface, [{
    key: "render",
    value: function render() {
      console.log("SearchObject", this.state.searchResult);
      var myGraph = {
        nodes: [{
          id: "n1",
          label: "Alice"
        }, {
          id: "n2",
          label: "Rabbit"
        }],
        edges: [{
          id: "e1",
          source: "n1",
          target: "n2",
          label: "SEES"
        }]
      };
      return isBrowser ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, " SearchObject "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Sigma.Sigma, {
        graph: myGraph,
        settings: {
          drawEdges: true,
          clone: false
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Sigma.RelativeSize, {
        initialSize: 15,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Sigma.RandomizeNodePositions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, " ", this.state.searchResult.title, " ")) : null;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return GraphSurface;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(isBrowser, "isBrowser", "/Users/patrickvonplaten/paperGrapher/components/GraphSurface.js");
  reactHotLoader.register(Sigma, "Sigma", "/Users/patrickvonplaten/paperGrapher/components/GraphSurface.js");
  reactHotLoader.register(GraphSurface, "GraphSurface", "/Users/patrickvonplaten/paperGrapher/components/GraphSurface.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/GrapherTool.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrapherTool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Search__ = __webpack_require__("./components/Search.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GraphSurface__ = __webpack_require__("./components/GraphSurface.js");
var _jsxFileName = "/Users/patrickvonplaten/paperGrapher/components/GrapherTool.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var searchResult = {
  id: "1806.02988",
  title: "The physical material the human body is comprised of",
  author: "Peter the great",
  abstract: "The physical material in the human body is crazy.\n              Within minutes, it can take the shape of multiple species.\n              Peter the great was great enough to find out the these species \n              are bizarre objects that will not be tolerated in closed environments.\n              Therefore we try to find out whether environments are written with n or \n              m. Can you tell the difference?",
  link: 'https://arxiv.org/pdf/1806.02988.pdf',
  childrenPapers: ['1609.08144', '1606.02960', '1609.07843', '1708.02182', '1702.02540']
};

var GrapherTool =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GrapherTool, _React$Component);

  function GrapherTool(props) {
    _classCallCheck(this, GrapherTool);

    return _possibleConstructorReturn(this, (GrapherTool.__proto__ || Object.getPrototypeOf(GrapherTool)).call(this, props));
  }

  _createClass(GrapherTool, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Search__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__GraphSurface__["a" /* default */], {
        searchResult: searchResult,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return GrapherTool;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(searchResult, "searchResult", "/Users/patrickvonplaten/paperGrapher/components/GrapherTool.js");
  reactHotLoader.register(GrapherTool, "GrapherTool", "/Users/patrickvonplaten/paperGrapher/components/GrapherTool.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/lib/dynamic.js":
false,

/***/ "./node_modules/next/dynamic.js":
false,

/***/ "./node_modules/react-loadable/lib/index.js":
false

})
//# sourceMappingURL=5.efe42ac456c1234d97b9.hot-update.js.map