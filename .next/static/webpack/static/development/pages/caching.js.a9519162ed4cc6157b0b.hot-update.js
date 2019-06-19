webpackHotUpdate("static\\development\\pages\\caching.js",{

/***/ "./pages/caching.js":
/*!**************************!*\
  !*** ./pages/caching.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var _components_Caching_clientQueryApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Caching/clientQueryApp */ "./components/Caching/clientQueryApp.js");
/* harmony import */ var _components_Caching_ClientWriteData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Caching/ClientWriteData */ "./components/Caching/ClientWriteData.js");
/* harmony import */ var _components_Caching_onResetStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Caching/onResetStore */ "./components/Caching/onResetStore.js");
/* harmony import */ var _components_Caching_ResolverUpdatePost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Caching/ResolverUpdatePost */ "./components/Caching/ResolverUpdatePost.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
var _jsxFileName = "C:\\Users\\sonmahes\\Documents\\Next-GraphQL-Apollo-Axios\\pages\\caching.js";










var cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"]();
var id = "cjwj7mg2a0nbj0155z0qlkxek";
var votes = 2222;
var link = new apollo_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]({
  uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn',
  // Server URL (must be absolute)
  opts: {
    credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`

  }
});
var client = new apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloClient"]({
  cache: cache,
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["ApolloProvider"], {
    client: client,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), "1. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Caching_clientQueryApp__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), "2. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Caching_ClientWriteData__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), "3. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Caching_onResetStore__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), "4. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Caching_ResolverUpdatePost__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: id,
    votes: votes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Caching);

/***/ })

})
//# sourceMappingURL=caching.js.a9519162ed4cc6157b0b.hot-update.js.map