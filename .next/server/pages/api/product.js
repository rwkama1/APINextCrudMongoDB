module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/product.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/init-middleware.js":
/*!********************************!*\
  !*** ./lib/init-middleware.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initMiddleware; });
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function initMiddleware(middleware) {
  return (req, res) => new Promise((resolve, reject) => {
    middleware(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

/***/ }),

/***/ "./pages/api/cors.js":
/*!***************************!*\
  !*** ./pages/api/cors.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/init-middleware */ "./lib/init-middleware.js");

 // Initialize the cors middleware

const cors = Object(_lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__["default"])( // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
cors__WEBPACK_IMPORTED_MODULE_0___default()({
  // Only allow requests with GET, POST,PUT,DELETE and OPTIONS
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
/* harmony default export */ __webpack_exports__["default"] = (cors);

/***/ }),

/***/ "./pages/api/product.js":
/*!******************************!*\
  !*** ./pages/api/product.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cors */ "./pages/api/cors.js");
/* harmony import */ var crudmongodb_dist_dataproduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crudmongodb/dist/dataproduct */ "crudmongodb/dist/dataproduct");
/* harmony import */ var crudmongodb_dist_dataproduct__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crudmongodb_dist_dataproduct__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crudmongodb_dist_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crudmongodb/dist/product */ "crudmongodb/dist/product");
/* harmony import */ var crudmongodb_dist_product__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crudmongodb_dist_product__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (async function (req, res) {
  if (req.method === "GET") {
    await Object(_cors__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res);
    const list = await crudmongodb_dist_dataproduct__WEBPACK_IMPORTED_MODULE_2__["DataProduct"].getInstance().getProducts();
    return res.send(list);
  }

  if (req.method === "POST") {
    await Object(_cors__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res);

    try {
      const data = req.body;
      var dtproduct = new crudmongodb_dist_product__WEBPACK_IMPORTED_MODULE_3__["DTProduct"](0, data.name, data.price);
      const addproduct = await crudmongodb_dist_dataproduct__WEBPACK_IMPORTED_MODULE_2__["DataProduct"].getInstance().addProduct(dtproduct);
      return res.status(200).send("Success");
    } catch (error) {
      return res.status(500).send("Could not add Product: " + error.message);
    }
  }

  if (req.method === "PUT") {
    await Object(_cors__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res);

    try {
      const data = req.body;
      var dtproduct = new crudmongodb_dist_product__WEBPACK_IMPORTED_MODULE_3__["DTProduct"](0, data.name, data.price);
      const updprod = await crudmongodb_dist_dataproduct__WEBPACK_IMPORTED_MODULE_2__["DataProduct"].getInstance().updateProduct(dtproduct);
      return res.status(200).send("Success");
    } catch (error) {
      return res.status(500).send("Could not UPDATE Product: " + error.message);
    }
  }

  if (req.method === "DELETE") {
    await Object(_cors__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res);
    const data = req.body;

    try {
      var dtproduct = new crudmongodb_dist_product__WEBPACK_IMPORTED_MODULE_3__["DTProduct"](0, data.name, 0);
      const deletep = await crudmongodb_dist_dataproduct__WEBPACK_IMPORTED_MODULE_2__["DataProduct"].getInstance().deleteProduct(dtproduct);
      return res.status(200).send("Success");
    } catch (error) {
      return res.status(500).send("Could not DELETE Product: " + error.message);
    }
  }
});

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "crudmongodb/dist/dataproduct":
/*!***********************************************!*\
  !*** external "crudmongodb/dist/dataproduct" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crudmongodb/dist/dataproduct");

/***/ }),

