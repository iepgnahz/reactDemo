webpackHotUpdate(1,{

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _index = __webpack_require__(99);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(92);\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _react2 = __webpack_require__(6);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _index5 = __webpack_require__(93);\n\nvar _index6 = _interopRequireDefault(_index5);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(173);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Popup: {\n    displayName: 'Popup'\n  }\n};\n\nvar _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({\n  filename: '/Users/Zhangpei/twClass/reduxDemo/components/Popup.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({\n  filename: '/Users/Zhangpei/twClass/reduxDemo/components/Popup.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _index2.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformHmrLibIndexJs2(_UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);\n  };\n}\n\nvar Popup = _wrapComponent('Popup')(function (_Component) {\n  _inherits(Popup, _Component);\n\n  function Popup(props) {\n    _classCallCheck(this, Popup);\n\n    var _this = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));\n\n    _this.state = {\n      disX: 0,\n      disY: 0,\n      top: 0,\n      left: 0\n    };\n    return _this;\n  }\n\n  _createClass(Popup, [{\n    key: 'onMouseMove',\n    value: function onMouseMove(x, y) {\n      var left = x - this.state.disX;\n      var top = y - this.state.disY;\n      console.log(document.body.clientHeight, document.body.clientWidth);\n      if (left < 0) {\n        console.log('1');\n        left = 0;\n      }\n      if (top < 0) {\n        console.log('2');\n\n        top = 0;\n      }\n      if (left + parseFloat(this.div.style.width) > document.body.clientWidth) {\n        console.log('3');\n\n        left = document.body.clientWidth;\n      }\n      this.setState({\n        left: left,\n        top: top\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var self = this;\n      this.div.addEventListener('mousedown', function (e) {\n        self.getLocation(e, self);\n      });\n    }\n  }, {\n    key: 'getLocation',\n    value: function getLocation(e, self) {\n      var _this2 = this;\n\n      var x = e.clientX;\n      var y = e.clientY;\n      var boxLeft = parseFloat(self.div.style.left);\n      var boxTop = parseFloat(self.div.style.top);\n\n      self.setState({\n        disX: x - boxLeft,\n        disY: y - boxTop\n      }, function () {\n        _this2.props.dragEnable();\n      });\n    } //ok\n\n\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var style = {\n        top: this.state.top + 'px',\n        left: this.state.left + 'px'\n      };\n\n      return _react3.default.createElement(\n        'div',\n        { className: 'popup',\n          ref: function ref(_ref) {\n            _this3.div = _ref;\n          },\n          style: style\n        },\n        'Drag Me'\n      );\n    }\n  }]);\n\n  return Popup;\n}(_react2.Component));\n\nexports.default = Popup;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUG9wdXAuanM/OTkwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsUHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL3N0eWxlL2luZGV4LmNzcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZT17XG4gICAgICBkaXNYOiAwLFxuICAgICAgZGlzWTogMCxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDBcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlTW92ZSh4LHkpe1xuICAgIGxldCBsZWZ0ID0geC10aGlzLnN0YXRlLmRpc1g7XG4gICAgbGV0IHRvcCA9IHktIHRoaXMuc3RhdGUuZGlzWTtcbiAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCxkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKVxuICAgIGlmKGxlZnQ8MCl7XG4gICAgICBjb25zb2xlLmxvZygnMScpXG4gICAgICBsZWZ0PSAwO1xuICAgIH1cbiAgICBpZih0b3A8MCl7XG4gICAgICBjb25zb2xlLmxvZygnMicpXG5cbiAgICAgIHRvcD0wO1xuICAgIH1cbiAgICBpZigobGVmdCtwYXJzZUZsb2F0KHRoaXMuZGl2LnN0eWxlLndpZHRoKSk+IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpe1xuICAgICAgY29uc29sZS5sb2coJzMnKVxuXG4gICAgICBsZWZ0PSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxlZnQ6bGVmdCxcbiAgICAgIHRvcDogdG9wXG4gICAgfSlcbiAgfVxuXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICB0aGlzLmRpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLChlKT0+e3NlbGYuZ2V0TG9jYXRpb24oZSxzZWxmKX0pO1xuICB9XG5cbiAgZ2V0TG9jYXRpb24oZSxzZWxmKXtcbiAgICBsZXQgeCA9IGUuY2xpZW50WDtcbiAgICBsZXQgeSA9IGUuY2xpZW50WTtcbiAgICBsZXQgYm94TGVmdCA9IHBhcnNlRmxvYXQoc2VsZi5kaXYuc3R5bGUubGVmdCk7XG4gICAgbGV0IGJveFRvcCA9IHBhcnNlRmxvYXQoc2VsZi5kaXYuc3R5bGUudG9wKTtcblxuICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgZGlzWDogeC1ib3hMZWZ0LFxuICAgICAgZGlzWTogeS1ib3hUb3BcbiAgICB9LCgpPT57XG4gICAgICB0aGlzLnByb3BzLmRyYWdFbmFibGUoKTtcbiAgICB9KVxuICB9ICAvL29rXG5cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHN0eWxlPXtcbiAgICAgIHRvcDp0aGlzLnN0YXRlLnRvcCsncHgnLFxuICAgICAgbGVmdDp0aGlzLnN0YXRlLmxlZnQrJ3B4J1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cFwiXG4gICAgICAgICAgIHJlZj17KHJlZik9PntcbiAgICAgICAgICAgICB0aGlzLmRpdiA9IHJlZlxuICAgICAgICAgICB9fVxuICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICA+RHJhZyBNZTwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Qb3B1cC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFRQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQU9BOzs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})