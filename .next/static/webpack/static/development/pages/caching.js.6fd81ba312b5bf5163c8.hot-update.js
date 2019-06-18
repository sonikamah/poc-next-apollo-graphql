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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");

var _jsxFileName = "C:\\Users\\sonmahes\\Documents\\Next-GraphQL-Apollo-Axios\\components\\Caching\\App.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query allPosts {\n      allPosts {\n        id\n        title\n        votes\n        url\n        createdAt\n      }\n      _allPostsMeta {\n        count\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var GET_POSTS = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var skip = 0;
var variables = {
  first: 10,
  skip: 0
};

var App = function App(_ref) {
  var client = _ref.client;
  var dataM;
  var someQueryResult = client.query({
    query: GET_POSTS,
    skip: skip,
    variables: variables
  });
  someQueryResult.then(function (result) {
    return console.log(result);
  });
  debugger;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, allPosts.map(function (post, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListItem, {
      key: post.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListItemContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Num, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, index + 1, ". "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
      href: post.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, post.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PostUpvoter, {
      id: post.id,
      votes: post.votes,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["withApollo"])(App));

/***/ })

})
//# sourceMappingURL=caching.js.6fd81ba312b5bf5163c8.hot-update.js.map