/***/ "crudmongodb/dist/product":
/*!*******************************************!*\
  !*** external "crudmongodb/dist/product" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crudmongodb/dist/product");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXQtbWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY29ycy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3J1ZG1vbmdvZGIvZGlzdC9kYXRhcHJvZHVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNydWRtb25nb2RiL2Rpc3QvcHJvZHVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiaW5pdE1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJFcnJvciIsImNvcnMiLCJDb3JzIiwibWV0aG9kcyIsIm1ldGhvZCIsImxpc3QiLCJEYXRhUHJvZHVjdCIsImdldEluc3RhbmNlIiwiZ2V0UHJvZHVjdHMiLCJzZW5kIiwiZGF0YSIsImJvZHkiLCJkdHByb2R1Y3QiLCJEVFByb2R1Y3QiLCJuYW1lIiwicHJpY2UiLCJhZGRwcm9kdWN0IiwiYWRkUHJvZHVjdCIsInN0YXR1cyIsImVycm9yIiwibWVzc2FnZSIsInVwZHByb2QiLCJ1cGRhdGVQcm9kdWN0IiwiZGVsZXRlcCIsImRlbGV0ZVByb2R1Y3QiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7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QzNERCxpQzs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9hcGkvcHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3Byb2R1Y3QuanNcIik7XG4iLCIvLyBIZWxwZXIgbWV0aG9kIHRvIHdhaXQgZm9yIGEgbWlkZGxld2FyZSB0byBleGVjdXRlIGJlZm9yZSBjb250aW51aW5nXG4vLyBBbmQgdG8gdGhyb3cgYW4gZXJyb3Igd2hlbiBhbiBlcnJvciBoYXBwZW5zIGluIGEgbWlkZGxld2FyZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdE1pZGRsZXdhcmUobWlkZGxld2FyZSkge1xuICByZXR1cm4gKHJlcSwgcmVzKSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG1pZGRsZXdhcmUocmVxLCByZXMsIChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KVxuICAgICAgfSlcbiAgICB9KVxufVxuIiwiaW1wb3J0IENvcnMgZnJvbSAnY29ycydcbmltcG9ydCBpbml0TWlkZGxld2FyZSBmcm9tICcuLi8uLi9saWIvaW5pdC1taWRkbGV3YXJlJ1xuXG5cblxuLy8gSW5pdGlhbGl6ZSB0aGUgY29ycyBtaWRkbGV3YXJlXG5jb25zdCBjb3JzID0gaW5pdE1pZGRsZXdhcmUoXG4gIC8vIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoZSBhdmFpbGFibGUgb3B0aW9ucyBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2NvcnMjY29uZmlndXJhdGlvbi1vcHRpb25zXG4gIENvcnMoe1xuICAgIC8vIE9ubHkgYWxsb3cgcmVxdWVzdHMgd2l0aCBHRVQsIFBPU1QsUFVULERFTEVURSBhbmQgT1BUSU9OU1xuICAgIG1ldGhvZHM6IFsnR0VUJywgJ1BPU1QnLCAnUFVUJywnREVMRVRFJywnT1BUSU9OUyddLFxuICB9KVxuKVxuZXhwb3J0IGRlZmF1bHQgY29yc1xuXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNvcnMgZnJvbSBcIi4vY29yc1wiO1xyXG5pbXBvcnQge0RhdGFQcm9kdWN0fSBmcm9tIFwiY3J1ZG1vbmdvZGIvZGlzdC9kYXRhcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBEVFByb2R1Y3QgfSBmcm9tIFwiY3J1ZG1vbmdvZGIvZGlzdC9wcm9kdWN0XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gICAgaWYocmVxLm1ldGhvZD09PVwiR0VUXCIpXHJcbiAgICB7XHJcbiAgICAgYXdhaXQgY29ycyhyZXEsIHJlcylcclxuICAgICAgY29uc3QgbGlzdD1hd2FpdCBEYXRhUHJvZHVjdC5nZXRJbnN0YW5jZSgpLmdldFByb2R1Y3RzKCk7XHJcbiAgICAgIHJldHVybiByZXMuc2VuZChsaXN0KTtcclxuICAgIH1cclxuICAgIGlmKHJlcS5tZXRob2Q9PT1cIlBPU1RcIilcclxuICAgIHtcclxuICAgICAgYXdhaXQgY29ycyhyZXEsIHJlcylcclxuICAgICAgdHJ5XHJcbiAgICAgIHtcclxuICAgICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gICAgICB2YXIgZHRwcm9kdWN0PW5ldyBEVFByb2R1Y3QoMCwgZGF0YS5uYW1lLGRhdGEucHJpY2UpO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgYWRkcHJvZHVjdD1hd2FpdCBEYXRhUHJvZHVjdC5nZXRJbnN0YW5jZSgpLmFkZFByb2R1Y3QoZHRwcm9kdWN0KTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKFwiU3VjY2Vzc1wiKTsgICBcclxuICAgICAgfVxyXG4gICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoXCJDb3VsZCBub3QgYWRkIFByb2R1Y3Q6IFwiK2Vycm9yLm1lc3NhZ2UpOyAgICBcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIGlmKHJlcS5tZXRob2Q9PT1cIlBVVFwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICBhd2FpdCBjb3JzKHJlcSwgcmVzKVxyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcbiAgICAgICAgdmFyIGR0cHJvZHVjdD1uZXcgRFRQcm9kdWN0KDAsIGRhdGEubmFtZSxkYXRhLnByaWNlKTtcclxuICAgICAgICBjb25zdCB1cGRwcm9kPWF3YWl0IERhdGFQcm9kdWN0LmdldEluc3RhbmNlKCkudXBkYXRlUHJvZHVjdChkdHByb2R1Y3QpO1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChcIlN1Y2Nlc3NcIik7ICAgXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiQ291bGQgbm90IFVQREFURSBQcm9kdWN0OiBcIitlcnJvci5tZXNzYWdlKTsgICAgXHJcbiAgICAgIFxyXG4gICAgfSAgIFxyXG59XHJcbmlmKHJlcS5tZXRob2Q9PT1cIkRFTEVURVwiKVxyXG57XHJcbiAgICBhd2FpdCBjb3JzKHJlcSwgcmVzKTtcclxuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICAgIHRyeVxyXG4gICAge1xyXG5cclxuICAgIHZhciBkdHByb2R1Y3Q9bmV3IERUUHJvZHVjdCgwLCBkYXRhLm5hbWUsMCk7XHJcbiAgICBjb25zdCBkZWxldGVwPWF3YWl0IERhdGFQcm9kdWN0LmdldEluc3RhbmNlKCkuZGVsZXRlUHJvZHVjdChkdHByb2R1Y3QpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKFwiU3VjY2Vzc1wiKTsgICBcclxufVxyXG5jYXRjaCAoZXJyb3IpIHtcclxuICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoXCJDb3VsZCBub3QgREVMRVRFIFByb2R1Y3Q6IFwiK2Vycm9yLm1lc3NhZ2UpOyAgICBcclxuICBcclxufSAgIFxyXG59XHJcblxyXG59XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNydWRtb25nb2RiL2Rpc3QvZGF0YXByb2R1Y3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J1ZG1vbmdvZGIvZGlzdC9wcm9kdWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=