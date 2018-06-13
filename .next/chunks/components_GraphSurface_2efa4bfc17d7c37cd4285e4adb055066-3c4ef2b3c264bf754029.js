
        __NEXT_REGISTER_CHUNK('components_GraphSurface_2efa4bfc17d7c37cd4285e4adb055066', function() {
      webpackJsonp([4],{

/***/ "./components/GraphSurface.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphSurface; });
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

if (typeof window !== 'undefined') {
  var _ref = new (__webpack_require__("./node_modules/next/dynamic.js").SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/("./node_modules/react-sigma/es/index.js");

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(6).then((function (require) {
      try {
        var m = __webpack_require__("./node_modules/react-sigma/es/index.js");

        m.__webpackChunkName = 'react_sigma_26e3484d67ffd2425d7a0e1870915800';
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }),
      Sigma = _ref.Sigma;
}

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

      if (typeof window !== 'undefined') {
        console.log("hallo");
      }

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, " SearchObject "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, " ", this.state.searchResult.title, " "));
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

  reactHotLoader.register(GraphSurface, "GraphSurface", "/Users/patrickvonplaten/paperGrapher/components/GraphSurface.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
        })
      ;
//# sourceMappingURL=components_GraphSurface_2efa4bfc17d7c37cd4285e4adb055066-3c4ef2b3c264bf754029.js.map