"use strict";
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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Cthami%5CMonolitos_house%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cthami%5CMonolitos_house&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Cthami%5CMonolitos_house%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cthami%5CMonolitos_house&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_thami_Monolitos_house_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\thami\\\\Monolitos_house\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_thami_Monolitos_house_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUN0aGFtaSU1Q01vbm9saXRvc19ob3VzZSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDdGhhbWklNUNNb25vbGl0b3NfaG91c2UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzBCO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTW9ub2xpdG9zSG91c2UvP2RkOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcdGhhbWlcXFxcTW9ub2xpdG9zX2hvdXNlXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXHRoYW1pXFxcXE1vbm9saXRvc19ob3VzZVxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Cthami%5CMonolitos_house%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cthami%5CMonolitos_house&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_authOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/authOptions */ \"(rsc)/./utils/authOptions.js\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n\n\nconst handler = (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_utils_authOptions__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtEO0FBQ1o7QUFFdEMsTUFBTUUsVUFBVUQsMERBQVFBLENBQUNELDJEQUFXQTtBQUVPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTW9ub2xpdG9zSG91c2UvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcz9kYTFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC91dGlscy9hdXRoT3B0aW9ucyc7XHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgvbmV4dCc7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xyXG5cclxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xyXG4iXSwibmFtZXMiOlsiYXV0aE9wdGlvbnMiLCJOZXh0QXV0aCIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./config/database.js":
/*!****************************!*\
  !*** ./config/database.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet connected = false;\nconst connectDB = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", true);\n    // If the database is already connected, don't connect again\n    if (connected) {\n        console.log(\"MongoDB is already connected...\");\n        return;\n    }\n    // Connect to MongoDB\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n        connected = true;\n        console.log(\"MongoDB connected...\");\n    } catch (error) {\n        console.log(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb25maWcvZGF0YWJhc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLElBQUlDLFlBQVk7QUFFaEIsTUFBTUMsWUFBWTtJQUNoQkYsbURBQVksQ0FBQyxlQUFlO0lBRTVCLDREQUE0RDtJQUM1RCxJQUFJQyxXQUFXO1FBQ2JHLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0Y7SUFFQSxxQkFBcUI7SUFDckIsSUFBSTtRQUNGLE1BQU1MLHVEQUFnQixDQUFDTyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7UUFDOUNSLFlBQVk7UUFDWkcsUUFBUUMsR0FBRyxDQUFDO0lBQ2QsRUFBRSxPQUFPSyxPQUFPO1FBQ2ROLFFBQVFDLEdBQUcsQ0FBQ0s7SUFDZDtBQUNGO0FBRUEsaUVBQWVSLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nb25vbGl0b3NIb3VzZS8uL2NvbmZpZy9kYXRhYmFzZS5qcz82OTJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5sZXQgY29ubmVjdGVkID0gZmFsc2U7XHJcblxyXG5jb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XHJcbiAgbW9uZ29vc2Uuc2V0KCdzdHJpY3RRdWVyeScsIHRydWUpO1xyXG5cclxuICAvLyBJZiB0aGUgZGF0YWJhc2UgaXMgYWxyZWFkeSBjb25uZWN0ZWQsIGRvbid0IGNvbm5lY3QgYWdhaW5cclxuICBpZiAoY29ubmVjdGVkKSB7XHJcbiAgICBjb25zb2xlLmxvZygnTW9uZ29EQiBpcyBhbHJlYWR5IGNvbm5lY3RlZC4uLicpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29ubmVjdCB0byBNb25nb0RCXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpO1xyXG4gICAgY29ubmVjdGVkID0gdHJ1ZTtcclxuICAgIGNvbnNvbGUubG9nKCdNb25nb0RCIGNvbm5lY3RlZC4uLicpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0ZWQiLCJjb25uZWN0REIiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./config/database.js\n");

/***/ }),

