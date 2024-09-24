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
exports.id = "app/api/properties/route";
exports.ids = ["app/api/properties/route"];
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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproperties%2Froute&page=%2Fapi%2Fproperties%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproperties%2Froute.js&appDir=C%3A%5CUsers%5Cthami%5CMonolitos_house%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cthami%5CMonolitos_house&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproperties%2Froute&page=%2Fapi%2Fproperties%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproperties%2Froute.js&appDir=C%3A%5CUsers%5Cthami%5CMonolitos_house%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cthami%5CMonolitos_house&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_thami_Monolitos_house_app_api_properties_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/properties/route.js */ \"(rsc)/./app/api/properties/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/properties/route\",\n        pathname: \"/api/properties\",\n        filename: \"route\",\n        bundlePath: \"app/api/properties/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\thami\\\\Monolitos_house\\\\app\\\\api\\\\properties\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_thami_Monolitos_house_app_api_properties_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/properties/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcm9wZXJ0aWVzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcm9wZXJ0aWVzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJvcGVydGllcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUN0aGFtaSU1Q01vbm9saXRvc19ob3VzZSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDdGhhbWklNUNNb25vbGl0b3NfaG91c2UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2lCO0FBQzlGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTW9ub2xpdG9zSG91c2UvPzg2ODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcdGhhbWlcXFxcTW9ub2xpdG9zX2hvdXNlXFxcXGFwcFxcXFxhcGlcXFxccHJvcGVydGllc1xcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcHJvcGVydGllcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Byb3BlcnRpZXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Byb3BlcnRpZXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFx0aGFtaVxcXFxNb25vbGl0b3NfaG91c2VcXFxcYXBwXFxcXGFwaVxcXFxwcm9wZXJ0aWVzXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9wcm9wZXJ0aWVzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproperties%2Froute&page=%2Fapi%2Fproperties%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproperties%2Froute.js&appDir=C%3A%5CUsers%5Cthami%5CMonolitos_house%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cthami%5CMonolitos_house&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/properties/route.js":
/*!*************************************!*\
  !*** ./app/api/properties/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/database */ \"(rsc)/./config/database.js\");\n/* harmony import */ var _models_Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Property */ \"(rsc)/./models/Property.js\");\n/* harmony import */ var _utils_getSessionUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/getSessionUser */ \"(rsc)/./utils/getSessionUser.js\");\n/* harmony import */ var _config_cloudinary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/cloudinary */ \"(rsc)/./config/cloudinary.js\");\n\n\n\n\n// GET /api/properties\nconst GET = async (request)=>{\n    try {\n        await (0,_config_database__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const page = request.nextUrl.searchParams.get(\"page\") || 1;\n        const pageSize = request.nextUrl.searchParams.get(\"pageSize\") || 6;\n        const skip = (page - 1) * pageSize;\n        const total = await _models_Property__WEBPACK_IMPORTED_MODULE_1__[\"default\"].countDocuments({});\n        const properties = await _models_Property__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({}).skip(skip).limit(pageSize);\n        const result = {\n            total,\n            properties\n        };\n        return new Response(JSON.stringify(result), {\n            status: 200\n        });\n    } catch (error) {\n        console.log(error);\n        return new Response(\"Algo deu errado\", {\n            status: 500\n        });\n    }\n};\nconst POST = async (request)=>{\n    try {\n        await (0,_config_database__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const sessionUser = await (0,_utils_getSessionUser__WEBPACK_IMPORTED_MODULE_2__.getSessionUser)();\n        if (!sessionUser || !sessionUser.userId) {\n            return new Response(\"O ID do usu\\xe1rio \\xe9 requerido\", {\n                status: 401\n            });\n        }\n        const { userId } = sessionUser;\n        const formData = await request.formData();\n        // Access all values from amenities and images\n        const amenities = formData.getAll(\"amenities\");\n        const images = formData.getAll(\"images\").filter((image)=>image.name !== \"\");\n        // Create propertyData object for database\n        const propertyData = {\n            type: formData.get(\"type\"),\n            name: formData.get(\"name\"),\n            description: formData.get(\"description\"),\n            location: {\n                street: formData.get(\"location.street\"),\n                city: formData.get(\"location.city\"),\n                state: formData.get(\"location.state\"),\n                zipcode: formData.get(\"location.zipcode\")\n            },\n            beds: formData.get(\"beds\"),\n            baths: formData.get(\"baths\"),\n            square_feet: formData.get(\"square_feet\"),\n            amenities,\n            rates: {\n                weekly: formData.get(\"rates.weekly\"),\n                monthly: formData.get(\"rates.monthly\"),\n                nightly: formData.get(\"rates.nightly.\")\n            },\n            seller_info: {\n                name: formData.get(\"seller_info.name\"),\n                email: formData.get(\"seller_info.email\"),\n                phone: formData.get(\"seller_info.phone\")\n            },\n            owner: userId\n        };\n        // Upload image(s) to Cloudinary\n        const imageUploadPromises = [];\n        for (const image of images){\n            const imageBuffer = await image.arrayBuffer();\n            const imageArray = Array.from(new Uint8Array(imageBuffer));\n            const imageData = Buffer.from(imageArray);\n            // Convert the image data to base64\n            const imageBase64 = imageData.toString(\"base64\");\n            // Make request to upload to Cloudinary\n            const result = await _config_cloudinary__WEBPACK_IMPORTED_MODULE_3__[\"default\"].uploader.upload(`data:image/png;base64,${imageBase64}`, {\n                folder: \"propertypulse\"\n            });\n            imageUploadPromises.push(result.secure_url);\n            // Wait for all images to upload\n            const uploadedImages = await Promise.all(imageUploadPromises);\n            // Add uploaded images to the propertyData object\n            propertyData.images = uploadedImages;\n        }\n        const newProperty = new _models_Property__WEBPACK_IMPORTED_MODULE_1__[\"default\"](propertyData);\n        await newProperty.save();\n        return Response.redirect(`${process.env.NEXTAUTH_URL}/properties/${newProperty._id}`);\n    // return new Response(JSON.stringify({ message: 'Success' }), {\n    //   status: 200,\n    // });\n    } catch (error) {\n        return new Response(\"Falha em adicionar im\\xf3vel\", {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTU0sWUFBWUMsT0FBT0gsSUFBSSxDQUFDRjtZQUU5QixtQ0FBbUM7WUFDbkMsTUFBTU0sY0FBY0YsVUFBVUcsUUFBUSxDQUFDO1lBRXZDLHVDQUF1QztZQUN2QyxNQUFNL0MsU0FBUyxNQUFNZCwwREFBVUEsQ0FBQzhELFFBQVEsQ0FBQ0MsTUFBTSxDQUM3QyxDQUFDLHNCQUFzQixFQUFFSCxZQUFZLENBQUMsRUFDdEM7Z0JBQ0VJLFFBQVE7WUFDVjtZQUdGYixvQkFBb0JjLElBQUksQ0FBQ25ELE9BQU9vRCxVQUFVO1lBRTFDLGdDQUFnQztZQUNoQyxNQUFNQyxpQkFBaUIsTUFBTUMsUUFBUUMsR0FBRyxDQUFDbEI7WUFDekMsaURBQWlEO1lBQ2pEbkIsYUFBYUosTUFBTSxHQUFHdUM7UUFDeEI7UUFFQSxNQUFNRyxjQUFjLElBQUl4RSx3REFBUUEsQ0FBQ2tDO1FBQ2pDLE1BQU1zQyxZQUFZQyxJQUFJO1FBRXRCLE9BQU94RCxTQUFTeUQsUUFBUSxDQUN0QixDQUFDLEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxDQUFDLFlBQVksRUFBRUwsWUFBWU0sR0FBRyxDQUFDLENBQUM7SUFHN0QsZ0VBQWdFO0lBQ2hFLGlCQUFpQjtJQUNqQixNQUFNO0lBQ1IsRUFBRSxPQUFPekQsT0FBTztRQUNkLE9BQU8sSUFBSUosU0FBUyxnQ0FBNkI7WUFBRUcsUUFBUTtRQUFJO0lBQ2pFO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL01vbm9saXRvc0hvdXNlLy4vYXBwL2FwaS9wcm9wZXJ0aWVzL3JvdXRlLmpzP2MyMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3REQiBmcm9tICdAL2NvbmZpZy9kYXRhYmFzZSc7XHJcbmltcG9ydCBQcm9wZXJ0eSBmcm9tICdAL21vZGVscy9Qcm9wZXJ0eSc7XHJcbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyIH0gZnJvbSAnQC91dGlscy9nZXRTZXNzaW9uVXNlcic7XHJcbmltcG9ydCBjbG91ZGluYXJ5IGZyb20gJ0AvY29uZmlnL2Nsb3VkaW5hcnknO1xyXG5cclxuLy8gR0VUIC9hcGkvcHJvcGVydGllc1xyXG5leHBvcnQgY29uc3QgR0VUID0gYXN5bmMgKHJlcXVlc3QpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgY29ubmVjdERCKCk7XHJcblxyXG4gICAgY29uc3QgcGFnZSA9IHJlcXVlc3QubmV4dFVybC5zZWFyY2hQYXJhbXMuZ2V0KCdwYWdlJykgfHwgMTtcclxuICAgIGNvbnN0IHBhZ2VTaXplID0gcmVxdWVzdC5uZXh0VXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3BhZ2VTaXplJykgfHwgNjtcclxuXHJcbiAgICBjb25zdCBza2lwID0gKHBhZ2UgLSAxKSAqIHBhZ2VTaXplO1xyXG5cclxuICAgIGNvbnN0IHRvdGFsID0gYXdhaXQgUHJvcGVydHkuY291bnREb2N1bWVudHMoe30pO1xyXG4gICAgY29uc3QgcHJvcGVydGllcyA9IGF3YWl0IFByb3BlcnR5LmZpbmQoe30pLnNraXAoc2tpcCkubGltaXQocGFnZVNpemUpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgICAgdG90YWwsXHJcbiAgICAgIHByb3BlcnRpZXMsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSwge1xyXG4gICAgICBzdGF0dXM6IDIwMCxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKCdBbGdvIGRldSBlcnJhZG8nLCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQT1NUID0gYXN5bmMgKHJlcXVlc3QpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgY29ubmVjdERCKCk7XHJcblxyXG4gICAgY29uc3Qgc2Vzc2lvblVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcigpO1xyXG5cclxuICAgIGlmICghc2Vzc2lvblVzZXIgfHwgIXNlc3Npb25Vc2VyLnVzZXJJZCkge1xyXG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKCdPIElEIGRvIHVzdcOhcmlvIMOpIHJlcXVlcmlkbycsIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyB1c2VySWQgfSA9IHNlc3Npb25Vc2VyO1xyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG5cclxuICAgIC8vIEFjY2VzcyBhbGwgdmFsdWVzIGZyb20gYW1lbml0aWVzIGFuZCBpbWFnZXNcclxuICAgIGNvbnN0IGFtZW5pdGllcyA9IGZvcm1EYXRhLmdldEFsbCgnYW1lbml0aWVzJyk7XHJcbiAgICBjb25zdCBpbWFnZXMgPSBmb3JtRGF0YVxyXG4gICAgICAuZ2V0QWxsKCdpbWFnZXMnKVxyXG4gICAgICAuZmlsdGVyKChpbWFnZSkgPT4gaW1hZ2UubmFtZSAhPT0gJycpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBwcm9wZXJ0eURhdGEgb2JqZWN0IGZvciBkYXRhYmFzZVxyXG4gICAgY29uc3QgcHJvcGVydHlEYXRhID0ge1xyXG4gICAgICB0eXBlOiBmb3JtRGF0YS5nZXQoJ3R5cGUnKSxcclxuICAgICAgbmFtZTogZm9ybURhdGEuZ2V0KCduYW1lJyksXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBmb3JtRGF0YS5nZXQoJ2Rlc2NyaXB0aW9uJyksXHJcbiAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgc3RyZWV0OiBmb3JtRGF0YS5nZXQoJ2xvY2F0aW9uLnN0cmVldCcpLFxyXG4gICAgICAgIGNpdHk6IGZvcm1EYXRhLmdldCgnbG9jYXRpb24uY2l0eScpLFxyXG4gICAgICAgIHN0YXRlOiBmb3JtRGF0YS5nZXQoJ2xvY2F0aW9uLnN0YXRlJyksXHJcbiAgICAgICAgemlwY29kZTogZm9ybURhdGEuZ2V0KCdsb2NhdGlvbi56aXBjb2RlJyksXHJcbiAgICAgIH0sXHJcbiAgICAgIGJlZHM6IGZvcm1EYXRhLmdldCgnYmVkcycpLFxyXG4gICAgICBiYXRoczogZm9ybURhdGEuZ2V0KCdiYXRocycpLFxyXG4gICAgICBzcXVhcmVfZmVldDogZm9ybURhdGEuZ2V0KCdzcXVhcmVfZmVldCcpLFxyXG4gICAgICBhbWVuaXRpZXMsXHJcbiAgICAgIHJhdGVzOiB7XHJcbiAgICAgICAgd2Vla2x5OiBmb3JtRGF0YS5nZXQoJ3JhdGVzLndlZWtseScpLFxyXG4gICAgICAgIG1vbnRobHk6IGZvcm1EYXRhLmdldCgncmF0ZXMubW9udGhseScpLFxyXG4gICAgICAgIG5pZ2h0bHk6IGZvcm1EYXRhLmdldCgncmF0ZXMubmlnaHRseS4nKSxcclxuICAgICAgfSxcclxuICAgICAgc2VsbGVyX2luZm86IHtcclxuICAgICAgICBuYW1lOiBmb3JtRGF0YS5nZXQoJ3NlbGxlcl9pbmZvLm5hbWUnKSxcclxuICAgICAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdzZWxsZXJfaW5mby5lbWFpbCcpLFxyXG4gICAgICAgIHBob25lOiBmb3JtRGF0YS5nZXQoJ3NlbGxlcl9pbmZvLnBob25lJyksXHJcbiAgICAgIH0sXHJcbiAgICAgIG93bmVyOiB1c2VySWQsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFVwbG9hZCBpbWFnZShzKSB0byBDbG91ZGluYXJ5XHJcbiAgICBjb25zdCBpbWFnZVVwbG9hZFByb21pc2VzID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBpbWFnZSBvZiBpbWFnZXMpIHtcclxuICAgICAgY29uc3QgaW1hZ2VCdWZmZXIgPSBhd2FpdCBpbWFnZS5hcnJheUJ1ZmZlcigpO1xyXG4gICAgICBjb25zdCBpbWFnZUFycmF5ID0gQXJyYXkuZnJvbShuZXcgVWludDhBcnJheShpbWFnZUJ1ZmZlcikpO1xyXG4gICAgICBjb25zdCBpbWFnZURhdGEgPSBCdWZmZXIuZnJvbShpbWFnZUFycmF5KTtcclxuXHJcbiAgICAgIC8vIENvbnZlcnQgdGhlIGltYWdlIGRhdGEgdG8gYmFzZTY0XHJcbiAgICAgIGNvbnN0IGltYWdlQmFzZTY0ID0gaW1hZ2VEYXRhLnRvU3RyaW5nKCdiYXNlNjQnKTtcclxuXHJcbiAgICAgIC8vIE1ha2UgcmVxdWVzdCB0byB1cGxvYWQgdG8gQ2xvdWRpbmFyeVxyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbG91ZGluYXJ5LnVwbG9hZGVyLnVwbG9hZChcclxuICAgICAgICBgZGF0YTppbWFnZS9wbmc7YmFzZTY0LCR7aW1hZ2VCYXNlNjR9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmb2xkZXI6ICdwcm9wZXJ0eXB1bHNlJyxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpbWFnZVVwbG9hZFByb21pc2VzLnB1c2gocmVzdWx0LnNlY3VyZV91cmwpO1xyXG5cclxuICAgICAgLy8gV2FpdCBmb3IgYWxsIGltYWdlcyB0byB1cGxvYWRcclxuICAgICAgY29uc3QgdXBsb2FkZWRJbWFnZXMgPSBhd2FpdCBQcm9taXNlLmFsbChpbWFnZVVwbG9hZFByb21pc2VzKTtcclxuICAgICAgLy8gQWRkIHVwbG9hZGVkIGltYWdlcyB0byB0aGUgcHJvcGVydHlEYXRhIG9iamVjdFxyXG4gICAgICBwcm9wZXJ0eURhdGEuaW1hZ2VzID0gdXBsb2FkZWRJbWFnZXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3UHJvcGVydHkgPSBuZXcgUHJvcGVydHkocHJvcGVydHlEYXRhKTtcclxuICAgIGF3YWl0IG5ld1Byb3BlcnR5LnNhdmUoKTtcclxuXHJcbiAgICByZXR1cm4gUmVzcG9uc2UucmVkaXJlY3QoXHJcbiAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTH0vcHJvcGVydGllcy8ke25ld1Byb3BlcnR5Ll9pZH1gXHJcbiAgICApO1xyXG5cclxuICAgIC8vIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiAnU3VjY2VzcycgfSksIHtcclxuICAgIC8vICAgc3RhdHVzOiAyMDAsXHJcbiAgICAvLyB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSgnRmFsaGEgZW0gYWRpY2lvbmFyIGltw7N2ZWwnLCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImNvbm5lY3REQiIsIlByb3BlcnR5IiwiZ2V0U2Vzc2lvblVzZXIiLCJjbG91ZGluYXJ5IiwiR0VUIiwicmVxdWVzdCIsInBhZ2UiLCJuZXh0VXJsIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwicGFnZVNpemUiLCJza2lwIiwidG90YWwiLCJjb3VudERvY3VtZW50cyIsInByb3BlcnRpZXMiLCJmaW5kIiwibGltaXQiLCJyZXN1bHQiLCJSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJQT1NUIiwic2Vzc2lvblVzZXIiLCJ1c2VySWQiLCJmb3JtRGF0YSIsImFtZW5pdGllcyIsImdldEFsbCIsImltYWdlcyIsImZpbHRlciIsImltYWdlIiwibmFtZSIsInByb3BlcnR5RGF0YSIsInR5cGUiLCJkZXNjcmlwdGlvbiIsImxvY2F0aW9uIiwic3RyZWV0IiwiY2l0eSIsInN0YXRlIiwiemlwY29kZSIsImJlZHMiLCJiYXRocyIsInNxdWFyZV9mZWV0IiwicmF0ZXMiLCJ3ZWVrbHkiLCJtb250aGx5IiwibmlnaHRseSIsInNlbGxlcl9pbmZvIiwiZW1haWwiLCJwaG9uZSIsIm93bmVyIiwiaW1hZ2VVcGxvYWRQcm9taXNlcyIsImltYWdlQnVmZmVyIiwiYXJyYXlCdWZmZXIiLCJpbWFnZUFycmF5IiwiQXJyYXkiLCJmcm9tIiwiVWludDhBcnJheSIsImltYWdlRGF0YSIsIkJ1ZmZlciIsImltYWdlQmFzZTY0IiwidG9TdHJpbmciLCJ1cGxvYWRlciIsInVwbG9hZCIsImZvbGRlciIsInB1c2giLCJzZWN1cmVfdXJsIiwidXBsb2FkZWRJbWFnZXMiLCJQcm9taXNlIiwiYWxsIiwibmV3UHJvcGVydHkiLCJzYXZlIiwicmVkaXJlY3QiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfVVJMIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/properties/route.js\n");

