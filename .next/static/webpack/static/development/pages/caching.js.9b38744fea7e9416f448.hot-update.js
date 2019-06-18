webpackHotUpdate("static\\development\\pages\\caching.js",{

/***/ "./components/Caching/App.js":
/*!***********************************!*\
  !*** ./components/Caching/App.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _ApolloPostList_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ApolloPostList/styles */ "./components/ApolloPostList/styles.js");



var _jsxFileName = "C:\\Users\\sonmahes\\Documents\\Next-GraphQL-Apollo-Axios\\components\\Caching\\App.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    query allPosts {\n      allPosts {\n        id\n        title\n        votes\n        url\n        createdAt\n      }\n      _allPostsMeta {\n        count\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var GET_POSTS = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
var skip = 0;
var variables = {
  first: 10,
  skip: 0
};

function clientQuery() {
  return _clientQuery.apply(this, arguments);
}

function _clientQuery() {
  _clientQuery = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var someQueryResult;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return client.query({
              query: GET_POSTS,
              skip: skip,
              variables: variables
            });

          case 2:
            someQueryResult = _context.sent;
            return _context.abrupt("return", someQueryResult.then(function (result) {
              return console.log(result.data);
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _clientQuery.apply(this, arguments);
}

var App = function App(_ref) {
  var client = _ref.client;

  var _clientQuery2 = clientQuery(client),
      allPosts = _clientQuery2.allPosts;

  debugger;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ApolloPostList_styles__WEBPACK_IMPORTED_MODULE_6__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, allPosts && allPosts.map(function (post, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ApolloPostList_styles__WEBPACK_IMPORTED_MODULE_6__["ListItem"], {
      key: post.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ApolloPostList_styles__WEBPACK_IMPORTED_MODULE_6__["ListItemContainer"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ApolloPostList_styles__WEBPACK_IMPORTED_MODULE_6__["Num"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, index + 1, ". "), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ApolloPostList_styles__WEBPACK_IMPORTED_MODULE_6__["A"], {
      href: post.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, post.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(PostUpvoter, {
      id: post.id,
      votes: post.votes,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_5__["withApollo"])(App));

/***/ })

})
//# sourceMappingURL=caching.js.9b38744fea7e9416f448.hot-update.js.map