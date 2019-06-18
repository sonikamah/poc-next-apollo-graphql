webpackHotUpdate("static\\development\\pages\\apolloQuery.js",{

/***/ "./components/ApolloPostList/PostListQuery.js":
/*!****************************************************!*\
  !*** ./components/ApolloPostList/PostListQuery.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _PostUpvoter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostUpvoter */ "./components/ApolloPostList/PostUpvoter.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ApolloPostList/ErrorMessage.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles */ "./components/ApolloPostList/styles.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\sonmahes\\Documents\\Next-GraphQL-Apollo-Axios\\components\\ApolloPostList\\PostListQuery.js";



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    query allPosts($first: Int!, $skip: Int!) {\n      allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {\n        id\n        title\n        votes\n        url\n        createdAt\n      }\n      _allPostsMeta {\n        count\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var POSTS_PER_PAGE = 10;
var GET_POSTS = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
var skip = 0;
var variables = {
  first: POSTS_PER_PAGE,
  skip: 0
};

var PostListQuery = function PostListQuery() {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Query"], {
    query: GET_POSTS,
    skip: skip,
    variables: variables,
    onCompleted: function onCompleted(data) {
      return _this.setName({
        name: "SONIKA"
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, function (_ref) {
    var _ref$data = _ref.data,
        allPosts = _ref$data.allPosts,
        _allPostsMeta = _ref$data._allPostsMeta,
        loading = _ref.loading,
        error = _ref.error,
        fetchMore = _ref.fetchMore;
    if (loading) return "Loading...";
    if (error) return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
      message: "Error loading posts.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    });

    if (allPosts && allPosts.length) {
      var areMorePosts = allPosts.length < _allPostsMeta.count;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["List"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, allPosts.map(function (post, index) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
          key: post.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["ListItemContainer"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["Num"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, index + 1, ". "), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["A"], {
          href: post.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, post.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_PostUpvoter__WEBPACK_IMPORTED_MODULE_6__["default"], {
          id: post.id,
          votes: post.votes,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        })));
      })), areMorePosts ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        onClick: function onClick() {
          return fetchMore({
            variables: {
              skip: allPosts.length
            },
            updateQuery: function updateQuery(previousResult, _ref2) {
              var fetchMoreResult = _ref2.fetchMoreResult;

              if (!fetchMoreResult) {
                return previousResult;
              }

              return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, previousResult, {
                // Append the new posts results to the old one
                allPosts: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(previousResult.allPosts), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(fetchMoreResult.allPosts))
              });
            }
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, loading ? 'Loading...' : 'Show More') : '', "Used onComplete to set the name: ", _this.state.name);
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "Loading... sonika");
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PostListQuery);

/***/ })

})
//# sourceMappingURL=apolloQuery.js.8086d62a8df02bf90878.hot-update.js.map