/***/ }),

/***/ "(rsc)/./config/cloudinary.js":
/*!******************************!*\
  !*** ./config/cloudinary.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ \"(rsc)/./node_modules/cloudinary/cloudinary.js\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);\n\ncloudinary__WEBPACK_IMPORTED_MODULE_0__.v2.config({\n    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,\n    api_key: process.env.CLOUDINARY_API_KEY,\n    api_secret: process.env.CLOUDINARY_API_SECRET\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudinary__WEBPACK_IMPORTED_MODULE_0__.v2);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb25maWcvY2xvdWRpbmFyeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUNDLDBDQUFVQSxDQUFDQyxNQUFNLENBQUM7SUFDaEJDLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0MscUJBQXFCO0lBQzdDQyxTQUFTSCxRQUFRQyxHQUFHLENBQUNHLGtCQUFrQjtJQUN2Q0MsWUFBWUwsUUFBUUMsR0FBRyxDQUFDSyxxQkFBcUI7QUFDL0M7QUFFQSxpRUFBZVQsMENBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nb25vbGl0b3NIb3VzZS8uL2NvbmZpZy9jbG91ZGluYXJ5LmpzPzgxYzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdjIgYXMgY2xvdWRpbmFyeSB9IGZyb20gJ2Nsb3VkaW5hcnknO1xyXG5cclxuY2xvdWRpbmFyeS5jb25maWcoe1xyXG4gIGNsb3VkX25hbWU6IHByb2Nlc3MuZW52LkNMT1VESU5BUllfQ0xPVURfTkFNRSxcclxuICBhcGlfa2V5OiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX0FQSV9LRVksXHJcbiAgYXBpX3NlY3JldDogcHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9BUElfU0VDUkVULFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsb3VkaW5hcnk7XHJcbiJdLCJuYW1lcyI6WyJ2MiIsImNsb3VkaW5hcnkiLCJjb25maWciLCJjbG91ZF9uYW1lIiwicHJvY2VzcyIsImVudiIsIkNMT1VESU5BUllfQ0xPVURfTkFNRSIsImFwaV9rZXkiLCJDTE9VRElOQVJZX0FQSV9LRVkiLCJhcGlfc2VjcmV0IiwiQ0xPVURJTkFSWV9BUElfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./config/cloudinary.js\n");

/***/ }),

