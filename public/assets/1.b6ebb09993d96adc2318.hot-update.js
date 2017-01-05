webpackHotUpdate(1,{

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _index = __webpack_require__(99);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(92);\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _react2 = __webpack_require__(6);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _index5 = __webpack_require__(93);\n\nvar _index6 = _interopRequireDefault(_index5);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(173);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Popup: {\n    displayName: 'Popup'\n  }\n};\n\nvar _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({\n  filename: '/Users/Zhangpei/twClass/reduxDemo/components/Popup.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({\n  filename: '/Users/Zhangpei/twClass/reduxDemo/components/Popup.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _index2.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformHmrLibIndexJs2(_UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);\n  };\n}\n\nvar dom = window.document;\n\nvar Popup = _wrapComponent('Popup')(function (_Component) {\n  _inherits(Popup, _Component);\n\n  function Popup(props) {\n    _classCallCheck(this, Popup);\n\n    var _this = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));\n\n    _this.state = {\n      isDragged: false,\n      disX: 0,\n      disY: 0,\n      top: 0,\n      left: 0,\n      x: 0,\n      y: 0\n    };\n    return _this;\n  }\n\n  _createClass(Popup, [{\n    key: 'onMouseMove',\n    value: function onMouseMove(x, y) {\n      this.setState({\n        x: x, y: y,\n        left: x - this.state.disX,\n        top: y - this.state.disY\n      });\n    }\n  }, {\n    key: 'changeDraggedStatus',\n    value: function changeDraggedStatus() {\n      this.setState({\n        isDragged: false\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var self = this;\n      this.div.addEventListener('mousedown', self.getLocation);\n    }\n  }, {\n    key: 'getLocation',\n    value: function getLocation(e) {\n      var x = e.clientX;\n      var y = e.clientY;\n      var boxLeft = Number(this.div.style.left);\n      var boxTop = Number(this.div.style.top);\n      this.setState({\n        isDragged: true,\n        disX: x - boxLeft,\n        disY: y - boxTop\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var style = {\n        top: this.state.top,\n        left: this.state.left\n      };\n      return _react3.default.createElement(\n        'div',\n        { className: 'popup',\n          ref: function ref(_ref) {\n            _this2.div = _ref;\n          },\n          style: style\n        },\n        'Drag Me'\n      );\n    }\n  }]);\n\n  return Popup;\n}(_react2.Component));\n\nexports.default = Popup;\n\n\nPopup.propTypes = {\n  x: _react2.PropTypes.number.isRequired,\n  y: _react2.PropTypes.number.isRequired\n};\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUG9wdXAuanM/OTkwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsUHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL3N0eWxlL2luZGV4LmNzcyc7XG5sZXQgZG9tID0gd2luZG93LmRvY3VtZW50O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGU9e1xuICAgICAgaXNEcmFnZ2VkOiBmYWxzZSxcbiAgICAgIGRpc1g6IDAsXG4gICAgICBkaXNZOiAwLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHg6MCxcbiAgICAgIHk6MFxuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VNb3ZlKHgseSl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB4LHksXG4gICAgICBsZWZ0OngtdGhpcy5zdGF0ZS5kaXNYLFxuICAgICAgdG9wOiB5LSB0aGlzLnN0YXRlLmRpc1lcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlRHJhZ2dlZFN0YXR1cygpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNEcmFnZ2VkOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgdGhpcy5kaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJyxzZWxmLmdldExvY2F0aW9uKTtcbiAgfVxuXG4gIGdldExvY2F0aW9uKGUpe1xuICAgIGxldCB4ID0gZS5jbGllbnRYO1xuICAgIGxldCB5ID0gZS5jbGllbnRZO1xuICAgIGxldCBib3hMZWZ0ID0gTnVtYmVyKHRoaXMuZGl2LnN0eWxlLmxlZnQpO1xuICAgIGxldCBib3hUb3AgPSBOdW1iZXIodGhpcy5kaXYuc3R5bGUudG9wKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRHJhZ2dlZDogdHJ1ZSxcbiAgICAgIGRpc1g6IHgtYm94TGVmdCxcbiAgICAgIGRpc1k6IHktYm94VG9wXG4gICAgfSlcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBzdHlsZT17XG4gICAgICB0b3A6dGhpcy5zdGF0ZS50b3AsXG4gICAgICBsZWZ0OnRoaXMuc3RhdGUubGVmdFxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBcIlxuICAgICAgICAgICByZWY9eyhyZWYpPT57XG4gICAgICAgICAgICAgdGhpcy5kaXYgPSByZWZcbiAgICAgICAgICAgfX1cbiAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgPkRyYWcgTWU8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuUG9wdXAucHJvcFR5cGVzID0ge1xuICB4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHk6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1BvcHVwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBRkE7QUFXQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFPQTs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})