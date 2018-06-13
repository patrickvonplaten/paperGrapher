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
      sigmaIsLoaded: false
    };
    return _this;
  }

  _createClass(GraphSurface, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('hello', typeof window === "undefined" ? "undefined" : _typeof(window));

      var Sigma = __webpack_require__("react-sigma");

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
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, " SearchObject "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Sigma.Sigma, {
        graph: myGraph,
        settings: {
          drawEdges: true,
          clone: false
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Sigma.RelativeSize, {
        initialSize: 15,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Sigma.RandomizeNodePositions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, " ", this.state.searchResult.title, " ")) : null;
    }
  }]);

  return GraphSurface;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ })

};;
//# sourceMappingURL=components_GraphSurface_2efa4bfc17d7c37cd4285e4adb055066-845893fe5922c9ec879b.js.map