/***/ "(rsc)/./config/database.js":
/*!****************************!*\
  !*** ./config/database.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet connected = false;\nconst connectDB = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", true);\n    // If the database is already connected, don't connect again\n    if (connected) {\n        console.log(\"MongoDB is already connected...\");\n        return;\n    }\n    // Connect to MongoDB\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n        connected = true;\n        console.log(\"MongoDB connected...\");\n    } catch (error) {\n        console.log(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb25maWcvZGF0YWJhc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLElBQUlDLFlBQVk7QUFFaEIsTUFBTUMsWUFBWTtJQUNoQkYsbURBQVksQ0FBQyxlQUFlO0lBRTVCLDREQUE0RDtJQUM1RCxJQUFJQyxXQUFXO1FBQ2JHLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0Y7SUFFQSxxQkFBcUI7SUFDckIsSUFBSTtRQUNGLE1BQU1MLHVEQUFnQixDQUFDTyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7UUFDOUNSLFlBQVk7UUFDWkcsUUFBUUMsR0FBRyxDQUFDO0lBQ2QsRUFBRSxPQUFPSyxPQUFPO1FBQ2ROLFFBQVFDLEdBQUcsQ0FBQ0s7SUFDZDtBQUNGO0FBRUEsaUVBQWVSLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nb25vbGl0b3NIb3VzZS8uL2NvbmZpZy9kYXRhYmFzZS5qcz82OTJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5sZXQgY29ubmVjdGVkID0gZmFsc2U7XHJcblxyXG5jb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XHJcbiAgbW9uZ29vc2Uuc2V0KCdzdHJpY3RRdWVyeScsIHRydWUpO1xyXG5cclxuICAvLyBJZiB0aGUgZGF0YWJhc2UgaXMgYWxyZWFkeSBjb25uZWN0ZWQsIGRvbid0IGNvbm5lY3QgYWdhaW5cclxuICBpZiAoY29ubmVjdGVkKSB7XHJcbiAgICBjb25zb2xlLmxvZygnTW9uZ29EQiBpcyBhbHJlYWR5IGNvbm5lY3RlZC4uLicpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29ubmVjdCB0byBNb25nb0RCXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpO1xyXG4gICAgY29ubmVjdGVkID0gdHJ1ZTtcclxuICAgIGNvbnNvbGUubG9nKCdNb25nb0RCIGNvbm5lY3RlZC4uLicpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0ZWQiLCJjb25uZWN0REIiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./config/database.js\n");

/***/ }),

