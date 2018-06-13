webpackHotUpdate(5,{

/***/ "./components/GrapherTool.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrapherTool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Search__ = __webpack_require__("./components/Search.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_loadable__ = __webpack_require__("./node_modules/react-loadable/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GraphSurface__ = __webpack_require__("./components/GraphSurface.js");
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




var LoadableGraphSurface = __WEBPACK_IMPORTED_MODULE_2_react_loadable___default()({
  loader: function loader() {
    return new (__webpack_require__("./node_modules/next/dynamic.js").SameLoopPromise)(function (resolve, reject) {
      var weakId = /*require.resolve*/("./components/GraphSurface.js");

      try {
        var weakModule = __webpack_require__(weakId);

        return resolve(weakModule);
      } catch (err) {}

      new Promise(function(resolve) { resolve(); }).then((function (require) {
        try {
          var m = __webpack_require__("./components/GraphSurface.js");

          m.__webpackChunkName = 'components_GraphSurface_2efa4bfc17d7c37cd4285e4adb055066';
          resolve(m);
        } catch (error) {
          reject(error);
        }
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    });
  },
  loading: function loading() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, "Loading...");
  }
});
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
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Search__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LoadableGraphSurface, {
        searchResult: searchResult,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
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

  reactHotLoader.register(LoadableGraphSurface, "LoadableGraphSurface", "/Users/patrickvonplaten/paperGrapher/components/GrapherTool.js");
  reactHotLoader.register(searchResult, "searchResult", "/Users/patrickvonplaten/paperGrapher/components/GrapherTool.js");
  reactHotLoader.register(GrapherTool, "GrapherTool", "/Users/patrickvonplaten/paperGrapher/components/GrapherTool.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.0199f932abae8dcacbf3.hot-update.js.map