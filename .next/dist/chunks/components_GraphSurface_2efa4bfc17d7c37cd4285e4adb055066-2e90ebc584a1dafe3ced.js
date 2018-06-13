exports.ids = [3];
exports.modules = {

/***/ "./components/GraphSurface.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphSurface; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/patrickvonplaten/paperGrapher/components/GraphSurface.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof window !== 'undefined') {
  var _require = __webpack_require__("react-sigma"),
      _Sigma = _require.Sigma,
      _RandomizeNodePositions = _require.RandomizeNodePositions,
      _RelativeSize = _require.RelativeSize;
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
      searchResult: _this.props.searchResult,
      sigmaIsLoaded: typeof window !== 'undefined'
    };
    return _this;
  }

  _createClass(GraphSurface, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(typeof window === "undefined" ? "undefined" : _typeof(window));

      var _require2 = __webpack_require__("react-sigma"),
          Sigma = _require2.Sigma,
          RandomizeNodePositions = _require2.RandomizeNodePositions,
          RelativeSize = _require2.RelativeSize;

      this.setState({
        sigmaIsLoaded: true
      });
    }
  }, {
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
      return this.state.sigmaIsLoaded ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, " SearchObject "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Sigma, {
        graph: myGraph,
        settings: {
          drawEdges: true,
          clone: false
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(RelativeSize, {
        initialSize: 15,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(RandomizeNodePositions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, " ", this.state.searchResult.title, " ")) : null;
    }
  }]);

  return GraphSurface;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ })

};;
//# sourceMappingURL=components_GraphSurface_2efa4bfc17d7c37cd4285e4adb055066-2e90ebc584a1dafe3ced.js.map