/***/ "(rsc)/./models/Property.js":
/*!****************************!*\
  !*** ./models/Property.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PropertySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    owner: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"User\",\n        required: true\n    },\n    name: {\n        type: String,\n        required: true\n    },\n    type: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String\n    },\n    location: {\n        street: {\n            type: String\n        },\n        city: {\n            type: String\n        },\n        state: {\n            type: String\n        },\n        zipcode: {\n            type: String\n        }\n    },\n    beds: {\n        type: Number,\n        required: true\n    },\n    baths: {\n        type: Number,\n        required: true\n    },\n    square_feet: {\n        type: Number,\n        required: true\n    },\n    amenities: [\n        {\n            type: String\n        }\n    ],\n    rates: {\n        nightly: {\n            type: Number\n        },\n        weekly: {\n            type: Number\n        },\n        monthly: {\n            type: Number\n        }\n    },\n    seller_info: {\n        name: {\n            type: String\n        },\n        email: {\n            type: String\n        },\n        phone: {\n            type: String\n        }\n    },\n    images: [\n        {\n            type: String\n        }\n    ],\n    is_featured: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst Property = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Property || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Property\", PropertySchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Property);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvUHJvcGVydHkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBRWpELE1BQU1HLGlCQUFpQixJQUFJSCw0Q0FBTUEsQ0FDL0I7SUFDRUksT0FBTztRQUNMQyxNQUFNTCw0Q0FBTUEsQ0FBQ00sS0FBSyxDQUFDQyxRQUFRO1FBQzNCQyxLQUFLO1FBQ0xDLFVBQVU7SUFDWjtJQUNBQyxNQUFNO1FBQ0pMLE1BQU1NO1FBQ05GLFVBQVU7SUFDWjtJQUNBSixNQUFNO1FBQ0pBLE1BQU1NO1FBQ05GLFVBQVU7SUFDWjtJQUNBRyxhQUFhO1FBQ1hQLE1BQU1NO0lBQ1I7SUFDQUUsVUFBVTtRQUNSQyxRQUFRO1lBQ05ULE1BQU1NO1FBQ1I7UUFDQUksTUFBTTtZQUNKVixNQUFNTTtRQUNSO1FBQ0FLLE9BQU87WUFDTFgsTUFBTU07UUFDUjtRQUNBTSxTQUFTO1lBQ1BaLE1BQU1NO1FBQ1I7SUFDRjtJQUNBTyxNQUFNO1FBQ0piLE1BQU1jO1FBQ05WLFVBQVU7SUFDWjtJQUNBVyxPQUFPO1FBQ0xmLE1BQU1jO1FBQ05WLFVBQVU7SUFDWjtJQUNBWSxhQUFhO1FBQ1hoQixNQUFNYztRQUNOVixVQUFVO0lBQ1o7SUFDQWEsV0FBVztRQUNUO1lBQ0VqQixNQUFNTTtRQUNSO0tBQ0Q7SUFDRFksT0FBTztRQUNMQyxTQUFTO1lBQ1BuQixNQUFNYztRQUNSO1FBQ0FNLFFBQVE7WUFDTnBCLE1BQU1jO1FBQ1I7UUFDQU8sU0FBUztZQUNQckIsTUFBTWM7UUFDUjtJQUNGO0lBQ0FRLGFBQWE7UUFDWGpCLE1BQU07WUFDSkwsTUFBTU07UUFDUjtRQUNBaUIsT0FBTztZQUNMdkIsTUFBTU07UUFDUjtRQUNBa0IsT0FBTztZQUNMeEIsTUFBTU07UUFDUjtJQUNGO0lBQ0FtQixRQUFRO1FBQ047WUFDRXpCLE1BQU1NO1FBQ1I7S0FDRDtJQUNEb0IsYUFBYTtRQUNYMUIsTUFBTTJCO1FBQ05DLFNBQVM7SUFDWDtBQUNGLEdBQ0E7SUFDRUMsWUFBWTtBQUNkO0FBR0YsTUFBTUMsV0FBV2pDLDRDQUFNQSxDQUFDaUMsUUFBUSxJQUFJbEMsK0NBQUtBLENBQUMsWUFBWUU7QUFFdEQsaUVBQWVnQyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTW9ub2xpdG9zSG91c2UvLi9tb2RlbHMvUHJvcGVydHkuanM/MzI3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBQcm9wZXJ0eVNjaGVtYSA9IG5ldyBTY2hlbWEoXHJcbiAge1xyXG4gICAgb3duZXI6IHtcclxuICAgICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxyXG4gICAgICByZWY6ICdVc2VyJyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgbmFtZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHR5cGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgc3RyZWV0OiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB9LFxyXG4gICAgICBjaXR5OiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB9LFxyXG4gICAgICBzdGF0ZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgfSxcclxuICAgICAgemlwY29kZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBiZWRzOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgYmF0aHM6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBzcXVhcmVfZmVldDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGFtZW5pdGllczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIHJhdGVzOiB7XHJcbiAgICAgIG5pZ2h0bHk6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHdlZWtseToge1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgfSxcclxuICAgICAgbW9udGhseToge1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZWxsZXJfaW5mbzoge1xyXG4gICAgICBuYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB9LFxyXG4gICAgICBlbWFpbDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgfSxcclxuICAgICAgcGhvbmU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgaXNfZmVhdHVyZWQ6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcclxuICB9XHJcbik7XHJcblxyXG5jb25zdCBQcm9wZXJ0eSA9IG1vZGVscy5Qcm9wZXJ0eSB8fCBtb2RlbCgnUHJvcGVydHknLCBQcm9wZXJ0eVNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9wZXJ0eTtcclxuIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwiUHJvcGVydHlTY2hlbWEiLCJvd25lciIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicmVxdWlyZWQiLCJuYW1lIiwiU3RyaW5nIiwiZGVzY3JpcHRpb24iLCJsb2NhdGlvbiIsInN0cmVldCIsImNpdHkiLCJzdGF0ZSIsInppcGNvZGUiLCJiZWRzIiwiTnVtYmVyIiwiYmF0aHMiLCJzcXVhcmVfZmVldCIsImFtZW5pdGllcyIsInJhdGVzIiwibmlnaHRseSIsIndlZWtseSIsIm1vbnRobHkiLCJzZWxsZXJfaW5mbyIsImVtYWlsIiwicGhvbmUiLCJpbWFnZXMiLCJpc19mZWF0dXJlZCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsIlByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/Property.js\n");

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

/***/ }),

