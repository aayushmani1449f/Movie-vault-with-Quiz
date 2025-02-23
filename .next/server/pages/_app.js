/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/hooks/useAuth.js":
/*!******************************!*\
  !*** ./src/hooks/useAuth.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            // Check if user is stored in cookies\n            const storedUser = js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"user\");\n            if (storedUser) {\n                setUser(JSON.parse(storedUser));\n            }\n        }\n    }[\"AuthProvider.useEffect\"], []);\n    const login = (userData)=>{\n        setUser(userData);\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"user\", JSON.stringify(userData), {\n            expires: 7\n        });\n    };\n    const logout = ()=>{\n        setUser(null);\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"user\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\IMDB CLONE\\\\imdb-clone\\\\src\\\\hooks\\\\useAuth.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n// Custom hook to use the AuthContext\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlQXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1RTtBQUN2QztBQUVoQyxNQUFNSyw0QkFBY0gsb0RBQWFBLENBQUM7QUFFM0IsU0FBU0ksYUFBYSxFQUFFQyxRQUFRLEVBQUU7SUFDdkMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO0lBRWpDQyxnREFBU0E7a0NBQUM7WUFDUixxQ0FBcUM7WUFDckMsTUFBTVMsYUFBYU4scURBQVcsQ0FBQztZQUMvQixJQUFJTSxZQUFZO2dCQUNkRCxRQUFRRyxLQUFLQyxLQUFLLENBQUNIO1lBQ3JCO1FBQ0Y7aUNBQUcsRUFBRTtJQUVMLE1BQU1JLFFBQVEsQ0FBQ0M7UUFDYk4sUUFBUU07UUFDUlgscURBQVcsQ0FBQyxRQUFRUSxLQUFLSyxTQUFTLENBQUNGLFdBQVc7WUFBRUcsU0FBUztRQUFFO0lBQzdEO0lBRUEsTUFBTUMsU0FBUztRQUNiVixRQUFRO1FBQ1JMLHdEQUFjLENBQUM7SUFDakI7SUFFQSxxQkFDRSw4REFBQ0MsWUFBWWdCLFFBQVE7UUFBQ0MsT0FBTztZQUFFZDtZQUFNTTtZQUFPSztRQUFPO2tCQUNoRFo7Ozs7OztBQUdQO0FBRUEscUNBQXFDO0FBQ3RCLFNBQVNnQjtJQUN0QixPQUFPcEIsaURBQVVBLENBQUNFO0FBQ3BCIiwic291cmNlcyI6WyJFOlxcSU1EQiBDTE9ORVxcaW1kYi1jbG9uZVxcc3JjXFxob29rc1xcdXNlQXV0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBDaGVjayBpZiB1c2VyIGlzIHN0b3JlZCBpbiBjb29raWVzXHJcbiAgICBjb25zdCBzdG9yZWRVc2VyID0gQ29va2llcy5nZXQoXCJ1c2VyXCIpO1xyXG4gICAgaWYgKHN0b3JlZFVzZXIpIHtcclxuICAgICAgc2V0VXNlcihKU09OLnBhcnNlKHN0b3JlZFVzZXIpKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgICBzZXRVc2VyKHVzZXJEYXRhKTtcclxuICAgIENvb2tpZXMuc2V0KFwidXNlclwiLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksIHsgZXhwaXJlczogNyB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJ1c2VyXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9naW4sIGxvZ291dCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG4vLyBDdXN0b20gaG9vayB0byB1c2UgdGhlIEF1dGhDb250ZXh0XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ29va2llcyIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInN0b3JlZFVzZXIiLCJnZXQiLCJKU09OIiwicGFyc2UiLCJsb2dpbiIsInVzZXJEYXRhIiwic2V0Iiwic3RyaW5naWZ5IiwiZXhwaXJlcyIsImxvZ291dCIsInJlbW92ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useAuth.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useAuth */ \"./src/hooks/useAuth.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__]);\n_hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"E:\\\\IMDB CLONE\\\\imdb-clone\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\IMDB CLONE\\\\imdb-clone\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ2pCO0FBRS9CLFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUJBQ0UsOERBQUNILHdEQUFZQTtrQkFDWCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJFOlxcSU1EQiBDTE9ORVxcaW1kYi1jbG9uZVxcc3JjXFxwYWdlc1xcX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi4vaG9va3MvdXNlQXV0aFwiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aFByb3ZpZGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0F1dGhQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();