webpackHotUpdate("static\\development\\pages\\caching.js",{

/***/ "./components/Caching/App.js":
/*!***********************************!*\
  !*** ./components/Caching/App.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query allPosts($first: Int!, $skip: Int!) {\n      allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {\n        id\n        title\n        votes\n        url\n        createdAt\n      }\n      _allPostsMeta {\n        count\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var GET_POSTS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());

var App = function App(_ref) {
  var client = _ref.client;
  debugger;
  var someQueryResult = client.readQuery({
    query: GET_POSTS,
    context: {
      headers: {
        special: "Special header value"
      }
    }
  });
  return someQueryResult.title ? 'hello user' : 'oops';
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["withApollo"])(App));

/***/ })

})
//# sourceMappingURL=caching.js.c5fbc555aeb3426d3169.hot-update.js.map