/***/ "(rsc)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        unique: [\n            true,\n            \"Email j\\xe1 existe\"\n        ],\n        required: [\n            true,\n            \"Email \\xe9 requerido\"\n        ]\n    },\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Nome de usu\\xe1rio \\xe9 requerido\"\n        ]\n    },\n    image: {\n        type: String\n    },\n    bookmarks: [\n        {\n            type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n            ref: \"Property\"\n        }\n    ]\n}, {\n    timestamps: true\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUQ7QUFFakQsTUFBTUcsYUFBYSxJQUFJSCw0Q0FBTUEsQ0FDM0I7SUFDRUksT0FBTztRQUNMQyxNQUFNQztRQUNOQyxRQUFRO1lBQUM7WUFBTTtTQUFrQjtRQUNqQ0MsVUFBVTtZQUFDO1lBQU07U0FBb0I7SUFDdkM7SUFDQUMsVUFBVTtRQUNSSixNQUFNQztRQUNORSxVQUFVO1lBQUM7WUFBTTtTQUE4QjtJQUNqRDtJQUNBRSxPQUFPO1FBQ0xMLE1BQU1DO0lBQ1I7SUFDQUssV0FBVztRQUNUO1lBQ0VOLE1BQU1MLDRDQUFNQSxDQUFDWSxLQUFLLENBQUNDLFFBQVE7WUFDM0JDLEtBQUs7UUFDUDtLQUNEO0FBQ0gsR0FDQTtJQUNFQyxZQUFZO0FBQ2Q7QUFHRixNQUFNQyxPQUFPZCw0Q0FBTUEsQ0FBQ2MsSUFBSSxJQUFJZiwrQ0FBS0EsQ0FBQyxRQUFRRTtBQUUxQyxpRUFBZWEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL01vbm9saXRvc0hvdXNlLy4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYShcclxuICB7XHJcbiAgICBlbWFpbDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHVuaXF1ZTogW3RydWUsICdFbWFpbCBqw6EgZXhpc3RlJ10sXHJcbiAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ0VtYWlsIMOpIHJlcXVlcmlkbyddLFxyXG4gICAgfSxcclxuICAgIHVzZXJuYW1lOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAnTm9tZSBkZSB1c3XDoXJpbyDDqSByZXF1ZXJpZG8nXSxcclxuICAgIH0sXHJcbiAgICBpbWFnZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgYm9va21hcmtzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICAgICAgcmVmOiAnUHJvcGVydHknLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpbWVzdGFtcHM6IHRydWUsXHJcbiAgfVxyXG4pO1xyXG5cclxuY29uc3QgVXNlciA9IG1vZGVscy5Vc2VyIHx8IG1vZGVsKCdVc2VyJywgVXNlclNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG4iXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJVc2VyU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwidW5pcXVlIiwicmVxdWlyZWQiLCJ1c2VybmFtZSIsImltYWdlIiwiYm9va21hcmtzIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInRpbWVzdGFtcHMiLCJVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/User.js\n");

/***/ }),

