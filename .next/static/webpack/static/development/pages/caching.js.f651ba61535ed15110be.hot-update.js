webpackHotUpdate("static\\development\\pages\\caching.js",{

/***/ "./pages/caching.js":
/*!**************************!*\
  !*** ./pages/caching.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var _components_Caching_clientQueryApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Caching/clientQueryApp */ "./components/Caching/clientQueryApp.js");
/* harmony import */ var _components_Caching_ClientWriteData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Caching/ClientWriteData */ "./components/Caching/ClientWriteData.js");
/* harmony import */ var _components_Caching_onResetStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Caching/onResetStore */ "./components/Caching/onResetStore.js");
/* harmony import */ var _components_Caching_ResolverUpdatePost__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Caching/ResolverUpdatePost */ "./components/Caching/ResolverUpdatePost.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "C:\\Users\\sonmahes\\Documents\\Next-GraphQL-Apollo-Axios\\pages\\caching.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n          fragment completeTodo on TodoItem {\n            completed\n          }\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_6__["InMemoryCache"]();
var id = "cjx2p2kbb05vx0166nurov7eh";
var votes = 444;
var link = new apollo_link_http__WEBPACK_IMPORTED_MODULE_4__["HttpLink"]({
  uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn',
  // Server URL (must be absolute)
  opts: {
    credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`

  }
});
var resolvers = {
  Mutation: {
    updatePost: function updatePost(_root, variables, _ref) {
      var cache = _ref.cache,
          getCacheKey = _ref.getCacheKey;
      debugger;
      var id = getCacheKey({
        __typename: '_allPostsMeta',
        id: variables.id
      });
      debugger;
      var fragment = graphql_tag__WEBPACK_IMPORTED_MODULE_12___default()(_templateObject());
      var todo = cache.readFragment({
        fragment: fragment,
        id: id
      });

      var data = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, todo, {
        completed: !todo.completed
      });

      cache.writeData({
        id: id,
        data: data
      });
      return null;
    }
  }
};
var client = new apollo_client__WEBPACK_IMPORTED_MODULE_5__["ApolloClient"]({
  cache: cache,
  resolvers: resolvers,
  link: link
});
var data = {
  todos: [],
  visibilityFilter: 'SHOW_ALL',
  networkStatus: {
    __typename: 'NetworkStatus',
    isConnected: false
  }
};
cache.writeData({
  data: data
});

var Caching = function Caching() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
    client: client,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), "1. ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Caching_clientQueryApp__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), "2. ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Caching_ClientWriteData__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), "3. ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Caching_onResetStore__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), "4. ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Caching_ResolverUpdatePost__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: id,
    votes: votes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Caching);

/***/ })

})
//# sourceMappingURL=caching.js.f651ba61535ed15110be.hot-update.js.map