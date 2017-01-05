webpackHotUpdate(1,{

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _index = __webpack_require__(99);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(92);\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _react2 = __webpack_require__(6);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _index5 = __webpack_require__(93);\n\nvar _index6 = _interopRequireDefault(_index5);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(173);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Popup: {\n    displayName: 'Popup'\n  }\n};\n\nvar _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({\n  filename: '/Users/Zhangpei/twClass/reduxDemo/components/Popup.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({\n  filename: '/Users/Zhangpei/twClass/reduxDemo/components/Popup.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _index2.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformHmrLibIndexJs2(_UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);\n  };\n}\n\nvar Popup = _wrapComponent('Popup')(function (_Component) {\n  _inherits(Popup, _Component);\n\n  function Popup(props) {\n    _classCallCheck(this, Popup);\n\n    var _this = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));\n\n    _this.state = {\n      disX: 0,\n      disY: 0,\n      top: 0,\n      left: 0\n    };\n    return _this;\n  }\n\n  _createClass(Popup, [{\n    key: 'onMouseMove',\n    value: function onMouseMove(x, y) {\n      var left = x - this.state.disX;\n      var top = y - this.state.disY;\n      console.log(x, y);\n      if (x < 0) {\n        x = 0;\n      }\n      if (y < 0) {\n        y = 0;\n      }\n      if (x > document.body.clientWidth) {\n        x = document.body.clientWidth;\n      }\n      if (y > document.body.clientHeight) {\n        y = document.body.clientHeight;\n      }\n      this.setState({\n        left: left,\n        top: top\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var self = this;\n      this.div.addEventListener('mousedown', function (e) {\n        self.getLocation(e, self);\n      });\n    }\n  }, {\n    key: 'getLocation',\n    value: function getLocation(e, self) {\n      var _this2 = this;\n\n      var x = e.clientX;\n      var y = e.clientY;\n      var boxLeft = parseFloat(self.div.style.left);\n      var boxTop = parseFloat(self.div.style.top);\n\n      self.setState({\n        disX: x - boxLeft,\n        disY: y - boxTop\n      }, function () {\n        _this2.props.dragEnable();\n      });\n    } //ok\n\n\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var style = {\n        top: this.state.top + 'px',\n        left: this.state.left + 'px'\n      };\n\n      return _react3.default.createElement(\n        'div',\n        { className: 'popup',\n          ref: function ref(_ref) {\n            _this3.div = _ref;\n          },\n          style: style\n        },\n        'Drag Me'\n      );\n    }\n  }]);\n\n  return Popup;\n}(_react2.Component));\n\nexports.default = Popup;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUG9wdXAuanM/OTkwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsUHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL3N0eWxlL2luZGV4LmNzcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZT17XG4gICAgICBkaXNYOiAwLFxuICAgICAgZGlzWTogMCxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDBcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlTW92ZSh4LHkpe1xuICAgIGxldCBsZWZ0ID0geC10aGlzLnN0YXRlLmRpc1g7XG4gICAgbGV0IHRvcCA9IHktIHRoaXMuc3RhdGUuZGlzWTtcbiAgICBjb25zb2xlLmxvZyh4LHkpXG4gICAgaWYoeDwwKXtcbiAgICAgIHg9IDA7XG4gICAgfVxuICAgIGlmKHk8MCl7XG4gICAgICB5PTA7XG4gICAgfVxuICAgIGlmKHg+IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpe1xuICAgICAgeD0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgICB9XG4gICAgaWYoeT4gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpe1xuICAgICAgeT0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGVmdDpsZWZ0LFxuICAgICAgdG9wOiB0b3BcbiAgICB9KVxuICB9XG5cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsKGUpPT57c2VsZi5nZXRMb2NhdGlvbihlLHNlbGYpfSk7XG4gIH1cblxuICBnZXRMb2NhdGlvbihlLHNlbGYpe1xuICAgIGxldCB4ID0gZS5jbGllbnRYO1xuICAgIGxldCB5ID0gZS5jbGllbnRZO1xuICAgIGxldCBib3hMZWZ0ID0gcGFyc2VGbG9hdChzZWxmLmRpdi5zdHlsZS5sZWZ0KTtcbiAgICBsZXQgYm94VG9wID0gcGFyc2VGbG9hdChzZWxmLmRpdi5zdHlsZS50b3ApO1xuXG4gICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICBkaXNYOiB4LWJveExlZnQsXG4gICAgICBkaXNZOiB5LWJveFRvcFxuICAgIH0sKCk9PntcbiAgICAgIHRoaXMucHJvcHMuZHJhZ0VuYWJsZSgpO1xuICAgIH0pXG4gIH0gIC8vb2tcblxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc3R5bGU9e1xuICAgICAgdG9wOnRoaXMuc3RhdGUudG9wKydweCcsXG4gICAgICBsZWZ0OnRoaXMuc3RhdGUubGVmdCsncHgnXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwXCJcbiAgICAgICAgICAgcmVmPXsocmVmKT0+e1xuICAgICAgICAgICAgIHRoaXMuZGl2ID0gcmVmXG4gICAgICAgICAgIH19XG4gICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgID5EcmFnIE1lPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL1BvcHVwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQVFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFPQTs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})