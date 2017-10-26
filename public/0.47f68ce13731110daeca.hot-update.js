webpackHotUpdate(0,{

/***/ 231:
/* no static exports found */
/* all exports used */
/*!*************************************!*\
  !*** ./frontend/components/Body.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _RaisedButton = __webpack_require__(/*! material-ui/RaisedButton */ 48);\n\nvar _RaisedButton2 = _interopRequireDefault(_RaisedButton);\n\nvar _Spotify = __webpack_require__(/*! ./Spotify */ 237);\n\nvar _Spotify2 = _interopRequireDefault(_Spotify);\n\nvar _Soundcloud = __webpack_require__(/*! ./Soundcloud */ 236);\n\nvar _Soundcloud2 = _interopRequireDefault(_Soundcloud);\n\nvar _Queue = __webpack_require__(/*! ./Queue */ 234);\n\nvar _Queue2 = _interopRequireDefault(_Queue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import components to render\n\n\nvar Body = function (_React$Component) {\n  _inherits(Body, _React$Component);\n\n  function Body() {\n    _classCallCheck(this, Body);\n\n    return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));\n  }\n\n  _createClass(Body, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'container body' },\n        _react2.default.createElement(\n          'div',\n          { className: 'clients' },\n          _react2.default.createElement(_Spotify2.default, null),\n          _react2.default.createElement(_Soundcloud2.default, null)\n        ),\n        _react2.default.createElement(\n          'div',\n          { style: { textAlign: 'center' } },\n          _react2.default.createElement(\n            'a',\n            { className: 'spotify-login', href: '/auth/spotify', style: { display: 'inline-block' } },\n            _react2.default.createElement('i', { className: 'fa fa-spotify', 'aria-hidden': 'true' }),\n            ' Log in with Spotify'\n          )\n        ),\n        _react2.default.createElement(_Queue2.default, null)\n      );\n    }\n  }]);\n\n  return Body;\n}(_react2.default.Component);\n\n;\n\nexports.default = Body;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvQm9keS5qcz81YWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbic7XG5cbi8vIGltcG9ydCBjb21wb25lbnRzIHRvIHJlbmRlclxuaW1wb3J0IFNwb3RpZnkgZnJvbSAnLi9TcG90aWZ5J1xuaW1wb3J0IFNvdW5kY2xvdWQgZnJvbSAnLi9Tb3VuZGNsb3VkJ1xuaW1wb3J0IFF1ZXVlIGZyb20gJy4vUXVldWUnXG5cbmNsYXNzIEJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29udGFpbmVyIGJvZHknfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWVudHMnPlxuICAgICAgICAgIDxTcG90aWZ5IC8+XG4gICAgICAgICAgPFNvdW5kY2xvdWQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwic3BvdGlmeS1sb2dpblwiIGhyZWY9XCIvYXV0aC9zcG90aWZ5XCIgc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ319PjxpIGNsYXNzTmFtZT1cImZhIGZhLXNwb3RpZnlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IExvZyBpbiB3aXRoIFNwb3RpZnk8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UXVldWUgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvZHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9Cb2R5LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBSkE7QUFDQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBUkE7QUFXQTs7OztBQWRBO0FBQ0E7QUFjQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///231\n");

/***/ })

})