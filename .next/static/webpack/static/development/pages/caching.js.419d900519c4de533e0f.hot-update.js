webpackHotUpdate("static\\development\\pages\\caching.js",{

/***/ "./components/Caching/clientWriteData.js":
/*!***********************************************!*\
  !*** ./components/Caching/clientWriteData.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\sonmahes\\Documents\\Next-GraphQL-Apollo-Axios\\components\\Caching\\clientWriteData.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  {\n    visibilityFilter @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var GET_VISIBILITY_FILTER = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

var clientWriteData = function clientWriteData(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: GET_VISIBILITY_FILTER,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, function (_ref2) {
    var data = _ref2.data,
        client = _ref2.client;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      onClick: function onClick() {
        return client.writeData({
          data: {
            visibilityFilter: "SONIKA_HIDE"
          }
        });
      },
      active: data.visibilityFilter === "SONIKA_HIDE",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, children);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["withApollo"])(App));

/***/ })

})
//# sourceMappingURL=caching.js.419d900519c4de533e0f.hot-update.js.map