/***/ "(rsc)/./utils/authOptions.js":
/*!******************************!*\
  !*** ./utils/authOptions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/database */ \"(rsc)/./config/database.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./models/User.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    prompt: \"consent\",\n                    access_type: \"offline\",\n                    response_type: \"code\"\n                }\n            }\n        })\n    ],\n    callbacks: {\n        // Invoked on successful signin\n        async signIn ({ profile }) {\n            // 1. Connect to database\n            await (0,_config_database__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            // 2. Check if user exists\n            const userExists = await _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n                email: profile.email\n            });\n            // 3. If not, then add user to database\n            if (!userExists) {\n                // Truncate user name if too long\n                const username = profile.name.slice(0, 20);\n                await _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n                    email: profile.email,\n                    username,\n                    image: profile.picture\n                });\n            }\n            // 4. Return true to allow sign in\n            return true;\n        },\n        // Modifies the session object\n        async session ({ session }) {\n            // 1. Get user from database\n            const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n                email: session.user.email\n            });\n            // 2. Assign the user id to the session\n            session.user.id = user._id.toString();\n            // 3. return session\n            return session;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9hdXRoT3B0aW9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBDO0FBQ1Q7QUFFdUI7QUFFakQsTUFBTUcsY0FBYztJQUN6QkMsV0FBVztRQUNURixzRUFBY0EsQ0FBQztZQUNiRyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7WUFDOUNDLGVBQWU7Z0JBQ2JDLFFBQVE7b0JBQ05DLFFBQVE7b0JBQ1JDLGFBQWE7b0JBQ2JDLGVBQWU7Z0JBQ2pCO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RDLFdBQVc7UUFDVCwrQkFBK0I7UUFDL0IsTUFBTUMsUUFBTyxFQUFFQyxPQUFPLEVBQUU7WUFDdEIseUJBQXlCO1lBQ3pCLE1BQU1sQiw0REFBU0E7WUFDZiwwQkFBMEI7WUFDMUIsTUFBTW1CLGFBQWEsTUFBTWxCLG9EQUFJQSxDQUFDbUIsT0FBTyxDQUFDO2dCQUFFQyxPQUFPSCxRQUFRRyxLQUFLO1lBQUM7WUFDN0QsdUNBQXVDO1lBQ3ZDLElBQUksQ0FBQ0YsWUFBWTtnQkFDZixpQ0FBaUM7Z0JBQ2pDLE1BQU1HLFdBQVdKLFFBQVFLLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEdBQUc7Z0JBRXZDLE1BQU12QixvREFBSUEsQ0FBQ3dCLE1BQU0sQ0FBQztvQkFDaEJKLE9BQU9ILFFBQVFHLEtBQUs7b0JBQ3BCQztvQkFDQUksT0FBT1IsUUFBUVMsT0FBTztnQkFDeEI7WUFDRjtZQUNBLGtDQUFrQztZQUNsQyxPQUFPO1FBQ1Q7UUFDQSw4QkFBOEI7UUFDOUIsTUFBTUMsU0FBUSxFQUFFQSxPQUFPLEVBQUU7WUFDdkIsNEJBQTRCO1lBQzVCLE1BQU1DLE9BQU8sTUFBTTVCLG9EQUFJQSxDQUFDbUIsT0FBTyxDQUFDO2dCQUFFQyxPQUFPTyxRQUFRQyxJQUFJLENBQUNSLEtBQUs7WUFBQztZQUM1RCx1Q0FBdUM7WUFDdkNPLFFBQVFDLElBQUksQ0FBQ0MsRUFBRSxHQUFHRCxLQUFLRSxHQUFHLENBQUNDLFFBQVE7WUFDbkMsb0JBQW9CO1lBQ3BCLE9BQU9KO1FBQ1Q7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nb25vbGl0b3NIb3VzZS8uL3V0aWxzL2F1dGhPcHRpb25zLmpzPzQ0OTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3REQiBmcm9tICdAL2NvbmZpZy9kYXRhYmFzZSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJ0AvbW9kZWxzL1VzZXInO1xyXG5cclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJztcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXHJcbiAgICAgIGF1dGhvcml6YXRpb246IHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHByb21wdDogJ2NvbnNlbnQnLFxyXG4gICAgICAgICAgYWNjZXNzX3R5cGU6ICdvZmZsaW5lJyxcclxuICAgICAgICAgIHJlc3BvbnNlX3R5cGU6ICdjb2RlJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIC8vIEludm9rZWQgb24gc3VjY2Vzc2Z1bCBzaWduaW5cclxuICAgIGFzeW5jIHNpZ25Jbih7IHByb2ZpbGUgfSkge1xyXG4gICAgICAvLyAxLiBDb25uZWN0IHRvIGRhdGFiYXNlXHJcbiAgICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG4gICAgICAvLyAyLiBDaGVjayBpZiB1c2VyIGV4aXN0c1xyXG4gICAgICBjb25zdCB1c2VyRXhpc3RzID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IHByb2ZpbGUuZW1haWwgfSk7XHJcbiAgICAgIC8vIDMuIElmIG5vdCwgdGhlbiBhZGQgdXNlciB0byBkYXRhYmFzZVxyXG4gICAgICBpZiAoIXVzZXJFeGlzdHMpIHtcclxuICAgICAgICAvLyBUcnVuY2F0ZSB1c2VyIG5hbWUgaWYgdG9vIGxvbmdcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IHByb2ZpbGUubmFtZS5zbGljZSgwLCAyMCk7XHJcblxyXG4gICAgICAgIGF3YWl0IFVzZXIuY3JlYXRlKHtcclxuICAgICAgICAgIGVtYWlsOiBwcm9maWxlLmVtYWlsLFxyXG4gICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICBpbWFnZTogcHJvZmlsZS5waWN0dXJlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIDQuIFJldHVybiB0cnVlIHRvIGFsbG93IHNpZ24gaW5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgLy8gTW9kaWZpZXMgdGhlIHNlc3Npb24gb2JqZWN0XHJcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiB9KSB7XHJcbiAgICAgIC8vIDEuIEdldCB1c2VyIGZyb20gZGF0YWJhc2VcclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfSk7XHJcbiAgICAgIC8vIDIuIEFzc2lnbiB0aGUgdXNlciBpZCB0byB0aGUgc2Vzc2lvblxyXG4gICAgICBzZXNzaW9uLnVzZXIuaWQgPSB1c2VyLl9pZC50b1N0cmluZygpO1xyXG4gICAgICAvLyAzLiByZXR1cm4gc2Vzc2lvblxyXG4gICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIl0sIm5hbWVzIjpbImNvbm5lY3REQiIsIlVzZXIiLCJHb29nbGVQcm92aWRlciIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiYXV0aG9yaXphdGlvbiIsInBhcmFtcyIsInByb21wdCIsImFjY2Vzc190eXBlIiwicmVzcG9uc2VfdHlwZSIsImNhbGxiYWNrcyIsInNpZ25JbiIsInByb2ZpbGUiLCJ1c2VyRXhpc3RzIiwiZmluZE9uZSIsImVtYWlsIiwidXNlcm5hbWUiLCJuYW1lIiwic2xpY2UiLCJjcmVhdGUiLCJpbWFnZSIsInBpY3R1cmUiLCJzZXNzaW9uIiwidXNlciIsImlkIiwiX2lkIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./utils/authOptions.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Cthami%5CMonolitos_house%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cthami%5CMonolitos_house&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();