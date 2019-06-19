webpackHotUpdate("static\\development\\pages\\caching.js",{

/***/ "./components/Caching/ResolverUpdatePost.js":
/*!**************************************************!*\
  !*** ./components/Caching/ResolverUpdatePost.js ***!
  \**************************************************/
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
/* harmony import */ var _ApolloPostList_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ApolloPostList/styles */ "./components/ApolloPostList/styles.js");

var _jsxFileName = "C:\\Users\\sonmahes\\Documents\\Next-GraphQL-Apollo-Axios\\components\\Caching\\ResolverUpdatePost.js";


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query allPosts($first: Int!, $skip: Int!) {\n      allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {\n        id\n        title\n        votes\n        url\n        createdAt\n      }\n      _allPostsMeta {\n        count\n      }\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation updatePost($id: ID!, $votes: Int) {\n    updatePost(id: $id, votes: $votes) @client {\n      id\n      __typename\n      votes @client\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var UPVOTE_POST = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var GET_VOTES = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2());

var ResolverUpdatePost = function ResolverUpdatePost() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: GET_VOTES,
    variables: {
      first: 10,
      skip: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, function (_ref) {
    var allPosts = _ref.data.allPosts,
        loading = _ref.loading;
    if (loading) return "Loading...";
    return allPosts.map(function (post, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApolloPostList_styles__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
        key: post.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApolloPostList_styles__WEBPACK_IMPORTED_MODULE_4__["ListItemContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApolloPostList_styles__WEBPACK_IMPORTED_MODULE_4__["Num"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, index + 1, ". "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApolloPostList_styles__WEBPACK_IMPORTED_MODULE_4__["A"], {
        href: post.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, post.id, " - ", post.votes)));
    });
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
    mutation: UPVOTE_POST,
    key: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, function (updatePost, _ref2) {
    var loading = _ref2.loading,
        error = _ref2.error;
    {
      loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Loading...");
    }
    {
      error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Error :( Please try again");
    }
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "  Change the votes of ID - ", id, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), "Updated Votes are ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: function onClick() {
        return updatePost({
          variables: {
            id: id,
            votes: votes
          }
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, " ", votes, " value using Above ID"));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ResolverUpdatePost);

/***/ })

})
//# sourceMappingURL=caching.js.e7e7733c9c3ae8a3accd.hot-update.js.map