/***/ "(rsc)/./utils/getSessionUser.js":
/*!*********************************!*\
  !*** ./utils/getSessionUser.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSessionUser: () => (/* binding */ getSessionUser)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _utils_authOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/authOptions */ \"(rsc)/./utils/authOptions.js\");\n\n\nconst getSessionUser = async ()=>{\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_utils_authOptions__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n        if (!session || !session.user) {\n            return null;\n        }\n        return {\n            user: session.user,\n            userId: session.user.id\n        };\n    } catch (error) {\n        console.error(error);\n        return null;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9nZXRTZXNzaW9uVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0Q7QUFDQTtBQUUzQyxNQUFNRSxpQkFBaUI7SUFDNUIsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTUgsZ0VBQWdCQSxDQUFDQywyREFBV0E7UUFFbEQsSUFBSSxDQUFDRSxXQUFXLENBQUNBLFFBQVFDLElBQUksRUFBRTtZQUM3QixPQUFPO1FBQ1Q7UUFFQSxPQUFPO1lBQ0xBLE1BQU1ELFFBQVFDLElBQUk7WUFDbEJDLFFBQVFGLFFBQVFDLElBQUksQ0FBQ0UsRUFBRTtRQUN6QjtJQUNGLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2QsT0FBTztJQUNUO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL01vbm9saXRvc0hvdXNlLy4vdXRpbHMvZ2V0U2Vzc2lvblVzZXIuanM/ZGQ1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL25leHQnO1xyXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJ0AvdXRpbHMvYXV0aE9wdGlvbnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlc3Npb25Vc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XHJcblxyXG4gICAgaWYgKCFzZXNzaW9uIHx8ICFzZXNzaW9uLnVzZXIpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcjogc2Vzc2lvbi51c2VyLFxyXG4gICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwiZ2V0U2Vzc2lvblVzZXIiLCJzZXNzaW9uIiwidXNlciIsInVzZXJJZCIsImlkIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./utils/getSessionUser.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/lodash","vendor-chunks/cloudinary","vendor-chunks/q"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproperties%2Froute&page=%2Fapi%2Fproperties%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproperties%2Froute.js&appDir=C%3A%5CUsers%5Cthami%5CMonolitos_house%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cthami%5CMonolitos_house&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();