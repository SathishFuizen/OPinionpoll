define("c07208f0-ea3b-4c1a-9965-ac1b825211a6_1.12.1", ["tslib","@microsoft/sp-core-library","@microsoft/sp-diagnostics"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_ut3N__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"sp-http": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({"aadTokenProvider":"aadTokenProvider","ms-client-shared":"ms-client-shared","vendors~sp-http-msgraphclient":"vendors~sp-http-msgraphclient","spoImplicit":"spoImplicit","vendors~adalauthcontext":"vendors~adalauthcontext","adalauthcontext":"adalauthcontext","vendors~msalImplicit":"vendors~msalImplicit","msalImplicit":"msalImplicit"}[chunkId]||chunkId) + "_" + "none" + ".js"
/******/ 	}
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonpc07208f0_ea3b_4c1a_9965_ac1b825211a6_1_12_1"] = window["webpackJsonpc07208f0_ea3b_4c1a_9965_ac1b825211a6_1_12_1"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Set the webpack public path
/******/ 	(function () {
/******/ 	  var scripts = document.getElementsByTagName('script');
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : /sp-http_default\.js/i;
/******/ 	  var publicPath;
/******/
/******/ 	  if (scripts && scripts.length) {
/******/ 	    for (var i = 0; i < scripts.length; i++) {
/******/ 	      if (!scripts[i]) continue;
/******/ 	      var path = scripts[i].getAttribute('src');
/******/ 	      if (path && path.match(regex)) {
/******/ 	        publicPath = path.substring(0, path.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/
/******/ 	  if (!publicPath) {
/******/ 	    for (var global in window.__setWebpackPublicPathLoaderSrcRegistry__) {
/******/ 	      if (global && global.match(regex)) {
/******/ 	        publicPath = global.substring(0, global.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/ 	  __webpack_require__.p = publicPath;
/******/ 	})();
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "mwqp");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0s3q":
/*!************************************************!*\
  !*** ./lib/spHttpClient/SPHttpClientHelper.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphHttpClient_GraphHttpClientContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphHttpClient/GraphHttpClientContext */ "iDX0");
/* harmony import */ var _httpClient_HttpClientHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../httpClient/HttpClientHelper */ "8Y7G");
/* harmony import */ var _ODataVersion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ODataVersion */ "GSEB");
/* harmony import */ var _SPHttpClientResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SPHttpClientResponse */ "mCft");
/* harmony import */ var _oauthTokenProvider_AadTokenProviders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../oauthTokenProvider/AadTokenProviders */ "KkUw");
/* harmony import */ var _SPConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SPConstants */ "2bYP");







/**
 * Private - this class contains some internal code shared between SPHttpClient
 * and SPHttpClientBatch.
 */
var SPHttpClientHelper = /** @class */ (function () {
    function SPHttpClientHelper() {
    }
    SPHttpClientHelper.cloneHeaders = function (options) {
        var clonedHeaders = new Headers();
        if (options.headers) {
            return new Headers(options.headers || {});
        }
        return clonedHeaders;
    };
    SPHttpClientHelper.applyDefaultHeaders = function (headers, configuration, options, oDataVersion) {
        // Add some default headers that people should specify for any REST query,
        // assuming it's not missing
        if (configuration.jsonRequest) {
            if (options.method && options.method.toUpperCase() !== 'GET') {
                if (!headers.has('Content-Type')) {
                    // Assume our POST data is in JSON format unless otherwise specified.
                    // Also explicitly specify utf-8 (the default).
                    if (oDataVersion === _ODataVersion__WEBPACK_IMPORTED_MODULE_3__["default"].v3) {
                        headers.append('Content-Type', 'application/json;odata=verbose;charset=utf-8');
                    }
                    else if (oDataVersion === _ODataVersion__WEBPACK_IMPORTED_MODULE_3__["default"].v4) {
                        headers.append('Content-Type', 'application/json;charset=utf-8');
                    }
                    else {
                        // oDataVersion can also be undefined, if the version is unknown
                        throw new Error('ISPHttpClientConfiguration.jsonRequest is enabled, which requires' +
                            ' the "OData-Version" header to be 3.0 or 4.0');
                    }
                }
            }
        }
        if (configuration.jsonResponse) {
            if (!headers.has('Accept')) {
                if (oDataVersion === _ODataVersion__WEBPACK_IMPORTED_MODULE_3__["default"].v3) {
                    headers.append('Accept', 'application/json');
                }
                else if (oDataVersion === _ODataVersion__WEBPACK_IMPORTED_MODULE_3__["default"].v4) {
                    // Request for the OData response to be 'minimal' (the default).  The guidance:
                    // "If a client prefers a very small wire size and is intelligent enough to
                    // compute data using metadata expressions, the Accept header should include
                    // odata.metadata=minimal. If compute is more expensive than wire size or the
                    // client is incapable of computing control information, odata.metadata=full
                    // directs the service to inline the control information that normally would be
                    // computed from metadata expressions in the payload. odata.metadata=none is an
                    // option for clients that have out-of-band knowledge or don't require control
                    // information."
                    // http://docs.oasis-open.org/odata/odata-json-format/v4.0/os/odata-json-format-v4.0-os.html
                    headers.append('Accept', 'application/json;odata.metadata=minimal');
                }
                else {
                    // oDataVersion can also be undefined, if the version is unknown
                    throw new Error('ISPHttpClientConfiguration.jsonResponse is enabled, which requires' +
                        ' the "OData-Version" header to be 3.0 or 4.0');
                }
            }
        }
    };
    /**
     * Use a heuristic to infer the base URL for authentication.
     *
     * @remarks
     * Attempts to infer the SPWeb URL associated with the provided REST URL, by looking
     * for common SharePoint path components such as "_api", "_layouts", or "_vit_bin".
     * This is necessary for operations such as the X-RequestDigest
     * and ODATA batching, which require POSTing to a separate REST endpoint
     * in order to complete a request.
     *
     * For example, if the requestUrl is "/sites/site/web/_api/service",
     * the returned URL would be "/sites/site/web".  Or if the requestUrl
     * is "http://example.com/_layouts/service", the returned URL would be
     * "http://example.com".
     *
     * If the URL cannot be determined, an exception is thrown.
     *
     * @param requestUrl - The URL for a SharePoint REST service
     * @returns the inferred SPWeb URL
     */
    SPHttpClientHelper.getWebUrlFromRequestUrl = function (requestUrl) {
        // First we need to guess the webUrl by looking for a reserved
        // segment such as "_api":
        var segmentIndex = -1;
        var upperCaseUrl = requestUrl.toUpperCase();
        for (var _i = 0, _a = _SPConstants__WEBPACK_IMPORTED_MODULE_6__["default"].RESERVED_URL_SEGMENTS; _i < _a.length; _i++) {
            var reservedUrlSegment = _a[_i];
            segmentIndex = upperCaseUrl.indexOf(reservedUrlSegment);
            if (segmentIndex >= 0) {
                return requestUrl.substr(0, segmentIndex);
            }
        }
        throw new Error('Unable to determine web URL');
    };
    /**
     * All network requests are routed through this method, which calls the
     * underlying IFetchProvider.fetch().
     */
    SPHttpClientHelper.fetchCore = function (url, configuration, options, serviceScope, digestCache, fetchProvider, logSourceId) {
        return Promise.resolve().then(function () {
            if (!options) {
                options = {};
            }
            var modifiedOptions = Object.assign({}, options);
            if (configuration.defaultSameOriginCredentials) {
                // Set the default credentials
                if (!options.credentials) {
                    modifiedOptions.credentials = 'same-origin';
                }
            }
            // NOTE: RequestInit.cache is apparently currently unimplemented in Chrome
            // and our polyfill, so we don't specify it here.
            var headers = SPHttpClientHelper.cloneHeaders(options);
            modifiedOptions.headers = headers;
            if (configuration.defaultODataVersion) {
                if (!headers.has('OData-Version')) {
                    headers.append('OData-Version', configuration.defaultODataVersion.toString());
                }
            }
            // If the header is omitted, the SharePoint server defaults to version 3.0 in most cases
            // (but maybe not all cases?).  Rather than trying to guess, we will simply leave
            // oDataVersion as undefined, and report an error e.g. if ISPHttpClientConfiguration.jsonRequest
            // needs to know the OData version.
            var oDataVersion = _ODataVersion__WEBPACK_IMPORTED_MODULE_3__["default"].tryParseFromHeaders(headers);
            SPHttpClientHelper.applyDefaultHeaders(headers, configuration, options, oDataVersion);
            if (configuration.requestDigest) {
                // NOTE: If options.method is missing, the default is GET
                if (options.method) {
                    var method = options.method.toUpperCase();
                    if (method !== 'GET' && method !== 'HEAD' && method !== 'OPTIONS') {
                        // For writes, SharePoint requires an "X-RequestDigest" header.
                        if (!headers.has('X-RequestDigest')) {
                            var webUrl = options.webUrl || SPHttpClientHelper.getWebUrlFromRequestUrl(url);
                            // Now fetch the digest
                            var promise = digestCache.fetchDigest(webUrl).then(function (digest) {
                                headers.append('X-RequestDigest', digest);
                                return SPHttpClientHelper._fetchWithInstrumentation(configuration, new Request(url, modifiedOptions), serviceScope, fetchProvider, logSourceId);
                            });
                            return SPHttpClientHelper.handleAuthenticationErrors(promise, webUrl, digestCache).then(function (response) {
                                return new _SPHttpClientResponse__WEBPACK_IMPORTED_MODULE_4__["default"](response);
                            });
                        }
                    }
                }
            }
            // Otherwise, don't fetch a digest, don't handle authentication errors
            return SPHttpClientHelper._fetchWithInstrumentation(configuration, new Request(url, modifiedOptions), serviceScope, fetchProvider, logSourceId).then(function (response) {
                return new _SPHttpClientResponse__WEBPACK_IMPORTED_MODULE_4__["default"](response);
            });
        });
    };
    /**
     * For both SPHttpClient and SPHttpClientBatch, we fetch a digest and then use it to
     * to make a REST call.  If the REST fails in a way that the digest is invalid,
     * we need to discard the bad digest.  This function is the common implementation
     * of that logic, in case we need to add special cases in the future.
     *
     * @param promise       - the promise returned by IFetchProvider.fetch()
     * @param webUrl        - the cache key to clear
     * @param digestCache   - the cache
     * @returns             - the promise after this logic is applied
     */
    SPHttpClientHelper.handleAuthenticationErrors = function (promise, webUrl, digestCache) {
        return promise.then(function (response) {
            // If the response is 403, this could be because our digest was invalidated
            // before its natural expiration time.  In this case, we should clear the
            // cache so that next time we will fetch a new digest.
            if (response.status === 403) {
                digestCache.clearDigest(webUrl);
            }
            return response;
        });
    };
    SPHttpClientHelper.overrideHttpMethod = function (options, httpRequestMethod) {
        return _httpClient_HttpClientHelper__WEBPACK_IMPORTED_MODULE_2__["default"].overrideHttpMethod(options, httpRequestMethod);
    };
    SPHttpClientHelper._fetchWithInstrumentation = function (configuration, request, serviceScope, fetchProvider, logSourceId) {
        return SPHttpClientHelper._handleFluidEnvironment(request, serviceScope).then(function (modifiedRequest) {
            return _httpClient_HttpClientHelper__WEBPACK_IMPORTED_MODULE_2__["default"].fetchCore(configuration, modifiedRequest, serviceScope, fetchProvider, _SPConstants__WEBPACK_IMPORTED_MODULE_6__["default"].SP_HTTP_CLIENT_CLASS_NAME_FETCH);
        });
    };
    SPHttpClientHelper._isFluid = function () {
        return _SPConstants__WEBPACK_IMPORTED_MODULE_6__["default"].FLUID_DOMAINS.indexOf(window.location.host) > -1;
    };
    SPHttpClientHelper._handleFluidEnvironment = function (request, serviceScope) {
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(_SPConstants__WEBPACK_IMPORTED_MODULE_6__["default"].SP_TOKEN_FOR_FLUID_ID) && SPHttpClientHelper._isFluid()) {
            var graphContext = serviceScope.consume(_graphHttpClient_GraphHttpClientContext__WEBPACK_IMPORTED_MODULE_1__["default"].serviceKey);
            return _oauthTokenProvider_AadTokenProviders__WEBPACK_IMPORTED_MODULE_5__["default"].configurable
                ._getTokenInternal(new URL(graphContext.getWebAbsoluteUrl()).origin, _oauthTokenProvider_AadTokenProviders__WEBPACK_IMPORTED_MODULE_5__["default"].preAuthorizedConfiguration)
                .then(function (token) {
                request.headers.set('Authorization', 'Bearer ' + token);
                return request;
            });
        }
        return Promise.resolve(request);
    };
    return SPHttpClientHelper;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPHttpClientHelper);


/***/ }),

/***/ "0v/C":
/*!**********************************************!*\
  !*** ./lib/httpClient/HttpClientResponse.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The Response subclass returned by methods such as HttpClient.fetch().
 *
 * @remarks
 * This is a placeholder.  In the future, additional HttpClient-specific functionality
 * may be added to this class.
 *
 * @privateRemarks
 * This class exposes the same members as our typings for the browser's native
 * Response and Body classes, which is why we can say that it "implements" them.
 * It cannot actually inherit from Response because that class does not have a copy
 * constructor (because it would probably be inefficient to copy the response stream).
 *
 * @public
 */
var HttpClientResponse = /** @class */ (function () {
    /**
     * @internal
     */
    function HttpClientResponse(response) {
        this.nativeResponse = response;
    }
    Object.defineProperty(HttpClientResponse.prototype, "body", {
        // Body members
        /**
         * This property is marked as alpha because it is not yet implemented by the `@microsoft/sp-polyfills` package.
         *
         * @alpha
         */
        get: function () {
            return this.nativeResponse.body;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpClientResponse.prototype, "bodyUsed", {
        /**
         * See documentation for the browser's
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/Body | Body} API
         */
        get: function () {
            return this.nativeResponse.bodyUsed;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * See documentation for the browser's
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/Body | Body} API
     */
    HttpClientResponse.prototype.arrayBuffer = function () {
        return this.nativeResponse.arrayBuffer();
    };
    /**
     * See documentation for the browser's
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/Body | Body} API
     */
    HttpClientResponse.prototype.blob = function () {
        return this.nativeResponse.blob();
    };
    /**
     * See documentation for the browser's
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/Body | Body} API
     */
    HttpClientResponse.prototype.formData = function () {
        // tslint:disable-next-line:no-any
        return this.nativeResponse.formData;
    };
    /**
     * See documentation for the browser's
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/Body | Body} API
     */
    HttpClientResponse.prototype.json = function () {
        return this.nativeResponse.json();
    };
    /**
     * See documentation for the browser's
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/Body | Body} API
     */
    HttpClientResponse.prototype.text = function () {
        return this.nativeResponse.text();
    };
    Object.defineProperty(HttpClientResponse.prototype, "type", {
        // Response members
        /**
         * See documentation for the browser's
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/Response | Response} API
         */
        get: function () {
            return this.nativeResponse.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpClientResponse.prototype, "redirected", {
        /**
         * This property is marked as alpha because it is not yet implemented by the `@microsoft/sp-polyfills` package.
         *
         * @alpha
         */
        get: function () {
            return this.nativeResponse.redirected;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpClientResponse.prototype, "url", {
        /**
         * See documentation for the browser's
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/Response | Response} API
         */
        get: function () {
            return this.nativeResponse.url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpClientResponse.prototype, "status", {
        /**
         * See documentation for the browser's
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/Response | Response} API
         */
        get: function () {
            return this.nativeResponse.status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpClientResponse.prototype, "ok", {
        /**
         * See documentation for the browser's
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/Response | Response} API
         */
        get: function () {
            return this.nativeResponse.ok;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpClientResponse.prototype, "statusText", {
        /**
         * See documentation for the browser's
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/Response | Response} API
         */
        get: function () {
            return this.nativeResponse.statusText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpClientResponse.prototype, "trailer", {
        /**
         * See documentation for the browser's
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/Response | Response} API
         *
         * This property is marked as alpha because it is not yet implemented by the `@microsoft/sp-polyfills` package.
         *
         * @alpha
         */
        get: function () {
            return this.nativeResponse.trailer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpClientResponse.prototype, "headers", {
        /**
         * See documentation for the browser's
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/Response | Response} API
         */
        get: function () {
            return this.nativeResponse.headers;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @virtual
     */
    HttpClientResponse.prototype.clone = function () {
        return new HttpClientResponse(this.nativeResponse.clone());
    };
    return HttpClientResponse;
}());
/* harmony default export */ __webpack_exports__["default"] = (HttpClientResponse);


/***/ }),

/***/ "17wl":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17wl__;

/***/ }),

/***/ "21FS":
/*!******************************************************!*\
  !*** ./lib/oauthTokenProvider/OAuthTokenProvider.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OAuthUtilityContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OAuthUtilityContext */ "czIf");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);


/**
 * This class allows one to obtain OAuth tokens
 *
 * OAuth tokens are used to authenticate the user from the sharepoint page
 * to other services such as PowerBI, Sway, Exchange, Yammer, etc.
 *
 * @alpha
 */
var OAuthTokenProvider = /** @class */ (function () {
    function OAuthTokenProvider(serviceScope) {
        this._serviceScope = serviceScope;
    }
    // tslint:disable-next-line:no-any
    OAuthTokenProvider.prototype.getOAuthToken = function (resource, webUrl, tokenType) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(resource, 'resource');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(resource, 'resource');
        return this._getTokenUtility().then(function (tokenUtility) {
            return tokenUtility.getOAuthToken(resource, webUrl, tokenType);
        });
    };
    /**
     * Clears the token from a given resource from the internal cache. If there is no token
     * cached for the resource the method does nothing.
     *
     * @param resource - resource for which the token should be cleared from the cache
     */
    OAuthTokenProvider.prototype.clearCachedToken = function (resource) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(resource, 'resource');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(resource, 'resource');
        this._getTokenUtility()
            .then(function (tokenUtility) { return tokenUtility.clearCachedToken(resource); })
            .catch(function (e) {
            throw e;
        });
    };
    /**
     * Returns the token utility singleton
     */
    OAuthTokenProvider.prototype._getTokenUtility = function () {
        var _this = this;
        if (!this._tokenUtility) {
            this._tokenUtility = __webpack_require__.e(/*! import() | ms-client-shared */ "ms-client-shared").then(__webpack_require__.t.bind(null, /*! @ms/sp-client-shared */ "jHvI", 7)).then(function (msClientSharedModule) {
                return new msClientSharedModule.OAuthUtility(new _OAuthUtilityContext__WEBPACK_IMPORTED_MODULE_0__["default"](_this._serviceScope));
            });
        }
        return this._tokenUtility;
    };
    /**
     * The service key for OAuthTokenProvider.
     */
    OAuthTokenProvider.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["ServiceKey"].create('sp-client-shared:OAuthTokenProvider', OAuthTokenProvider);
    return OAuthTokenProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (OAuthTokenProvider);


/***/ }),

/***/ "2bYP":
/*!*****************************************!*\
  !*** ./lib/spHttpClient/SPConstants.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Internal constants used for the SPHttpClient
 * @internal
 */
var SPConstants = /** @class */ (function () {
    function SPConstants() {
    }
    /**
     * Name of the SPHttpClient class.
     */
    SPConstants.SP_HTTP_CLIENT_CLASS_NAME = 'SPHttpClient';
    SPConstants.SP_HTTP_CLIENT_CLASS_NAME_FETCH = 'SPHttpClient.Fetch';
    /**
     * Flight for adding SharePoint Tokens to the SPHttpClient in Fluid.
     */
    SPConstants.SP_TOKEN_FOR_FLUID_ID = 1716;
    /**
     * Set of domains that Fluid can run in.
     */
    SPConstants.FLUID_DOMAINS = [
        'dev.fluid.office.com',
        'dev.fluidpreview.office.net',
        'fluidpreview.office.net'
    ];
    /**
     * Used to infer the SPWeb's url. See SPHttpClientHelper.getWebUrlFromRequestUrl for more details
     */
    SPConstants.RESERVED_URL_SEGMENTS = ['/_API/', '/_LAYOUTS/', '/_VTI_BIN/'];
    return SPConstants;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPConstants);


/***/ }),

/***/ "3H3x":
/*!***********************************************************!*\
  !*** ./lib/oauthTokenProvider/AadTokenProviderFactory.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AadTokenProviders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AadTokenProviders */ "KkUw");


/**
 * Returns a preinitialized version of the AadTokenProviderFactory.
 * @public
 */
var AadTokenProviderFactory = /** @class */ (function () {
    function AadTokenProviderFactory() {
    }
    /**
     * Returns an instance of the AadTokenProvider that communicates with the current tenant's configurable
     * Service Principal.
     */
    AadTokenProviderFactory.prototype.getTokenProvider = function () {
        return Promise.resolve(_AadTokenProviders__WEBPACK_IMPORTED_MODULE_1__["default"].configurable);
    };
    /**
     * The service key for AadTokenProviderFactory.
     */
    AadTokenProviderFactory.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceKey"].create('sp-http:AadTokenProviderFactory', AadTokenProviderFactory);
    return AadTokenProviderFactory;
}());
/* harmony default export */ __webpack_exports__["default"] = (AadTokenProviderFactory);


/***/ }),

/***/ "5emJ":
/*!***********************************************!*\
  !*** ./lib/spHttpClient/SPHttpClientBatch.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BatchedRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BatchedRequest */ "hWUW");
/* harmony import */ var _SPHttpClientResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SPHttpClientResponse */ "mCft");
/* harmony import */ var _httpClient_FetchProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../httpClient/FetchProvider */ "UE6e");
/* harmony import */ var _DigestCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DigestCache */ "Qacf");
/* harmony import */ var _SPHttpClientHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SPHttpClientHelper */ "0s3q");
/* harmony import */ var _ODataVersion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ODataVersion */ "GSEB");
/* harmony import */ var _SPHttpClientBatchConfiguration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SPHttpClientBatchConfiguration */ "9UXQ");
/**
 * @copyright (c) Microsoft Corporation. All rights reserved.
 */








/**
 * The SPHttpClientBatch class accumulates a number of REST service calls and
 * transmits them as a single ODATA batch.  This protocol is documented here:
 * http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html
 *
 * The usage is to call SPHttpClientBatch.fetch() to queue each individual request,
 * and then call SPHttpClientBatch.execute() to execute the batch operation.
 * The execute() method returns a promise that resolves when the real REST
 * call has completed.  Each call to fetch() also returns a promise that will
 * resolve with an SPHttpClientResponse object for that particular request.
 *
 * @privateRemarks
 * The type signature of SPHttpClientBatch class suggests that it should inherit from
 * the HttpClient base class.  However, the operational semantics are different
 * (e.g. nothing happens until execute() is called; further operations are
 * prohibited afterwards; fetch() calls cannot depend on each other).  In the
 * future we might introduce a base class for batches, but it would be separate
 * from the HttpClient hierarchy.  By contrast, the ISPHttpClientBatchOptions
 * does naturally inherit from IHttpClientOptions.
 *
 * @beta
 */
var SPHttpClientBatch = /** @class */ (function () {
    /**
     * Generally third parties should not use this constructor.
     * The recommended way to start a batch is by calling SPHttpClient.beginBatch().
     * @internal
     */
    function SPHttpClientBatch(serviceScope, batchCreationOptions) {
        var _this = this;
        this._batchedRequests = [];
        serviceScope.whenFinished(function () {
            _this._fetchProvider = serviceScope.consume(_httpClient_FetchProvider__WEBPACK_IMPORTED_MODULE_3__["fetchProviderServiceKey"]);
            _this._randomNumberGenerator = serviceScope.consume(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["RandomNumberGenerator"].serviceKey);
            _this._digestCache = serviceScope.consume(_DigestCache__WEBPACK_IMPORTED_MODULE_4__["default"].serviceKey);
        });
    }
    /**
     * Queues a new request, and returns a promise that can be used to access
     * the server response (after execute() has completed).
     *
     * @remarks
     * The parameters for this function are basically the same as the WHATWG API standard
     * documented here:
     *
     * {@link https://fetch.spec.whatwg.org/ }
     *
     * However, be aware that certain REST headers are ignored or not allowed inside
     * a batch.  See the ODATA documentation for details.
     *
     * When execute() is called, it will POST to a URL such as
     * "http://example.com/sites/sample/_api/$batch".  Typically SPHttpClientBatch can successfully
     * guess the appropriate SPWeb URL by looking for a reserved URL segment such as "_api"
     * in the first URL passed to fetch().  If not, use ISPHttpClientBatchCreationOptions.webUrl to specify it
     * explicitly.
     *
     * @param url - the URL to fetch
     * @param configuration - determines the default behavior of this request; normally this should
     *   be the latest version number from SPHttpClientBatchConfigurations
     * @param options - additional options that affect the request
     *
     * @returns A promise with behavior similar to WHATWG fetch().  This promise will resolve normally
     * (with {@link HttpClientResponse.ok} being false) for error status codes such as HTTP 404
     * or 500.  The promise will only reject for network failures or other errors that prevent communication
     * with the server.
     */
    SPHttpClientBatch.prototype.fetch = function (url, configuration, options) {
        if (!options) {
            options = {};
        }
        // Apply most of the same default headers as SPHttpClient
        var modifiedOptions = Object.assign({}, options);
        modifiedOptions.headers = _SPHttpClientHelper__WEBPACK_IMPORTED_MODULE_5__["default"].cloneHeaders(options);
        _SPHttpClientHelper__WEBPACK_IMPORTED_MODULE_5__["default"].applyDefaultHeaders(modifiedOptions.headers, configuration, options, _ODataVersion__WEBPACK_IMPORTED_MODULE_6__["default"].v4);
        var request = new Request(url, modifiedOptions);
        var requestUrl = request.url;
        if (!this._webUrl) {
            // If the webUrl wasn't provided to the constructor, then we infer it from
            // the first request.
            this._webUrl = _SPHttpClientHelper__WEBPACK_IMPORTED_MODULE_5__["default"].getWebUrlFromRequestUrl(requestUrl);
        }
        var batchedRequest = new _BatchedRequest__WEBPACK_IMPORTED_MODULE_1__["default"](request);
        this._batchedRequests.push(batchedRequest);
        return batchedRequest.promise;
    };
    /**
     * Calls fetch(), but sets the method to 'GET'.
     * @param url - the URL to fetch
     * @param configuration - determines the default behavior of this request; normally this should
     *   be the latest version number from SPHttpClientBatchConfigurations
     * @param options - additional options that affect the request
     * @returns A promise with behavior similar to WHATWG fetch().  This promise will resolve normally
     * (with {@link HttpClientResponse.ok} being false) for error status codes such as HTTP 404
     * or 500.  The promise will only reject for network failures or other errors that prevent communication
     * with the server.
     */
    SPHttpClientBatch.prototype.get = function (url, configuration, options) {
        var modifiedOptions = Object.assign({}, options);
        modifiedOptions.method = 'GET';
        return this.fetch(url, configuration, modifiedOptions);
    };
    /**
     * Calls fetch(), but sets the method to 'POST'.
     * @param url - the URL to fetch
     * @param configuration - determines the default behavior of this request; normally this should
     *   be the latest version number from SPHttpClientBatchConfigurations
     * @param options - additional options that affect the request
     * @returns A promise with behavior similar to WHATWG fetch().  This promise will resolve normally
     * (with {@link HttpClientResponse.ok} being false) for error status codes such as HTTP 404
     * or 500.  The promise will only reject for network failures or other errors that prevent communication
     * with the server.
     */
    SPHttpClientBatch.prototype.post = function (url, configuration, options) {
        var modifiedOptions = Object.assign({}, options);
        modifiedOptions.method = 'POST';
        return this.fetch(url, configuration, modifiedOptions);
    };
    /**
     * Executes the batched queries that were queued using SPHttpClientBatch.fetch().
     */
    SPHttpClientBatch.prototype.execute = function () {
        var _this = this;
        this._correlationId = undefined;
        this._batchResponseBody = undefined;
        var batchBody = '\n';
        var batchGuid = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].newGuid(this._randomNumberGenerator);
        // In the loop below, we will build up a chain of promises that append
        // each request to the batch body, and then the "return" statement will
        // add the final processing to the chain.
        var chain = Promise.resolve();
        this._batchedRequests.forEach(function (batchedRequest) {
            chain = chain
                .then(function () {
                return batchedRequest.request.text();
            })
                .then(function (requestText) {
                var request = batchedRequest.request;
                batchBody += "--batch_" + batchGuid.toString() + "\n";
                batchBody += "Content-type: application/http\n" + "Content-Transfer-Encoding: binary\n\n";
                // Example:
                // "POST https://example.com/_api/web HTTP/1.1"
                batchBody += request.method + " " + request.url + " HTTP/1.1\n";
                request.headers.forEach(function (value, name) {
                    batchBody += name + ": " + value + "\n";
                });
                batchBody += '\n';
                batchBody += requestText;
                batchBody += '\n\n';
            });
        });
        return chain
            .then(function () {
            // Close the batch
            // This is a workaround to add an extra line to prevent batch.post from failure.
            // @see https://github.com/SharePoint/sp-dev-docs/issues/599
            batchBody += "--batch_" + batchGuid + "--\n\n";
            return _this._digestCache.fetchDigest(_this._webUrl);
        })
            .then(function (digest) {
            // Start the $batch request
            var headers = new Headers();
            headers.append('Accept', 'application/json');
            headers.append('OData-Version', '4.0');
            headers.append('Content-Type', "multipart/mixed; boundary=batch_" + batchGuid);
            headers.append('Content-Length', batchBody.length.toString());
            headers.append('X-RequestDigest', digest);
            var request = new Request(_this._webUrl + '/_api/$batch', {
                method: 'POST',
                headers: headers,
                body: batchBody,
                credentials: 'same-origin',
                cache: 'no-cache'
            });
            var promise = _this._fetchProvider.fetch(request);
            return _SPHttpClientHelper__WEBPACK_IMPORTED_MODULE_5__["default"].handleAuthenticationErrors(promise, _this._webUrl, _this._digestCache);
        })
            .then(function (response) {
            _this._correlationId = response.headers.get('sprequestguid') || undefined;
            if (!response.ok) {
                throw new Error('SPHttpClientBatch: The batch request failed: ' + response.statusText);
            }
            return response.text();
        })
            .then(function (text) {
            _this._batchResponseBody = text;
            var responses = _this._parseResponsesFromBody(text);
            if (responses.length !== _this._batchedRequests.length) {
                throw new Error("SPHttpClientBatch: Expecting " + _this._batchedRequests.length + " responses");
            }
            for (var i = 0; i < _this._batchedRequests.length; ++i) {
                var request = _this._batchedRequests[i];
                request.resolvePromise(new _SPHttpClientResponse__WEBPACK_IMPORTED_MODULE_2__["default"](responses[i]));
            }
            return _this;
        })
            .catch(function (executeError) {
            // If execute() itself rejects, then we still need to settle the individual fetch() promises.
            // Even if the "_api/$batch" promise resolved with a Response object, we cannot use that to
            // resolve the fetch() promises, since it was a separate conversation with possibly incompatible
            // encodings.  We don't have a proper status code for the fetch() operations.
            for (var _i = 0, _a = _this._batchedRequests; _i < _a.length; _i++) {
                var request = _a[_i];
                request.rejectPromiseIfNotResolved(executeError);
            }
            // Pass the batch error along to the caller's catch block
            return Promise.reject(executeError);
        });
    };
    /**
     * Returns the correlation id of the most recent batch request if execute() was able to get a response
     * from SharePoint.
     * @internal
     */
    SPHttpClientBatch.prototype.correlationId = function () {
        return this._correlationId;
    };
    /**
     * Returns the original batch response body if execute() was able to get a response and the respones
     * status is success.
     * @internal
     */
    SPHttpClientBatch.prototype.batchResponseBody = function () {
        return this._batchResponseBody;
    };
    SPHttpClientBatch.prototype._parseResponsesFromBody = function (text) {
        var responses = [];
        var header = '--batchresponse_';
        // Ex. "HTTP/1.1 500 Internal Server Error"
        var statusRegExp = new RegExp('^HTTP/[0-9.]+ +([0-9]+) +(.*)', 'i');
        var lines = text.split('\n');
        var parserState = 'batch';
        var batchStatus;
        var batchStatusText;
        for (var i = 0; i < lines.length; ++i) {
            var line = lines[i];
            switch (parserState) {
                case 'batch':
                    if (line.substr(0, header.length) === header) {
                        parserState = 'batchHeaders';
                    }
                    else {
                        if (line.trim() !== '') {
                            throw new Error('SPHttpClientBatch: Invalid response, line ' + i);
                        }
                    }
                    break;
                case 'batchHeaders':
                    if (line.trim() === '') {
                        parserState = 'status';
                    }
                    break;
                case 'status':
                    // Ex. "HTTP/1.1 500 Internal Server Error"
                    var parts = statusRegExp.exec(line);
                    if (!parts || (parts && parts.length !== 3)) {
                        throw new Error('SPHttpClientBatch: Invalid status, line ' + i);
                    }
                    // Ex. "500"
                    batchStatus = parseInt(parts[1], 10);
                    // Ex. "Internal Server Error"
                    batchStatusText = parts[2];
                    parserState = 'statusHeaders';
                    break;
                case 'statusHeaders':
                    if (line.trim() === '') {
                        parserState = 'body';
                    }
                    break;
                case 'body':
                    var responseBody = void 0;
                    // Response with status 204, 205 and 304 which are null body status cannot have body.
                    // Otherwise, use parsed line as response body.
                    if (batchStatus !== 204 && // No content
                        batchStatus !== 205 && // Reset content
                        batchStatus !== 304 // Not modified
                    ) {
                        responseBody = line;
                    }
                    else {
                        responseBody = null; // tslint:disable-line:no-null-keyword
                    }
                    var headers = new Headers();
                    headers.append('request-id', this._correlationId || '');
                    var response = new Response(responseBody, {
                        status: batchStatus,
                        statusText: batchStatusText,
                        headers: headers
                    });
                    responses.push(response);
                    parserState = 'batch';
                    break;
            }
        }
        if (parserState !== 'status') {
            throw new Error('SPHttpClientBatch: Unexpected end of input');
        }
        return responses;
    };
    /**
     * The standard predefined SPHttpClientBatchConfigurations objects for use with
     * the SPHttpClientBatch class.
     */
    SPHttpClientBatch.configurations = _SPHttpClientBatchConfiguration__WEBPACK_IMPORTED_MODULE_7__["predefinedConfigurations"];
    return SPHttpClientBatch;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPHttpClientBatch);


/***/ }),

/***/ "5q05":
/*!******************************************!*\
  !*** ./lib/spHttpClient/SPHttpClient.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DigestCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DigestCache */ "Qacf");
/* harmony import */ var _httpClient_FetchProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../httpClient/FetchProvider */ "UE6e");
/* harmony import */ var _SPHttpClientConfiguration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SPHttpClientConfiguration */ "eGlh");
/* harmony import */ var _SPHttpClientBatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SPHttpClientBatch */ "5emJ");
/* harmony import */ var _SPHttpClientHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SPHttpClientHelper */ "0s3q");
/* harmony import */ var _caching_CacheManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../caching/CacheManager */ "pueB");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .. */ "mwqp");









/**
 * SPHttpClient is used to perform REST calls against SharePoint.  It adds default
 * headers, manages the digest needed for writes, and collects telemetry that
 * helps the service to monitor the performance of an application.
 *
 * @remarks
 * For communicating with other internet services, use the {@link HttpClient} class.
 *
 * @public
 * @sealed
 */
var SPHttpClient = /** @class */ (function () {
    function SPHttpClient(serviceScope) {
        var _this = this;
        this._serviceScope = serviceScope;
        this._serviceScope.whenFinished(function () {
            _this._digestCache = _this._serviceScope.consume(_DigestCache__WEBPACK_IMPORTED_MODULE_2__["default"].serviceKey);
            _this._parentSource = _this._serviceScope.consume(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_logSourceServiceKey"]);
            _this._fetchProvider = _this._serviceScope.consume(_httpClient_FetchProvider__WEBPACK_IMPORTED_MODULE_3__["fetchProviderServiceKey"]);
        });
    }
    /**
     * Use a heuristic to infer the base URL for authentication.
     *
     * @remarks
     * Attempts to infer the SPWeb URL associated with the provided REST URL, by looking
     * for common SharePoint path components such as "_api", "_layouts", or "_vit_bin".
     * This is necessary for operations such as the X-RequestDigest
     * and ODATA batching, which require POSTing to a separate REST endpoint
     * in order to complete a request.
     *
     * For example, if the requestUrl is "/sites/site/web/_api/service",
     * the returned URL would be "/sites/site/web".  Or if the requestUrl
     * is "http://example.com/_layouts/service", the returned URL would be
     * "http://example.com".
     *
     * If the URL cannot be determined, an exception is thrown.
     *
     * @param requestUrl - The URL for a SharePoint REST service
     * @returns the inferred SPWeb URL
     */
    SPHttpClient.getWebUrlFromRequestUrl = function (requestUrl) {
        return _SPHttpClientHelper__WEBPACK_IMPORTED_MODULE_6__["default"].getWebUrlFromRequestUrl(requestUrl);
    };
    SPHttpClient.prototype.fetch = function (url, configuration, options, cacheConfiguration) {
        var _this = this;
        // Default fetch behavior - No caching
        // If no caching options are provided, or If Cache Provider is not present continue to API call
        if (!cacheConfiguration || !this._cacheDataProvider) {
            return this._fetch(url, configuration, options);
        }
        // Get the cache Key
        // tslint:disable-next-line:no-any
        var cacheKey = this._cacheDataProvider.getCacheKey(url, configuration, options, cacheConfiguration);
        // Fetch data and Cache according to the cacheConfiguration
        return _caching_CacheManager__WEBPACK_IMPORTED_MODULE_7__["CacheManager"].fetchAndCache(cacheKey, this._cacheDataProvider, cacheConfiguration, function () { return _this._fetch(url, configuration, options); });
    };
    SPHttpClient.prototype.get = function (url, configuration, options, cacheConfiguration) {
        if (cacheConfiguration) {
            return this.fetch(url, configuration, _SPHttpClientHelper__WEBPACK_IMPORTED_MODULE_6__["default"].overrideHttpMethod(options, 'GET'), cacheConfiguration);
        }
        else {
            return this.fetch(url, configuration, _SPHttpClientHelper__WEBPACK_IMPORTED_MODULE_6__["default"].overrideHttpMethod(options, 'GET'));
        }
    };
    /**
     * Calls fetch(), but sets the method to "POST".
     *
     * @param url - the URL to fetch
     * @param configuration - determines the default behavior of SPHttpClient; normally this should
     *   be the latest version number from SPHttpClientConfigurations
     * @param options - additional options that affect the request
     * @returns A promise with behavior similar to WHATWG fetch().  This promise will resolve normally
     * (with {@link HttpClientResponse.ok} being false) for error status codes such as HTTP 404
     * or 500.  The promise will only reject for network failures or other errors that prevent communication
     * with the server.
     */
    SPHttpClient.prototype.post = function (url, configuration, options) {
        return this._fetch(url, configuration, _SPHttpClientHelper__WEBPACK_IMPORTED_MODULE_6__["default"].overrideHttpMethod(options, 'POST'));
    };
    /**
     * Begins an ODATA batch, which allows multiple REST queries to be bundled into
     * a single web request.
     *
     * @returns An {@link SPHttpClientBatch} object used to manage the batch operation.
     *
     * @beta
     */
    SPHttpClient.prototype.beginBatch = function (batchCreationOptions) {
        return new _SPHttpClientBatch__WEBPACK_IMPORTED_MODULE_5__["default"](this._serviceScope, batchCreationOptions);
    };
    SPHttpClient.prototype._fetch = function (url, configuration, options) {
        return _SPHttpClientHelper__WEBPACK_IMPORTED_MODULE_6__["default"].fetchCore(url, configuration, options, this._serviceScope, this._digestCache, this._fetchProvider, this._logSourceId);
    };
    Object.defineProperty(SPHttpClient.prototype, "_cacheDataProvider", {
        /**
         * Gets the cache data provider
         */
        // tslint:disable-next-line:no-any
        get: function () {
            if (!this._cacheProvider) {
                this._cacheProvider = this._serviceScope.consume(Object(___WEBPACK_IMPORTED_MODULE_8__["_getCacheDataProviderServiceKey"])())._provider;
            }
            return this._cacheProvider;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SPHttpClient.prototype, "_logSourceId", {
        get: function () {
            if (this._parentSource.isEmpty()) {
                return SPHttpClient._logSource.id;
            }
            return this._parentSource.id;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * The standard predefined SPHttpClientConfiguration objects for use with
     * the SPHttpClient class.
     */
    SPHttpClient.configurations = _SPHttpClientConfiguration__WEBPACK_IMPORTED_MODULE_4__["predefinedConfigurations"];
    /**
     * The service key for SPHttpClient.
     */
    SPHttpClient.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["ServiceKey"].create('sp-http:SPHttpClient', SPHttpClient);
    SPHttpClient._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_LogSource"].create('spHttpClient');
    return SPHttpClient;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPHttpClient);


/***/ }),

/***/ "81oh":
/*!********************************************!*\
  !*** ./lib/aadHttpClient/AadHttpClient.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _httpClient_FetchProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../httpClient/FetchProvider */ "UE6e");
/* harmony import */ var _httpClient_HttpClientResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../httpClient/HttpClientResponse */ "0v/C");
/* harmony import */ var _AadHttpClientResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AadHttpClientResponse */ "Xwc3");
/* harmony import */ var _oauthTokenProvider_AadTokenProviders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../oauthTokenProvider/AadTokenProviders */ "KkUw");
/* harmony import */ var _httpClient_HttpClientHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../httpClient/HttpClientHelper */ "8Y7G");
/* harmony import */ var _AadHttpClientConfiguration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AadHttpClientConfiguration */ "BCL6");







/**
 * AadHttpClient is used to perform REST calls against an Azure AD Application.
 *
 * @remarks
 * For communicating with SharePoint, use the {@link SPHttpClient} class instead.
 * For communicating with Microsoft Graph, use the {@link MSGraphClient} class.
 *
 * @public
 * @sealed
 */
var AadHttpClient = /** @class */ (function () {
    /**
     *
     * @param serviceScope - The service scope is needed to retrieve some of the class's internal components.
     * @param resourceUrl - The resource for which the token should be obtained.
     * @param options - Configuration options for the request to get an access token.
     *
     */
    function AadHttpClient(serviceScope, resourceEndpoint, options) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(serviceScope, 'serviceScope');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(resourceEndpoint, 'resourceUrl');
        this._resourceUrl = resourceEndpoint;
        this._serviceScope = serviceScope;
        this._aadTokenProvider = (options && options.tokenProvider) || _oauthTokenProvider_AadTokenProviders__WEBPACK_IMPORTED_MODULE_4__["default"].configurable;
        this._aadTokenConfiguration = options && options.configuration;
        this._useCachedToken = options && options.useCachedToken !== undefined ? options.useCachedToken : true;
        serviceScope.whenFinished(function () {
            _this._fetchProvider = serviceScope.consume(_httpClient_FetchProvider__WEBPACK_IMPORTED_MODULE_1__["fetchProviderServiceKey"]);
        });
    }
    /**
     * Performs a REST service call.
     *
     * @remarks
     * Although the AadHttpClient subclass adds additional enhancements, the parameters and semantics
     * for HttpClient.fetch() are essentially the same as the WHATWG API standard that is documented here:
     * https://fetch.spec.whatwg.org/
     *
     * @param url - The endpoint URL that fetch will be called on.
     * @param configuration - Determines the default behavior of HttpClient; normally this should
     *   be the latest version number from HttpClientConfigurations.
     * @param options - Additional options that affect the request.
     * @returns A promise that will return the result.
     */
    AadHttpClient.prototype.fetch = function (url, configuration, options) {
        var _this = this;
        return this._fetch(url, configuration, options, this._useCachedToken).then(function (originalResponse) {
            if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('0cf10fc5-9dba-4929-9644-68aa50693e25'
            /* '05/13/19', 'Get a fresh token for authorization failures' */
            ) &&
                originalResponse.status === 403) {
                return _this._fetch(url, configuration, options, false);
            }
            else {
                return originalResponse;
            }
        });
    };
    /**
     * Calls fetch(), but sets the method to "GET".
     *
     * @param url - The endpoint URL that fetch will be called on.
     * @param configuration - Determines the default behavior of HttpClient; normally this should
     *   be the latest version number from HttpClientConfigurations.
     * @param options - Additional options that affect the request.
     * @returns A promise that will return the result.
     */
    AadHttpClient.prototype.get = function (url, configuration, options) {
        return this.fetch(url, configuration, _httpClient_HttpClientHelper__WEBPACK_IMPORTED_MODULE_5__["default"].overrideHttpMethod(options, 'GET'));
    };
    /**
     * Calls fetch(), but sets the method to "POST".
     *
     * @param url - The endpoint URL that fetch will be called on.
     * @param configuration - Determines the default behavior of HttpClient; normally this should
     *   be the latest version number from HttpClientConfigurations.
     * @param options - Additional options that affect the request.
     * @returns A promise that will return the result.
     */
    AadHttpClient.prototype.post = function (url, configuration, options) {
        return this.fetch(url, configuration, _httpClient_HttpClientHelper__WEBPACK_IMPORTED_MODULE_5__["default"].overrideHttpMethod(options, 'POST'));
    };
    AadHttpClient.prototype._fetch = function (url, configuration, options, useCachedToken) {
        var _this = this;
        var startTimer = performance.now();
        // We can only use a custom configuration for the original AADTokenProvider right now.
        // We don't want to support this customization long term.
        var tokenFetchPromise;
        if (this._aadTokenConfiguration && this._aadTokenProvider._getTokenInternal) {
            tokenFetchPromise = this._aadTokenProvider._getTokenInternal(this._resourceUrl, this._aadTokenConfiguration, useCachedToken);
        }
        else {
            tokenFetchPromise = this._aadTokenProvider.getToken(this._resourceUrl, useCachedToken);
        }
        return tokenFetchPromise.then(function (token) {
            var endTimer = performance.now();
            // Constructing a Headers object with undefined throws an exception in IE/Edge
            options.headers = options.headers ? new Headers(options.headers) : new Headers();
            if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('784afa03-cdaa-4a5a-84a0-479d431cc639'
            /* '07/15/20','Remove double Bearer token in Authorization header' */
            )) {
                options.headers.set('Authorization', 'Bearer ' + token);
            }
            else {
                options.headers.append('Authorization', 'Bearer ' + token);
            }
            return _httpClient_HttpClientHelper__WEBPACK_IMPORTED_MODULE_5__["default"].fetchCore(configuration, new Request(url, options), _this._serviceScope, _this._fetchProvider, AadHttpClient._className).then(function (response) {
                if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('0e4428bc-190b-4f77-9ed8-93de78c314db'
                /* '07/10/20', 'Calculate time in milliseconds of token fetch request' */
                )) {
                    return new _AadHttpClientResponse__WEBPACK_IMPORTED_MODULE_3__["default"](response, endTimer - startTimer);
                }
                else {
                    return new _httpClient_HttpClientResponse__WEBPACK_IMPORTED_MODULE_2__["default"](response);
                }
            });
        });
    };
    /**
     * The standard predefined AadHttpClientConfiguration objects for use with
     * the AadHttpClient class.
     */
    AadHttpClient.configurations = _AadHttpClientConfiguration__WEBPACK_IMPORTED_MODULE_6__["predefinedConfigurations"];
    AadHttpClient._className = 'AadHttpClient';
    return AadHttpClient;
}());
/* harmony default export */ __webpack_exports__["default"] = (AadHttpClient);


/***/ }),

/***/ "8Y7G":
/*!********************************************!*\
  !*** ./lib/httpClient/HttpClientHelper.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graphHttpClient_GraphHttpClientContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphHttpClient/GraphHttpClientContext */ "iDX0");




// Killswitch Guid to disable Adding "SdkVersion" header to the Request.
var SDKVERSION_HEADER_KILLSWITCH = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('7eade7ed-629b-4db2-8837-1fde226c59ff');
var QOS_LOG_FAILURE_KILLSWITCH = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('065b3863-45bb-44c0-846e-5cd769f06683');
/**
 * Private - this class contains some internal code shared between HttpClient
 * and SPHttpClient.
 */
var HttpClientHelper = /** @class */ (function () {
    function HttpClientHelper() {
    }
    /**
     * Clones the original options and sets the method to the passed in method name.
     */
    HttpClientHelper.overrideHttpMethod = function (options, httpRequestMethod) {
        var modifiedOptions = Object.assign({}, options);
        modifiedOptions.method = httpRequestMethod;
        return modifiedOptions;
    };
    /**
     * All network requests are routed through this method, which calls the
     * underlying IFetchProvider.fetch().
     */
    HttpClientHelper.fetchCore = function (configuration, request, serviceScope, fetchProvider, logSource) {
        var loggingSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create(logSource);
        try {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logVerbose(loggingSource, request.method + " " + request.url);
        }
        catch (error) {
            // Ignore potential Log errors
        }
        var clientManifestData = serviceScope.consume(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_ClientManifestData"].serviceKey);
        var qosMonitor;
        var alias;
        var componentId;
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(QOS_LOG_FAILURE_KILLSWITCH, '10/20/2020', 'Reduce HttpClientHelper.Fetch logging')) {
            qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](HttpClientHelper.HTTP_CLIENT_CLASS_NAME_FETCH);
        }
        if (clientManifestData.manifest) {
            if (qosMonitor) {
                qosMonitor.extraData = {
                    alias: clientManifestData.manifest.alias,
                    componentId: clientManifestData.manifest.id
                };
            }
            else {
                alias = clientManifestData.manifest.alias;
                componentId = clientManifestData.manifest.id;
            }
            if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(SDKVERSION_HEADER_KILLSWITCH, '10/22/2019', 'RemoveSdkVersionHeader')) {
                // We would like to add the 'SdkVersion' header to all outgoing network requests.
                // We are adding 'SdkVersion' header for Graph and Sharepoint REST calls only.
                // This is because not all services support arbitrary headers.
                // See more here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Headers
                try {
                    var graphContext = serviceScope.consume(_graphHttpClient_GraphHttpClientContext__WEBPACK_IMPORTED_MODULE_2__["default"].serviceKey);
                    var spUrlOrigin = new URL(graphContext.getWebAbsoluteUrl()).origin;
                    var msGraphUrlOrigin = new URL(graphContext.getGraphEndpointUrl()).origin;
                    var requestUrlOrigin = new URL(request.url).origin;
                    if (requestUrlOrigin === spUrlOrigin || requestUrlOrigin === msGraphUrlOrigin) {
                        request.headers.append('Access-Control-Request-Headers', 'SdkVersion');
                        request.headers.append('SdkVersion', 'SPFx/' + clientManifestData.manifest.alias + '/' + clientManifestData.manifest.id);
                    }
                }
                catch (error) {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logVerbose(loggingSource, 'SdkVersionError: ' + error);
                }
            }
        }
        return fetchProvider
            .fetch(request)
            .then(function (response) {
            if (response.status >= 200 && response.status <= 299) {
                if (qosMonitor) {
                    qosMonitor.writeSuccess({ source: logSource });
                }
            }
            else if (response.status >= 300 && response.status <= 399) {
                if (qosMonitor) {
                    qosMonitor.writeExpectedFailure('Redirection', undefined, {
                        source: logSource,
                        responseStatus: response.status
                    });
                }
            }
            else {
                qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](HttpClientHelper.HTTP_CLIENT_CLASS_NAME_FETCH);
                if (alias !== undefined && componentId !== undefined) {
                    qosMonitor.extraData = {
                        alias: alias,
                        componentId: componentId
                    };
                }
            }
            if (qosMonitor) {
                if (response.status >= 400 && response.status <= 499) {
                    qosMonitor.writeExpectedFailure('ClientError', undefined, {
                        source: logSource,
                        responseStatus: response.status
                    });
                }
                else if (response.status >= 500 && response.status <= 599) {
                    qosMonitor.writeExpectedFailure('ServerError', undefined, {
                        source: logSource,
                        responseStatus: response.status
                    });
                }
                else {
                    qosMonitor.writeUnexpectedFailure('Unknown', undefined, {
                        source: logSource,
                        responseStatus: response.status
                    });
                }
            }
            return response;
        })
            .catch(function (error) {
            if (!qosMonitor) {
                qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](HttpClientHelper.HTTP_CLIENT_CLASS_NAME_FETCH);
                if (alias !== undefined && componentId !== undefined) {
                    qosMonitor.extraData = {
                        alias: alias,
                        componentId: componentId
                    };
                }
            }
            if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('05b38c8d-4659-4055-9348-7f15ab35b204'
            /* , '12/02/2020', 'Extra Data'*/
            )) {
                qosMonitor.writeUnexpectedFailure('FetchError', error, {
                    source: logSource,
                    fullError: JSON.stringify(error)
                });
            }
            else {
                qosMonitor.writeUnexpectedFailure('FetchError', error, {
                    source: logSource
                });
            }
            throw error;
        });
    };
    HttpClientHelper.HTTP_CLIENT_CLASS_NAME_FETCH = 'HttpClientHelper.Fetch';
    return HttpClientHelper;
}());
/* harmony default export */ __webpack_exports__["default"] = (HttpClientHelper);


/***/ }),

/***/ "9UXQ":
/*!************************************************************!*\
  !*** ./lib/spHttpClient/SPHttpClientBatchConfiguration.js ***!
  \************************************************************/
/*! exports provided: default, predefinedConfigurations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "predefinedConfigurations", function() { return predefinedConfigurations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SPHttpClientCommonConfiguration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SPHttpClientCommonConfiguration */ "ea2N");
/* harmony import */ var _httpClient_HttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../httpClient/HttpClient */ "LJZb");



/**
 * Configuration for SPHttpClientBatch.
 *
 * @remarks
 * The SPHttpClientBatchConfiguration object provides a set of switches for enabling/disabling
 * various features of the SPHttpClientBatch class.  Normally these switches are set
 * (e.g. when calling SPHttpClientBatch.fetch()) by providing one of the predefined defaults
 * from SPHttpClientBatchConfigurations, however switches can also be changed via the
 * SPHttpClientBatchConfiguration.overrideWith() method.
 *
 * @beta
 */
var SPHttpClientBatchConfiguration = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPHttpClientBatchConfiguration, _super);
    /**
     * Constructs a new instance of SPHttpClientBatchConfiguration with the specified flags.
     * The default values will be used for any flags that are missing or undefined.
     * If overrideFlags is specified, it takes precedence over flags.
     */
    function SPHttpClientBatchConfiguration(flags, overrideFlags) {
        return _super.call(this, flags, overrideFlags) || this;
    }
    /**
     * @override
     */
    SPHttpClientBatchConfiguration.prototype.overrideWith = function (sourceFlags) {
        return new SPHttpClientBatchConfiguration(this.flags, sourceFlags);
    };
    /**
     * @override
     */
    SPHttpClientBatchConfiguration.prototype.initializeFlags = function () {
        _super.prototype.initializeFlags.call(this);
    };
    return SPHttpClientBatchConfiguration;
}(_SPHttpClientCommonConfiguration__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (SPHttpClientBatchConfiguration);
var predefinedConfigurations = {
    v1: new SPHttpClientBatchConfiguration(_httpClient_HttpClient__WEBPACK_IMPORTED_MODULE_2__["default"].configurations.v1, {
        // ISPHttpClientCommonConfiguration:
        jsonRequest: true,
        jsonResponse: true
        // ISPHttpClientBatchConfiguration:
        // (none)
    })
};


/***/ }),

/***/ "BCL6":
/*!*********************************************************!*\
  !*** ./lib/aadHttpClient/AadHttpClientConfiguration.js ***!
  \*********************************************************/
/*! exports provided: default, predefinedConfigurations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "predefinedConfigurations", function() { return predefinedConfigurations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _httpClient_HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../httpClient/HttpClient */ "LJZb");
/* harmony import */ var _httpClient_HttpClientConfiguration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../httpClient/HttpClientConfiguration */ "zgJL");



/**
 * Configuration for HttpClient.
 *
 * @remarks
 * The HttpClientConfiguration object provides a set of switches for enabling/disabling
 * various features of the HttpClient class.  Normally these switches are set
 * (e.g. when calling HttpClient.fetch()) by providing one of the predefined defaults
 * from HttpClientConfigurations, however switches can also be changed via the
 * HttpClientConfiguration.overrideWith() method.
 *
 * @public
 */
var AadHttpClientConfiguration = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AadHttpClientConfiguration, _super);
    /**
     * Constructs a new instance of HttpClientConfiguration with the specified flags.
     * The default values will be used for any flags that are missing or undefined.
     * If overrideFlags is specified, it takes precedence over flags.
     */
    function AadHttpClientConfiguration(flags, overrideFlags) {
        return _super.call(this, flags, overrideFlags) || this;
    }
    /**
     * @override
     */
    AadHttpClientConfiguration.prototype.overrideWith = function (sourceFlags) {
        return new AadHttpClientConfiguration(this.flags, sourceFlags);
    };
    return AadHttpClientConfiguration;
}(_httpClient_HttpClientConfiguration__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (AadHttpClientConfiguration);
var predefinedConfigurations = {
    v1: new AadHttpClientConfiguration(_httpClient_HttpClient__WEBPACK_IMPORTED_MODULE_1__["default"].configurations.v1)
};


/***/ }),

/***/ "BkXy":
/*!********************************************************!*\
  !*** ./lib/graphHttpClient/GraphHttpClientResponse.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _httpClient_HttpClientResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../httpClient/HttpClientResponse */ "0v/C");



/**
 * The Response subclass returned by methods such as GraphHttpClient.fetch().
 *
 * @remarks
 * This is a placeholder.  In the future, additional GraphHttpClient-specific functionality
 * may be added to this class.
 *
 * @deprecated The GraphHttpClient class has been superceded by the MSGraphClient class.
 * @internal
 * @sealed
 */
var GraphHttpClientResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GraphHttpClientResponse, _super);
    function GraphHttpClientResponse(response) {
        return _super.call(this, response) || this;
    }
    /**
     * @override
     */
    GraphHttpClientResponse.prototype.clone = function () {
        return new GraphHttpClientResponse(this.nativeResponse.clone());
    };
    Object.defineProperty(GraphHttpClientResponse.prototype, "correlationId", {
        /**
         * Returns the Graph API correlation ID.
         *
         * @returns the correlation ID, or undefined if the "request-id" header was not found.
         */
        get: function () {
            if (!this._correlationId) {
                this._correlationId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].tryParse(this.headers.get('request-id'));
            }
            return this._correlationId;
        },
        enumerable: false,
        configurable: true
    });
    return GraphHttpClientResponse;
}(_httpClient_HttpClientResponse__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (GraphHttpClientResponse);


/***/ }),

/***/ "E9FO":
/*!************************************************!*\
  !*** ./lib/graphHttpClient/GraphHttpClient.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _oauthTokenProvider_OAuthTokenProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oauthTokenProvider/OAuthTokenProvider */ "21FS");
/* harmony import */ var _httpClient_FetchProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../httpClient/FetchProvider */ "UE6e");
/* harmony import */ var _GraphHttpClientResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GraphHttpClientResponse */ "BkXy");
/* harmony import */ var _httpClient_HttpClientHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../httpClient/HttpClientHelper */ "8Y7G");
/* harmony import */ var _spHttpClient_SPHttpClientHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../spHttpClient/SPHttpClientHelper */ "0s3q");
/* harmony import */ var _GraphHttpClientConfiguration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GraphHttpClientConfiguration */ "kyCB");
/* harmony import */ var _GraphHttpClientContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GraphHttpClientContext */ "iDX0");
/* harmony import */ var _caching_CacheManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../caching/CacheManager */ "pueB");
/* harmony import */ var _caching_CacheDataProviderService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../caching/CacheDataProviderService */ "Pac7");











/**
 * GraphHttpClient is used to perform REST calls against Microsoft Graph. It adds default
 * headers and collects telemetry that helps the service to monitor the performance of an application.
 * https://developer.microsoft.com/en-us/graph/
 *
 * @remarks
 * For communicating with SharePoint, use the {@link SPHttpClient} class instead.
 * For communicating with other internet services, use the {@link HttpClient} class instead.
 *
 * @internal
 * @deprecated The GraphHttpClient class has been superseded by the MSGraphClient class.
 * @sealed
 */
var GraphHttpClient = /** @class */ (function () {
    function GraphHttpClient(serviceScope) {
        var _this = this;
        this._serviceScope = serviceScope;
        this._serviceScope.whenFinished(function () {
            _this._tokenProvider = serviceScope.consume(_oauthTokenProvider_OAuthTokenProvider__WEBPACK_IMPORTED_MODULE_2__["default"].serviceKey);
            _this._parentSource = serviceScope.consume(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_logSourceServiceKey"]);
            _this._graphContext = serviceScope.consume(_GraphHttpClientContext__WEBPACK_IMPORTED_MODULE_8__["default"].serviceKey);
            _this._fetchProvider = serviceScope.consume(_httpClient_FetchProvider__WEBPACK_IMPORTED_MODULE_3__["fetchProviderServiceKey"]);
            _this._clientManifestData = _this._serviceScope.consume(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_ClientManifestData"].serviceKey);
        });
    }
    GraphHttpClient.prototype.fetch = function (url, configuration, options, cacheConfiguration) {
        var _this = this;
        // Default fetch behavior - No caching
        // If no caching options are provided, or If Cache Provider is not present continue to API call
        if (!cacheConfiguration || !this._cacheDataProvider) {
            return this._fetch(url, configuration, options);
        }
        // Get the cache Key
        // tslint:disable-next-line:no-any
        var cacheKey = this._cacheDataProvider.getCacheKey(url, configuration, options);
        // Fetch data and Cache according to the cacheConfiguration
        return _caching_CacheManager__WEBPACK_IMPORTED_MODULE_9__["CacheManager"].fetchAndCache(cacheKey, this._cacheDataProvider, cacheConfiguration, function () { return _this._fetch(url, configuration, options); });
    };
    GraphHttpClient.prototype.get = function (url, configuration, options, cacheConfiguration) {
        if (cacheConfiguration) {
            return this.fetch(url, configuration, _httpClient_HttpClientHelper__WEBPACK_IMPORTED_MODULE_5__["default"].overrideHttpMethod(options, 'GET'), cacheConfiguration);
        }
        else {
            return this.fetch(url, configuration, _httpClient_HttpClientHelper__WEBPACK_IMPORTED_MODULE_5__["default"].overrideHttpMethod(options, 'GET'));
        }
    };
    /**
     * Calls fetch(), but sets the method to "POST".
     * @param url - the URL to fetch
     * @param configuration - determines the default behavior of GraphHttpClient; normally this should
     *   be the latest version number from GraphHttpClientConfigurations
     * @param options - additional options that affect the request
     * @returns a promise that will return the result
     */
    GraphHttpClient.prototype.post = function (url, configuration, options) {
        return this._fetch(url, configuration, _httpClient_HttpClientHelper__WEBPACK_IMPORTED_MODULE_5__["default"].overrideHttpMethod(options, 'POST'));
    };
    GraphHttpClient.prototype._fetch = function (url, configuration, options) {
        var _this = this;
        this._validateGraphRelativeUrl(url);
        return this._getOAuthToken().then(function () {
            if (!options) {
                options = {};
            }
            var modifiedOptions = Object.assign({}, options);
            var defaultHeaders = new Headers();
            defaultHeaders.append('Accept', 'application/json');
            defaultHeaders.append('Authorization', 'Bearer ' + _this._token);
            defaultHeaders.append('Content-Type', 'application/json; charset=utf-8');
            var userHeaders = _spHttpClient_SPHttpClientHelper__WEBPACK_IMPORTED_MODULE_6__["default"].cloneHeaders(options);
            modifiedOptions.headers = _this._mergeUserHeaders(defaultHeaders, userHeaders);
            return _this._fetchWithInstrumentation(configuration, new Request(_this._graphContext.getGraphEndpointUrl() + '/' + url, modifiedOptions)).then(function (response) {
                return new _GraphHttpClientResponse__WEBPACK_IMPORTED_MODULE_4__["default"](response);
            });
        });
    };
    GraphHttpClient.prototype._fetchWithInstrumentation = function (configuration, request) {
        return _httpClient_HttpClientHelper__WEBPACK_IMPORTED_MODULE_5__["default"].fetchCore(configuration, request, this._serviceScope, this._fetchProvider, GraphHttpClient._className)
            .then(function (response) {
            return response;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    GraphHttpClient.prototype._getOAuthToken = function () {
        var _this = this;
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"]('GraphHttpClient.FetchGraphToken');
        if (this._clientManifestData.manifest) {
            qosMonitor.extraData = {
                alias: this._clientManifestData.manifest.alias,
                componentId: this._clientManifestData.manifest.id
            };
        }
        // VSO 331685 SharePoint/Graph should tell the GraphHttpClient where to fetch the Graph token from
        return this._tokenProvider
            .getOAuthToken(this._graphContext.getGraphEndpointUrl(), this._graphContext.getWebServerRelativeUrl())
            .then(function (response) {
            _this._writeQosMonitorUpdate(response, qosMonitor, 'FetchGraphToken');
            _this._token = response.token;
        })
            .catch(function (error) {
            qosMonitor.writeUnexpectedFailure('FetchGraphToken', error, { source: _this._logSourceId });
            return Promise.reject(error);
        });
    };
    Object.defineProperty(GraphHttpClient.prototype, "_cacheDataProvider", {
        /**
         * Gets the cache data provider
         */
        // tslint:disable-next-line:no-any
        get: function () {
            if (!this._cacheProvider) {
                this._cacheProvider = this._serviceScope.consume(Object(_caching_CacheDataProviderService__WEBPACK_IMPORTED_MODULE_10__["getCacheDataProviderServiceKey"])())._provider;
            }
            return this._cacheProvider;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphHttpClient.prototype, "_logSourceId", {
        get: function () {
            if (this._parentSource.isEmpty()) {
                return GraphHttpClient._logSource.id;
            }
            return this._parentSource.id;
        },
        enumerable: false,
        configurable: true
    });
    GraphHttpClient.prototype._mergeUserHeaders = function (defaultHeaders, userHeaders) {
        userHeaders.forEach(function (value, name) {
            defaultHeaders.set(name, value); // note name/value are reversed
        });
        return defaultHeaders;
    };
    GraphHttpClient.prototype._writeQosMonitorUpdate = function (response, qosMonitor, operation) {
        if (response.status >= 200 && response.status <= 299) {
            qosMonitor.writeSuccess({ source: this._logSourceId });
        }
        else if (response.status >= 300 && response.status <= 499) {
            qosMonitor.writeExpectedFailure(operation, undefined, {
                source: this._logSourceId,
                responseStatus: response.status
            });
        }
        else {
            qosMonitor.writeUnexpectedFailure(operation, undefined, {
                source: this._logSourceId,
                responseStatus: response.status
            });
        }
    };
    /**
     * This function verifies that
     */
    GraphHttpClient.prototype._validateGraphRelativeUrl = function (url) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(url, 'url');
        if (url.charAt(0) === '/') {
            throw new Error('GraphHttpClient requests cannot begin with a / character');
        }
        if (url.indexOf('http://', 0) === 0) {
            throw new Error('GraphHttpClient requests cannot specify a different graph server with the url.');
        }
        if (url.indexOf('https://', 0) === 0) {
            throw new Error('GraphHttpClient requests cannot specify a different graph server with the url.');
        }
    };
    /**
     * The standard predefined GraphHttpClientConfiguration objects for use with
     * the GraphHttpClient class.
     */
    GraphHttpClient.configurations = _GraphHttpClientConfiguration__WEBPACK_IMPORTED_MODULE_7__["predefinedConfigurations"];
    /**
     * The service key for GraphHttpClient.
     */
    GraphHttpClient.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["ServiceKey"].create('sp-http:GraphHttpClient', GraphHttpClient);
    GraphHttpClient._className = 'GraphHttpClient';
    GraphHttpClient._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_LogSource"].create('graphHttpClient');
    return GraphHttpClient;
}());
/* harmony default export */ __webpack_exports__["default"] = (GraphHttpClient);


/***/ }),

/***/ "GSEB":
/*!******************************************!*\
  !*** ./lib/spHttpClient/ODataVersion.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Represents supported version of the "OData-Version" header, which is part
 * of the Open Data Protocol standard.
 *
 * @public
 */
var ODataVersion = /** @class */ (function () {
    function ODataVersion(versionString) {
        this._versionString = versionString;
    }
    /**
     * Attempt to parse the "OData-Version" header.
     *
     * @remarks
     * If the "OData-Version" header is present, this returns the
     * corresponding ODataVersion constant.  An error is thrown if
     * the version number is not supported.  If the header is missing,
     * then undefined is returned.
     */
    ODataVersion.tryParseFromHeaders = function (headers) {
        var oDataVersion;
        headers.forEach(function (value, name) {
            if (name.toUpperCase() === 'ODATA-VERSION') {
                oDataVersion = value.trim();
            }
        });
        if (oDataVersion === '3.0') {
            return ODataVersion.v3;
        }
        else if (oDataVersion === '4.0') {
            return ODataVersion.v4;
        }
        else if (oDataVersion) {
            throw new Error('Unsupported OData-Version header: ' + oDataVersion);
        }
        return undefined;
    };
    /**
     * Returns the "OData-Version" value, for example "4.0".
     */
    ODataVersion.prototype.toString = function () {
        return this._versionString;
    };
    /**
     * Represents version 3.0 for the "OData-Version" header
     */
    ODataVersion.v3 = new ODataVersion('3.0');
    /**
     * Represents version 4.0 for the "OData-Version" header
     */
    ODataVersion.v4 = new ODataVersion('4.0');
    return ODataVersion;
}());
/* harmony default export */ __webpack_exports__["default"] = (ODataVersion);


/***/ }),

/***/ "KkUw":
/*!*****************************************************!*\
  !*** ./lib/oauthTokenProvider/AadTokenProviders.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * AadTokenProviders is used to retrieve preinitialized instances of the AadTokenProvider class.
 * This class should only be used within the SharePoint Framework.
 * @internal
 */
var AadTokenProviders = /** @class */ (function () {
    function AadTokenProviders() {
    }
    /**
     * Initializes the AadTokenProviders. Must be called before fetching AadTokenProvider objects.
     * @internal
     */
    AadTokenProviders._initialize = function (configurable, preAuthorizedConfig) {
        AadTokenProviders._configurableTokenProvider = configurable;
        AadTokenProviders._preAuthorizedConfiguration = preAuthorizedConfig;
    };
    Object.defineProperty(AadTokenProviders, "configurable", {
        /**
         * Retrieves a preinitialized version of the `AadTokenProvider` class for communicating with the
         * current tenant's configurable Service Principal. This application can be configured
         * by granting permission scopes to the tenant's instance of the Service Principal.
         *
         * For more information, see
         * {@link https://docs.microsoft.com/en-us/sharepoint/dev/spfx/use-aadhttpclient}
         */
        get: function () {
            return AadTokenProviders._configurableTokenProvider;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AadTokenProviders, "preAuthorizedConfiguration", {
        /**
         * Retrieves the configuration for communicating with the current tenant's Service
         * Principal. This application has a set of preauthorized scopes from Microsoft.
         */
        get: function () {
            return this._preAuthorizedConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    return AadTokenProviders;
}());
/* harmony default export */ __webpack_exports__["default"] = (AadTokenProviders);


/***/ }),

/***/ "LJZb":
/*!**************************************!*\
  !*** ./lib/httpClient/HttpClient.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FetchProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FetchProvider */ "UE6e");
/* harmony import */ var _HttpClientConfiguration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HttpClientConfiguration */ "zgJL");
/* harmony import */ var _HttpClientResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HttpClientResponse */ "0v/C");
/* harmony import */ var _HttpClientHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HttpClientHelper */ "8Y7G");
/* harmony import */ var _caching_CacheManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../caching/CacheManager */ "pueB");
/* harmony import */ var _caching_CacheDataProviderService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../caching/CacheDataProviderService */ "Pac7");







/**
 * HttpClient implements a basic set of features for performing REST operations against
 * a generic service.
 *
 * @remarks
 * For communicating with SharePoint, use the {@link SPHttpClient} class instead.
 *
 * @public
 */
var HttpClient = /** @class */ (function () {
    function HttpClient(serviceScope) {
        var _this = this;
        this._serviceScope = serviceScope;
        serviceScope.whenFinished(function () {
            _this._fetchProvider = serviceScope.consume(_FetchProvider__WEBPACK_IMPORTED_MODULE_1__["fetchProviderServiceKey"]);
        });
    }
    HttpClient.prototype.fetch = function (url, configuration, options, cacheConfiguration) {
        var _this = this;
        // Default fetch behavior - No caching
        // If no caching options are provided, or If Cache Provider is not present continue to API call
        if (!cacheConfiguration || !this._cacheDataProvider) {
            return this._fetch(url, configuration, options);
        }
        // Get the cache Key
        // tslint:disable-next-line:no-any
        var cacheKey = this._cacheDataProvider.getCacheKey(url, configuration, options);
        // Fetch data and Cache according to the cacheConfiguration
        return _caching_CacheManager__WEBPACK_IMPORTED_MODULE_5__["CacheManager"].fetchAndCache(cacheKey, this._cacheDataProvider, cacheConfiguration, function () { return _this._fetch(url, configuration, options); });
    };
    HttpClient.prototype.get = function (url, configuration, options, cacheConfiguration) {
        if (cacheConfiguration) {
            return this.fetch(url, configuration, _HttpClientHelper__WEBPACK_IMPORTED_MODULE_4__["default"].overrideHttpMethod(options, 'GET'), cacheConfiguration);
        }
        else {
            return this.fetch(url, configuration, _HttpClientHelper__WEBPACK_IMPORTED_MODULE_4__["default"].overrideHttpMethod(options, 'GET'));
        }
    };
    /**
     * Calls fetch(), but sets the method to "POST".
     *
     * @param url - the URL to fetch
     * @param configuration - determines the default behavior of HttpClient; normally this should
     *   be the latest version number from HttpClientConfigurations
     * @param options - additional options that affect the request
     * @returns A promise with behavior similar to WHATWG fetch().  This promise will resolve normally
     * (with {@link HttpClientResponse.ok} being false) for error status codes such as HTTP 404
     * or 500.  The promise will only reject for network failures or other errors that prevent communication
     * with the server.
     */
    HttpClient.prototype.post = function (url, configuration, options) {
        return this._fetch(url, configuration, _HttpClientHelper__WEBPACK_IMPORTED_MODULE_4__["default"].overrideHttpMethod(options, 'POST'));
    };
    HttpClient.prototype._fetch = function (url, configuration, options) {
        return _HttpClientHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fetchCore(configuration, new Request(url, options), this._serviceScope, this._fetchProvider, HttpClient._className).then(function (response) {
            return new _HttpClientResponse__WEBPACK_IMPORTED_MODULE_3__["default"](response);
        });
    };
    Object.defineProperty(HttpClient.prototype, "_cacheDataProvider", {
        /**
         * Gets the cache data provider
         */
        // tslint:disable-next-line:no-any
        get: function () {
            if (!this._cacheProvider) {
                this._cacheProvider = this._serviceScope.consume(Object(_caching_CacheDataProviderService__WEBPACK_IMPORTED_MODULE_6__["getCacheDataProviderServiceKey"])())._provider;
            }
            return this._cacheProvider;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * The standard predefined HttpClientConfiguration objects for use with
     * the HttpClient class.
     */
    HttpClient.configurations = _HttpClientConfiguration__WEBPACK_IMPORTED_MODULE_2__["predefinedConfigurations"];
    /**
     * The service key for HttpClient.
     *
     * @public
     */
    HttpClient.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceKey"].create('sp-http:HttpClient', HttpClient);
    HttpClient._className = 'HttpClient';
    return HttpClient;
}());
/* harmony default export */ __webpack_exports__["default"] = (HttpClient);


/***/ }),

/***/ "MGiw":
/*!************************************************!*\
  !*** ./lib/oauthTokenProvider/AadConstants.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Internal constants used for the AadTokenProvider
 * @internal
 */
var AadConstants = /** @class */ (function () {
    function AadConstants() {
    }
    /**
     * This string contains the resource used for the login reply URL. This resource
     * will wait until the id token has been retrieved.
     */
    AadConstants.SPFX_SINGLE_SIGN_ON_REPLY_URL = 'spfxsinglesignon.aspx';
    /**
     * This GUID is the unique identifier for SharePoint Online Web Client Extensibility Application Principal.
     * @remarks
     * For more information about Application and Service Principals, see
     * {@link https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-application-objects}
     */
    AadConstants.PRE_AUTHORIZED_APP_PRINCIPAL_ID = '08e18876-6177-487e-b8b5-cf950c1e598c';
    /**
     * Set of error codes that cannot be resolved by user interation.
     * {@link https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-aadsts-error-codes}
     */
    AadConstants.UNRESOLVABLE_AAD_ERROR_CODES = new Set([
        'AADSTS65001',
        'AADSTS53000',
        'AADSTS53003',
        'AADSTS500011',
        'AADSTS500341' // User Account deleted
    ]);
    /**
     * Set of error codes that can be resolved by a full page redirect to Azure AD.
     * {@link https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-aadsts-error-codes}
     */
    AadConstants.RESOLVABLE_AAD_ERROR_CODES = new Set([
        'AADSTS50058',
        'AADSTS50076',
        'AADSTS50078',
        'AADSTS50079',
        'AADSTS50132',
        'AADSTS50133',
        'AADSTS50158',
        'AADSTS90033' // transient error
    ]);
    /**
     * Set of error codes that we mark as expected.
     * {@link https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-aadsts-error-codes}
     */
    AadConstants.EXPECTED_AAD_ERRORS = new Set([
        'AADSTS53000',
        'AADSTS53003',
        'AADSTS50076',
        'AADSTS50079',
        'AADSTS50132',
        'AADSTS50133',
        'AADSTS50158',
        'AADSTS50173',
        'AADSTS500011',
        'AADSTS500341',
        'AADSTS700082',
        'AADSTS90033' // transient error
    ]);
    /**
     * Error code from AAD for login required.
     * {@link https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-aadsts-error-codes}
     */
    AadConstants.LOGIN_REQUIRED = 'AADSTS50058';
    /**
     * Error code from AAD for timeout
     */
    AadConstants.TOKEN_RENEWAL_TIMEOUT = 'token_renewal_error';
    /**
     * Error code from AAD for network error
     */
    AadConstants.ENDPOINTS_RESOLUTION_ERROR = 'endpoints_resolution_error';
    /**
     * Set of error codes that can be resolved by a full page redirect to Azure AD.
     * {@link https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-handling-exceptions}
     */
    AadConstants.RESOLVABLE_ERROR_CODES = new Set([
        'interaction_required',
        'login_required'
    ]);
    /**
     * This string contains the ID of the Office 365 SharepointOnline AAD Application
     * , which is the same across all tenants
     */
    AadConstants.OFFICE_365_SHAREPOINT_ONLINE_ID = '00000003-0000-0ff1-ce00-000000000000';
    /**
     * This string contains the link to SPO third party app Identifier Uri
     */
    AadConstants.SPO_THIRD_PARTY_APP_IDENTIFIER_URI = 'https://microsoft.spfx3rdparty.com';
    return AadConstants;
}());
/* harmony default export */ __webpack_exports__["default"] = (AadConstants);


/***/ }),

/***/ "NJ9J":
/*!********************************!*\
  !*** ./lib/SPHttpStrings.resx ***!
  \********************************/
/*! exports provided: additionalCredentialsWarning, servicePrincipalNotAvaliableError, graphClientInitializationError, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"additionalCredentialsWarning\":\"additionalCredentialsWarning\",\"servicePrincipalNotAvaliableError\":\"servicePrincipalNotAvaliableError\",\"graphClientInitializationError\":\"graphClientInitializationError\"}");

/***/ }),

/***/ "Pac7":
/*!*************************************************!*\
  !*** ./lib/caching/CacheDataProviderService.js ***!
  \*************************************************/
/*! exports provided: CacheDataProviderService, getCacheDataProviderServiceKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheDataProviderService", function() { return CacheDataProviderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCacheDataProviderServiceKey", function() { return getCacheDataProviderServiceKey; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @copyright (c) Microsoft Corporation. All rights reserved.
 */

/**
 * The CacheDataProviderService used for injecting CacheDataprovider singelton to SPHttpClient
 *
 * @internal
 */
var CacheDataProviderService = /** @class */ (function () {
    /**
     * Initializes a new instance of the CacheDataProviderService class.
     * @param serviceScope - The service scope.
     */
    function CacheDataProviderService(serviceScope) {
        // do nothing
    }
    Object.defineProperty(CacheDataProviderService.prototype, "_provider", {
        /**
         * Gets or sets the cache data provider
         *
         * @internal
         */
        get: function () {
            return this._cacheDataProvider;
        },
        set: function (provider) {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(provider, 'Cache provider can not be null or undefined');
            if (provider.isDisposed) {
                throw new Error('Cache provider can not be disposed');
            }
            if (this._cacheDataProvider) {
                throw new Error('Cache provider can only be set once');
            }
            this._cacheDataProvider = provider;
        },
        enumerable: false,
        configurable: true
    });
    return CacheDataProviderService;
}());

/**
 * Gets the service key.
 *
 * @internal
 */
function getCacheDataProviderServiceKey() {
    if (!CacheDataProviderService.serviceKey) {
        CacheDataProviderService.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceKey"].create('sp-http:CacheDataProvider', CacheDataProviderService);
    }
    return CacheDataProviderService.serviceKey;
}


/***/ }),

/***/ "Qacf":
/*!*****************************************!*\
  !*** ./lib/spHttpClient/DigestCache.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _httpClient_FetchProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../httpClient/FetchProvider */ "UE6e");
/**
 * @copyright Microsoft Corporation. All rights reserved.
 */



/**
 * {@inheritDoc IDigestCache}
 *
 * @public
 */
var DigestCache = /** @class */ (function () {
    function DigestCache(serviceScope) {
        var _this = this;
        this._digestsByUrl = new Map();
        serviceScope.whenFinished(function () {
            _this._fetchProvider = serviceScope.consume(_httpClient_FetchProvider__WEBPACK_IMPORTED_MODULE_2__["fetchProviderServiceKey"]);
            _this._timeProvider = serviceScope.consume(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["TimeProvider"].serviceKey);
        });
    }
    /**
     * {@inheritDoc IDigestCache.fetchDigest}
     */
    DigestCache.prototype.fetchDigest = function (webUrl) {
        var _this = this;
        var normalizedWebUrl = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["UrlUtilities"].removeEndSlash(webUrl);
        var cachedDigest = this._digestsByUrl.get(normalizedWebUrl);
        if (cachedDigest) {
            var timestamp = this._timeProvider.getDate().getTime();
            if (timestamp < cachedDigest.expirationTimestamp) {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logVerbose(DigestCache._logSource, 'DigestCache: Reusing cached digest.  Expiration: ' + cachedDigest.expirationTimestamp);
                return Promise.resolve(cachedDigest.value);
            }
        }
        // If it wasn't in the cache, then we need to fetch a new one.
        // Create the REST API URL
        var digestUrl = normalizedWebUrl + '/_api/contextinfo';
        // NOTE: We don't want people to be injecting random headers throughout
        // their code.  As SPHttpClient evolves, maybe there is some way we can
        // combine this with the headers being added there.
        var rawRequest = new Request(digestUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json;odata=verbose;charset=utf-8'
            },
            credentials: 'same-origin',
            cache: 'no-cache'
        });
        var preFetchDigestTime = this._timeProvider.getDate().getTime();
        return this._fetchProvider
            .fetch(rawRequest)
            .then(function (response) {
            return response.json();
        })
            .then(function (responseObject) {
            var digestValue = responseObject.FormDigestValue;
            var seconds = responseObject.FormDigestTimeoutSeconds;
            var expirationTimeMs = preFetchDigestTime + 1000 * seconds - DigestCache.REST_EXPIRATION_SLOP_MS;
            _this.addDigestToCache(normalizedWebUrl, digestValue, expirationTimeMs);
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logVerbose(DigestCache._logSource, 'DigestCache: Fetched new digest');
            return digestValue;
        });
    };
    /**
     * {@inheritDoc IDigestCache.addDigestToCache}
     */
    DigestCache.prototype.addDigestToCache = function (webUrl, digestValue, expirationTimestamp) {
        // Don't use bad digest to the cache
        var currentTimestamp = this._timeProvider.getDate().getTime();
        if (currentTimestamp < expirationTimestamp) {
            var normalizedWebUrl = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["UrlUtilities"].removeEndSlash(webUrl);
            var newCachedDigest = {
                value: digestValue,
                expirationTimestamp: expirationTimestamp
            };
            this._digestsByUrl.set(normalizedWebUrl, newCachedDigest);
        }
    };
    /**
     * {@inheritDoc IDigestCache.clearDigest}
     */
    DigestCache.prototype.clearDigest = function (webUrl) {
        var normalizedWebUrl = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["UrlUtilities"].removeEndSlash(webUrl);
        var found = this._digestsByUrl.delete(normalizedWebUrl);
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logVerbose(DigestCache._logSource, "DigestCache: Requested to clear cache entry: " + (found ? 'found' : 'not found'));
        return found;
    };
    /**
     * {@inheritDoc IDigestCache.clearAllDigests}
     */
    DigestCache.prototype.clearAllDigests = function () {
        this._digestsByUrl.clear();
    };
    /**
     * The service key for IDigestCache.
     */
    DigestCache.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["ServiceKey"].create('sp-client-base:DigestCache', DigestCache);
    // The digest cache expiration times are measured from whenever the C# code on the server
    // generated the digest, whereas in the current implementation, we start measuring from
    // whenever the user navigated to the current page. We don’t know how much time elapsed
    // between those two times (e.g. due to a page taking unusually long to load on the server
    // or a sluggish browser), so we conservatively subtract 30 seconds from
    // SPWebApplication.FormDigestSettings.Timeout (whose default is 30 minutes). If for some reason an
    // admin had configured the timeout to be very short, then the preloaded value can’t be used at all,
    // but this isn’t a big deal since the REST call is measured accurately and has a much smaller slop.
    // Estimates any noise e.g. due to server clocks being slightly out of sync, or the browser
    // clock being imprecise
    DigestCache.REST_EXPIRATION_SLOP_MS = 15000; // 15 secs
    DigestCache._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_LogSource"].create('DigestCache');
    return DigestCache;
}());
/* harmony default export */ __webpack_exports__["default"] = (DigestCache);


/***/ }),

/***/ "UE6e":
/*!*****************************************!*\
  !*** ./lib/httpClient/FetchProvider.js ***!
  \*****************************************/
/*! exports provided: default, fetchProviderServiceKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProviderServiceKey", function() { return fetchProviderServiceKey; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

/**
 * The default implementation of IFetchProvider, which simply calls window.fetch().
 */
var FetchProvider = /** @class */ (function () {
    function FetchProvider(serviceScope) {
        // (this constructor is currently unused, but it is required by the
        // ServiceKey.create() contract)
    }
    FetchProvider.prototype.fetch = function (request) {
        return window.fetch(request);
    };
    return FetchProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (FetchProvider);
/**
 * The service key for IFetchProvider.
 *
 * @alpha
 */
var fetchProviderServiceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceKey"].create('sp-client-base:FetchProvider', FetchProvider);


/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "Xwc3":
/*!****************************************************!*\
  !*** ./lib/aadHttpClient/AadHttpClientResponse.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _httpClient_HttpClientResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../httpClient/HttpClientResponse */ "0v/C");


/**
 * The Response subclass returned by methods such as `AadHttpClient.fetch()`.
 * Class that extends HttpClientResponse adding additional functionality specific
 * to the AadHttpClient.
 * @public
 */
var AadHttpClientResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AadHttpClientResponse, _super);
    function AadHttpClientResponse(response, tokenFetchRequestTime) {
        var _this = _super.call(this, response) || this;
        _this._tokenFetchRequestTime = tokenFetchRequestTime;
        return _this;
    }
    return AadHttpClientResponse;
}(_httpClient_HttpClientResponse__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (AadHttpClientResponse);


/***/ }),

/***/ "ZcCP":
/*!*********************************************!*\
  !*** ./lib/caching/IRequestCacheOptions.js ***!
  \*********************************************/
/*! exports provided: CacheStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheStrategy", function() { return CacheStrategy; });
/**
 * @copyright (c) Microsoft Corporation. All rights reserved.
 */
/**
 * Represents the Cache Strategy to be used by the cached request
 *
 * @internal
 */
// tslint:disable-next-line:typedef variable-name
var CacheStrategy = {
    /**
     * Serves from the server
     */
    NetworkOnly: 0,
    /**
     * Serves from the cache if available or undefined
     */
    CacheOnly: 1,
    /**
     * Serves from the cache if available
     * Sends network request only if cache is stale or not available
     * Update the cache with network data if network call is made
     */
    CacheThenNetwork: 2,
    /**
     * Serves from the cache if available, and makes an async
     * network request to update the cache with fresh data.
     */
    CacheAndNetwork: 3
};


/***/ }),

/***/ "bLht":
/*!********************************************!*\
  !*** ./lib/msGraphClient/MSGraphClient.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _oauthTokenProvider_AadTokenProviders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../oauthTokenProvider/AadTokenProviders */ "KkUw");
/* harmony import */ var _graphHttpClient_GraphHttpClientContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphHttpClient/GraphHttpClientContext */ "iDX0");
/* harmony import */ var _SPHttpStrings_resx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SPHttpStrings.resx */ "NJ9J");
var _SPHttpStrings_resx__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../SPHttpStrings.resx */ "NJ9J", 1);






/**
 * MSGraphClient is used to perform REST calls against Microsoft Graph.
 *
 * @remarks The Microsoft Graph JavaScript client library is a lightweight wrapper around the
 * Microsoft Graph API. This class allows developers to start making REST calls to MSGraph without
 * needing to initialize the the MSGraph client library. If a custom configuration is desired,
 * the MSGraphClient api function needs to be provided with that custom configuration for
 * every request.
 *
 * For more information: {@link https://github.com/microsoftgraph/msgraph-sdk-javascript}
 *
 * @public
 */
var MSGraphClient = /** @class */ (function () {
    /**
     * @param serviceScope - Provides services for the MSGraphClient to consume.
     *
     * @internal
     */
    function MSGraphClient(serviceScope) {
        var _this = this;
        serviceScope.whenFinished(function () {
            MSGraphClient._graphBaseUrl = serviceScope
                .consume(_graphHttpClient_GraphHttpClientContext__WEBPACK_IMPORTED_MODULE_4__["default"].serviceKey)
                .getGraphEndpointUrl();
            if (!MSGraphClient._instance) {
                MSGraphClient._instance = _this._createGraphClientInstance(_oauthTokenProvider_AadTokenProviders__WEBPACK_IMPORTED_MODULE_3__["default"].configurable);
            }
        });
    }
    /**
     * All calls to Microsoft Graph are chained together starting with the api function.
     *
     * @remarks Path supports the following formats:
     * * me
     * * /me
     * * https://graph.microsoft.com/v1.0/me
     * * https://graph.microsoft.com/beta/me
     * * me/events?$filter=startswith(subject, 'ship')
     *
     * The authProvider and baseUrl option should not be used, as they have already been
     * provided by the framework. See the official documentation here:
     * https://github.com/microsoftgraph/msgraph-sdk-javascript
     *
     * @param path - The path for the request to MSGraph.
     * @param config - Sets the configuration for this request.
     */
    MSGraphClient.prototype.api = function (path, config) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(path, 'path');
        MSGraphClient._instance.config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, MSGraphClient._originalConfig), (config || {}));
        return MSGraphClient._instance.api(path);
    };
    MSGraphClient.prototype._createGraphClientInstance = function (tokenProvider) {
        var _this = this;
        var graphClientModule;
        if (!(MSGraphClient._window.MicrosoftGraph && MSGraphClient._window.MicrosoftGraph.Client)) {
            throw new Error(_SPHttpStrings_resx__WEBPACK_IMPORTED_MODULE_5__["graphClientInitializationError"]);
        }
        else {
            // Workaround needed to interact with the Client object.
            // See https://github.com/microsoftgraph/msgraph-sdk-javascript/issues/47 for more details
            graphClientModule = MSGraphClient._window.MicrosoftGraph.Client;
            // Removing window variable reference to MSGraphJsSdk object
            MSGraphClient._window.MicrosoftGraph = undefined;
        }
        var graphClient = graphClientModule.init({
            authProvider: function (done) {
                _this._getOAuthToken(tokenProvider)
                    .then(function (token) {
                    done(undefined /** error object */, token);
                })
                    .catch(function (e) {
                    // The IGraphRequest functions will return a rejected promise if it fails to get an OAuth2Token.
                    done(e, '');
                });
            },
            baseUrl: MSGraphClient._graphBaseUrl
        });
        MSGraphClient._originalConfig = graphClient.config;
        return graphClient;
    };
    MSGraphClient.prototype._getOAuthToken = function (tokenProvider) {
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]('MSGraphClient.FetchGraphToken');
        return tokenProvider
            .getToken(MSGraphClient._graphBaseUrl)
            .then(function (response) {
            qosMonitor.writeSuccess();
            return response;
        })
            .catch(function (error) {
            qosMonitor.writeUnexpectedFailure('FetchGraphToken', error);
            throw error;
        });
    };
    MSGraphClient._window = window;
    return MSGraphClient;
}());
/* harmony default export */ __webpack_exports__["default"] = (MSGraphClient);


/***/ }),

/***/ "czIf":
/*!*******************************************************!*\
  !*** ./lib/oauthTokenProvider/OAuthUtilityContext.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _spHttpClient_SPHttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spHttpClient/SPHttpClient */ "5q05");


var TokenUtilityLogger = /** @class */ (function () {
    function TokenUtilityLogger() {
    }
    TokenUtilityLogger.prototype.logInfo = function (message) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logVerbose(TokenUtilityLogger.logSource, message);
    };
    TokenUtilityLogger.prototype.logError = function (message) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logError(TokenUtilityLogger.logSource, new Error(message));
    };
    TokenUtilityLogger.prototype.logWarning = function (message) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logVerbose(TokenUtilityLogger.logSource, 'Warning: ' + message);
    };
    TokenUtilityLogger.logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_LogSource"].create('TokenUtility');
    return TokenUtilityLogger;
}());
/**
 * The DelegationTokenProvider's implementation was moved into the sp-client-shared
 * package so that it can be shared with other teams that are not using sp-client-base
 * platform. To support this, the sp-client-shared package defines an interface
 * ITokenUtilityContext which abstracts the basic services that are needed by that
 * code. TokenUtilityContext is our adapter that wires up this interface to the
 * corresponding services in sp-client-base; it can be considered part of the
 * internal implementation of DelegationTokenProvider; it is not intended to be
 * used by other parts of our framework.
 */
var OAuthUtilityContext = /** @class */ (function () {
    function OAuthUtilityContext(serviceScope) {
        var _this = this;
        serviceScope.whenFinished(function () {
            _this._spHttpClient = serviceScope.consume(_spHttpClient_SPHttpClient__WEBPACK_IMPORTED_MODULE_1__["default"].serviceKey);
            _this._logger = new TokenUtilityLogger();
        });
    }
    Object.defineProperty(OAuthUtilityContext.prototype, "logger", {
        get: function () {
            return this._logger;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OAuthUtilityContext.prototype, "webUrl", {
        get: function () {
            // @TODO: VSO 270783 -- Convert this into an input parameter.
            return '';
        },
        enumerable: false,
        configurable: true
    });
    OAuthUtilityContext.prototype.fetchWithDigest = function (request) {
        var _this = this;
        return request.blob().then(function (requestBody) {
            return _this._spHttpClient.fetch(request.url, _spHttpClient_SPHttpClient__WEBPACK_IMPORTED_MODULE_1__["default"].configurations.v1, {
                method: request.method,
                headers: request.headers,
                body: requestBody
            });
        });
    };
    OAuthUtilityContext.prototype.qosMonitor = function () {
        return new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_QosMonitor"](OAuthUtilityContext.qosName);
    };
    OAuthUtilityContext.qosName = 'OAuthTokenProvider';
    return OAuthUtilityContext;
}());
/* harmony default export */ __webpack_exports__["default"] = (OAuthUtilityContext);


/***/ }),

/***/ "eGlh":
/*!*******************************************************!*\
  !*** ./lib/spHttpClient/SPHttpClientConfiguration.js ***!
  \*******************************************************/
/*! exports provided: default, predefinedConfigurations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "predefinedConfigurations", function() { return predefinedConfigurations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SPHttpClientCommonConfiguration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SPHttpClientCommonConfiguration */ "ea2N");
/* harmony import */ var _ODataVersion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ODataVersion */ "GSEB");
/* harmony import */ var _httpClient_HttpClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../httpClient/HttpClient */ "LJZb");




/**
 * Configuration for {@link SPHttpClient}.
 *
 * @remarks
 * The SPHttpClientConfiguration object provides a set of switches for enabling/disabling
 * various features of the SPHttpClient class.  Normally these switches are set
 * (e.g. when calling SPHttpClient.fetch()) by providing one of the predefined defaults
 * from SPHttpClientConfigurations, however switches can also be changed via the
 * SPHttpClientConfiguration.overrideWith() method.
 *
 * @public
 */
var SPHttpClientConfiguration = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPHttpClientConfiguration, _super);
    /**
     * Constructs a new instance of SPHttpClientConfiguration with the specified flags.
     * The default values will be used for any flags that are missing or undefined.
     * If overrideFlags is specified, it takes precedence over flags.
     */
    function SPHttpClientConfiguration(flags, overrideFlags) {
        return _super.call(this, flags, overrideFlags) || this;
    }
    /**
     * @override
     */
    SPHttpClientConfiguration.prototype.overrideWith = function (sourceFlags) {
        return new SPHttpClientConfiguration(this.flags, sourceFlags);
    };
    Object.defineProperty(SPHttpClientConfiguration.prototype, "defaultSameOriginCredentials", {
        /**
         * {@inheritDoc ISPHttpClientConfiguration.defaultSameOriginCredentials}
         */
        get: function () {
            return this.flags.defaultSameOriginCredentials;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SPHttpClientConfiguration.prototype, "defaultODataVersion", {
        /**
         * {@inheritDoc ISPHttpClientConfiguration.defaultODataVersion}
         */
        get: function () {
            return this.flags.defaultODataVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SPHttpClientConfiguration.prototype, "requestDigest", {
        /**
         * {@inheritDoc ISPHttpClientConfiguration.requestDigest}
         */
        get: function () {
            return this.flags.requestDigest;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @override
     */
    SPHttpClientConfiguration.prototype.initializeFlags = function () {
        _super.prototype.initializeFlags.call(this);
        this.flags.defaultSameOriginCredentials = false;
        this.flags.defaultODataVersion = _ODataVersion__WEBPACK_IMPORTED_MODULE_2__["default"].v3;
        this.flags.requestDigest = false;
    };
    return SPHttpClientConfiguration;
}(_SPHttpClientCommonConfiguration__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (SPHttpClientConfiguration);
var predefinedConfigurations = {
    v1: new SPHttpClientConfiguration(_httpClient_HttpClient__WEBPACK_IMPORTED_MODULE_3__["default"].configurations.v1, {
        // ISPHttpClientCommonConfiguration:
        jsonRequest: true,
        jsonResponse: true,
        // ISPHttpClientConfiguration:
        defaultSameOriginCredentials: true,
        defaultODataVersion: _ODataVersion__WEBPACK_IMPORTED_MODULE_2__["default"].v4,
        requestDigest: true
    })
};


/***/ }),

/***/ "ea2N":
/*!*************************************************************!*\
  !*** ./lib/spHttpClient/SPHttpClientCommonConfiguration.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _httpClient_HttpClientConfiguration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../httpClient/HttpClientConfiguration */ "zgJL");


/**
 * Common base class for SPHttpClientConfiguration and SPHttpClientBatchConfiguration.
 *
 * @public
 */
var SPHttpClientCommonConfiguration = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPHttpClientCommonConfiguration, _super);
    /**
     * Constructs a new instance of SPHttpClientCommonConfiguration with the specified flags.
     *
     * @remarks
     * The default values will be used for any flags that are missing or undefined.
     * If overrideFlags is specified, it takes precedence over flags.
     */
    function SPHttpClientCommonConfiguration(flags, overrideFlags) {
        return _super.call(this, flags, overrideFlags) || this;
    }
    /**
     * @override
     */
    SPHttpClientCommonConfiguration.prototype.overrideWith = function (sourceFlags) {
        return new SPHttpClientCommonConfiguration(this.flags, sourceFlags);
    };
    Object.defineProperty(SPHttpClientCommonConfiguration.prototype, "jsonRequest", {
        /**
         * {@inheritDoc ISPHttpClientCommonConfiguration.jsonRequest}
         */
        get: function () {
            return this.flags.jsonRequest;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SPHttpClientCommonConfiguration.prototype, "jsonResponse", {
        /**
         * {@inheritDoc ISPHttpClientCommonConfiguration.jsonResponse}
         */
        get: function () {
            return this.flags.jsonResponse;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @override
     */
    SPHttpClientCommonConfiguration.prototype.initializeFlags = function () {
        _super.prototype.initializeFlags.call(this);
        this.flags.jsonRequest = false;
        this.flags.jsonResponse = false;
    };
    return SPHttpClientCommonConfiguration;
}(_httpClient_HttpClientConfiguration__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (SPHttpClientCommonConfiguration);


/***/ }),

/***/ "hWUW":
/*!********************************************!*\
  !*** ./lib/spHttpClient/BatchedRequest.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This is a private helper class used by SPHttpClientBatch to track the state of each
 * queued REST request.
 */
var BatchedRequest = /** @class */ (function () {
    function BatchedRequest(request) {
        var _this = this;
        /**
         * The response.  This is tracked for diagnostic purposes only.
         */
        this.response = undefined;
        this.request = request;
        // Create the promise for this request.
        this.promise = new Promise(
        // tslint:disable-next-line:no-any
        function (resolve, reject) {
            _this._resolveCallback = resolve;
            _this._rejectCallback = reject;
        });
    }
    /**
     * This resolves the BatchedRequest.promise with the provided response.
     */
    BatchedRequest.prototype.resolvePromise = function (response) {
        if (!this._resolveCallback) {
            // This should never happen
            throw new Error('The promise was already settled');
        }
        this.response = response;
        this._resolveCallback(response);
        this._resolveCallback = undefined;
        this._rejectCallback = undefined;
    };
    /**
     * This rejects the BatchedRequest.promise with the provided error.
     */
    BatchedRequest.prototype.rejectPromiseIfNotResolved = function (error) {
        if (this.response) {
            // This handles an edge case where an exception occurred after we
            // called resolvePromise() for some but not all of the BatchedRequest
            // objects.
            return;
        }
        if (!this._rejectCallback) {
            // This should never happen
            throw new Error('The promise was already settled');
        }
        this._rejectCallback(error);
        this._resolveCallback = undefined;
        this._rejectCallback = undefined;
    };
    return BatchedRequest;
}());
/* harmony default export */ __webpack_exports__["default"] = (BatchedRequest);


/***/ }),

/***/ "iDX0":
/*!*******************************************************!*\
  !*** ./lib/graphHttpClient/GraphHttpClientContext.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

/**
 * This class is useful for getting configuration properties to the GraphHttpClient
 * @internal
 */
var GraphHttpClientContext = /** @class */ (function () {
    function GraphHttpClientContext(serviceScope) {
        // Service Scope Pattern
    }
    /**
     * The initialize function should be called before the application/components
     * have a chance to make a GraphHttpClient request.
     */
    GraphHttpClientContext.prototype.initialize = function (webServerRelativeUrl, graphEndpointUrl, webAbsoluteUrl) {
        if (this._isInitialized) {
            throw new Error('GraphHttpClientContext has already been initialized.');
        }
        this._isInitialized = true;
        this._webServerRelativeUrl = webServerRelativeUrl;
        this._graphEndpointUrl = graphEndpointUrl;
        this._webAbsoluteUrl = webAbsoluteUrl;
    };
    /**
     * Gets the Microsoft Graph endpoint for the current environment. This value is set by
     * the initialize function. If the value is not set, this function will throw.
     */
    GraphHttpClientContext.prototype.getGraphEndpointUrl = function () {
        if (!this._isInitialized) {
            throw new Error('This operation cannot be performed until the GraphHttpClientContext is initialized.');
        }
        return this._graphEndpointUrl;
    };
    /**
     * Gets the webServerRelative url of the current page. This value is set by
     * the initialize function. If the value is not set, this function will throw.
     */
    GraphHttpClientContext.prototype.getWebServerRelativeUrl = function () {
        if (!this._isInitialized) {
            throw new Error('This operation cannot be performed until the GraphHttpClientContext is initialized.');
        }
        return this._webServerRelativeUrl;
    };
    /**
     * Gets the webAbsoluteUrl of the current page. This value is set by
     * the initialize function. If the value is not set, this function will throw.
     */
    GraphHttpClientContext.prototype.getWebAbsoluteUrl = function () {
        if (!this._isInitialized) {
            throw new Error('This operation cannot be performed until the GraphHttpClientContext is initialized.');
        }
        return this._webAbsoluteUrl;
    };
    /**
     * The service key for GraphHttpClientContext.
     */
    GraphHttpClientContext.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceKey"].create('sp-http:GraphHttpClientContext', GraphHttpClientContext);
    return GraphHttpClientContext;
}());
/* harmony default export */ __webpack_exports__["default"] = (GraphHttpClientContext);


/***/ }),

/***/ "jtSf":
/*!****************************************************!*\
  !*** ./lib/oauthTokenProvider/AadTokenProvider.js ***!
  \****************************************************/
/*! exports provided: BeforeRedirectEventArgs, TokenAcquisitionEventArgs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeRedirectEventArgs", function() { return BeforeRedirectEventArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenAcquisitionEventArgs", function() { return TokenAcquisitionEventArgs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Arguments for before redirecting for a full page authentication
 * @public
 */
var BeforeRedirectEventArgs = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BeforeRedirectEventArgs, _super);
    function BeforeRedirectEventArgs(redirectUrl, cancel) {
        var _this = _super.call(this) || this;
        _this.redirectUrl = redirectUrl;
        _this.cancel = cancel;
        return _this;
    }
    return BeforeRedirectEventArgs;
}(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["SPEventArgs"]));

/**
 * Arguments for a token acquisition failure event.
 * @public
 */
var TokenAcquisitionEventArgs = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TokenAcquisitionEventArgs, _super);
    function TokenAcquisitionEventArgs(message, redirectUrl) {
        var _this = _super.call(this) || this;
        _this.message = message;
        _this.redirectUrl = redirectUrl;
        return _this;
    }
    return TokenAcquisitionEventArgs;
}(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["SPEventArgs"]));

/**
 * This class allows a developer to obtain OAuth2 tokens from Azure AD.
 *
 * OAuth2 tokens are used to authenticate the user from the SharePoint page
 * to other services such as PowerBI, Sway, Exchange, Yammer, etc.
 *
 * @privateRemarks
 * AadTokenProvider is replacing the /_api.SP.OAuth.Token/Acquire endpoint
 * for authentication with ADAL.js. At some point in the near future, when Azure AD v2.0
 * can support the same scenarios as the original version, we will switch to MSAL.
 *
 * @public
 * @sealed
 */
var AadTokenProvider = /** @class */ (function () {
    /**
     * @internal
     */
    function AadTokenProvider(configuration, oboConfiguration) {
        this._aadConfiguration = configuration;
        this._oboConfiguration = oboConfiguration;
        this._tokenAcquisitionEvent = new _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["SPEvent"](AadTokenProvider._tokenAcquisitionEventId);
        this.onBeforeRedirectEvent = new _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["SPEvent"](AadTokenProvider._onBeforeRedirectEventId);
    }
    /**
     * Fetches the AAD OAuth2 token for a resource if the user that's currently logged in has
     * access to that resource.
     *
     * The OAuth2 token should not be cached by the caller since it is already cached by the method
     * itself.
     *
     * @param resourceEndpoint - the resource for which the token should be obtained
     * @param useCachedToken - Allows the developer to specify if cached tokens should be returned.
     * An example of a resourceEndpoint would be https://graph.microsoft.com
     * @returns A promise that will be fullfiled with the token or that will reject
     *          with an error message
     */
    AadTokenProvider.prototype.getToken = function (resourceEndpoint, useCachedToken) {
        if (useCachedToken === void 0) { useCachedToken = true; }
        return this._getDeferredAadTokenProvider().then(function (tokenProvider) {
            return tokenProvider.getToken(resourceEndpoint, useCachedToken);
        });
    };
    /**
     * Fetches the AAD OAuth2 token for a resource if the user that's currently logged in has
     * access to that resource.
     *
     * The OAuth2 token should not be cached by the caller since it is already cached by the method
     * itself.
     *
     * @param resourceEndpoint - the resource for which the token should be obtained
     * @param useCachedToken - Allows the developer to specify if cached tokens should be returned.
     * An example of a resourceEndpoint would be https://graph.microsoft.com
     * @returns A promise that will be fullfiled with the token or that will reject
     *          with an error message
     *
     * @internal
     */
    AadTokenProvider.prototype._getTokenInternal = function (resourceEndpoint, configuration, useCachedToken) {
        if (useCachedToken === void 0) { useCachedToken = true; }
        return this._getDeferredAadTokenProvider().then(function (tokenProvider) {
            return tokenProvider._getTokenInternal(resourceEndpoint, configuration, useCachedToken);
        });
    };
    Object.defineProperty(AadTokenProvider.prototype, "tokenAcquisitionEvent", {
        /**
         * Notifies the developer when Token Acquisition requires user action.
         * @eventproperty
         */
        get: function () {
            return this._tokenAcquisitionEvent;
        },
        enumerable: false,
        configurable: true
    });
    AadTokenProvider.prototype._getDeferredAadTokenProvider = function () {
        var _this = this;
        if (!this._aadTokenProvider) {
            this._aadTokenProvider = __webpack_require__.e(/*! import() | aadTokenProvider */ "aadTokenProvider").then(__webpack_require__.bind(null, /*! ./chunks/aadTokenProvider/DeferredAadTokenProvider */ "NUTh")).then(function (aadTokenProviderModule) {
                var deferredTokenProvider = new aadTokenProviderModule.DeferredAadTokenProvider(_this._tokenAcquisitionEvent, _this.onBeforeRedirectEvent, _this._aadConfiguration, _this._oboConfiguration);
                _this._tokenAcquisitionEvent = deferredTokenProvider.tokenAcquisitionEvent;
                return deferredTokenProvider;
            });
        }
        return this._aadTokenProvider;
    };
    /**
     * Token Acquisition Event String
     * @internal
     */
    AadTokenProvider._tokenAcquisitionEventId = 'tokenAcquisitionFailure';
    /**
     * Auth redirect Event String
     * @internal
     */
    AadTokenProvider._onBeforeRedirectEventId = 'onBeforeAuthRedirect';
    return AadTokenProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (AadTokenProvider);


/***/ }),

/***/ "kyCB":
/*!*************************************************************!*\
  !*** ./lib/graphHttpClient/GraphHttpClientConfiguration.js ***!
  \*************************************************************/
/*! exports provided: default, predefinedConfigurations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "predefinedConfigurations", function() { return predefinedConfigurations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _httpClient_HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../httpClient/HttpClient */ "LJZb");
/* harmony import */ var _httpClient_HttpClientConfiguration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../httpClient/HttpClientConfiguration */ "zgJL");



/**
 * Configuration for {@link _GraphHttpClient}.
 *
 * @remarks
 * The GraphHttpClientConfiguration object provides a set of switches for enabling/disabling
 * various features of the GraphHttpClient class.  Normally these switches are set
 * (e.g. when calling GraphHttpClient.fetch()) by providing one of the predefined defaults
 * from GraphHttpClientConfigurations, however switches can also be changed via the
 * GraphHttpClientConfiguration.overrideWith() method.
 *
 * @deprecated The GraphHttpClient class has been superceded by the MSGraphClient class.
 * @internal
 */
var GraphHttpClientConfiguration = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GraphHttpClientConfiguration, _super);
    /**
     * Constructs a new instance of GraphHttpClientCommonConfiguration with the specified flags.
     *
     * @remarks
     * The default values will be used for any flags that are missing or undefined.
     * If overrideFlags is specified, it takes precedence over flags.
     */
    function GraphHttpClientConfiguration(flags, overrideFlags) {
        return _super.call(this, flags, overrideFlags) || this;
    }
    return GraphHttpClientConfiguration;
}(_httpClient_HttpClientConfiguration__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (GraphHttpClientConfiguration);
var predefinedConfigurations = {
    v1: new GraphHttpClientConfiguration(_httpClient_HttpClient__WEBPACK_IMPORTED_MODULE_1__["default"].configurations.v1)
};


/***/ }),

/***/ "mCft":
/*!**************************************************!*\
  !*** ./lib/spHttpClient/SPHttpClientResponse.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _httpClient_HttpClientResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../httpClient/HttpClientResponse */ "0v/C");



/**
 * The Response subclass returned by methods such as SPHttpClient.fetch().
 *
 * @remarks
 * This is a placeholder.  In the future, additional SPHttpClient-specific functionality
 * may be added to this class.
 *
 * @public
 * @sealed
 */
var SPHttpClientResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPHttpClientResponse, _super);
    function SPHttpClientResponse(response) {
        return _super.call(this, response) || this;
    }
    /**
     * @override
     */
    SPHttpClientResponse.prototype.clone = function () {
        return new SPHttpClientResponse(this.nativeResponse.clone());
    };
    Object.defineProperty(SPHttpClientResponse.prototype, "correlationId", {
        /**
         * Returns the SharePoint correlation ID.
         *
         * @remarks
         *
         * The correlation ID is a Guid that can be used to associate log events that
         * are part of the same overall operation, but may originate from different services
         * or components.  SharePoint REST operations return the server's correlation ID
         * as the "sprequestguid" header.
         *
         * @returns the correlation ID, or undefined if the "sprequestguid" header was not found
         *
         * @beta
         */
        get: function () {
            if (!this._correlationId) {
                this._correlationId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Guid"].tryParse(this.headers.get("SPRequestGuid" /* SPRequestGuid */));
            }
            return this._correlationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SPHttpClientResponse.prototype, "statusMessage", {
        /**
         * User-friendly status message that includes the HTTP status, with the correlation id and version of the server.
         * @alpha
         */
        get: function () {
            var correlationId = this.headers.get('sprequestguid') || '';
            var spVersion = this.headers.get('microsoftsharepointteamservices') || '';
            return "[HTTP]:" + this.status + " - " + this.statusText + " [CorrelationId]:" + correlationId + " [Version]:" + spVersion;
        },
        enumerable: false,
        configurable: true
    });
    return SPHttpClientResponse;
}(_httpClient_HttpClientResponse__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (SPHttpClientResponse);


/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: HttpClient, HttpClientConfiguration, HttpClientResponse, DigestCache, SPHttpClient, SPHttpClientCommonConfiguration, SPHttpClientConfiguration, SPHttpClientResponse, SPHttpClientBatchConfiguration, SPHttpClientBatch, ODataVersion, OAuthTokenProvider, _AadConstants, _AadTokenProviders, _GraphHttpClient, _GraphHttpClientResponse, _GraphHttpClientConfiguration, _GraphHttpClientContext, AadTokenProvider, BeforeRedirectEventArgs, TokenAcquisitionEventArgs, AadHttpClient, AadHttpClientResponse, AadHttpClientConfiguration, AadHttpClientFactory, AadTokenProviderFactory, MSGraphClient, MSGraphClientFactory, _CacheDataProviderService, _getCacheDataProviderServiceKey, _CacheManager, _CacheStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _httpClient_HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpClient/HttpClient */ "LJZb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return _httpClient_HttpClient__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _httpClient_HttpClientConfiguration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpClient/HttpClientConfiguration */ "zgJL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpClientConfiguration", function() { return _httpClient_HttpClientConfiguration__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _httpClient_HttpClientResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./httpClient/HttpClientResponse */ "0v/C");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpClientResponse", function() { return _httpClient_HttpClientResponse__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _spHttpClient_DigestCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spHttpClient/DigestCache */ "Qacf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DigestCache", function() { return _spHttpClient_DigestCache__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _spHttpClient_SPHttpClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spHttpClient/SPHttpClient */ "5q05");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPHttpClient", function() { return _spHttpClient_SPHttpClient__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _spHttpClient_SPHttpClientCommonConfiguration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spHttpClient/SPHttpClientCommonConfiguration */ "ea2N");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPHttpClientCommonConfiguration", function() { return _spHttpClient_SPHttpClientCommonConfiguration__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _spHttpClient_SPHttpClientConfiguration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spHttpClient/SPHttpClientConfiguration */ "eGlh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPHttpClientConfiguration", function() { return _spHttpClient_SPHttpClientConfiguration__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _spHttpClient_SPHttpClientResponse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spHttpClient/SPHttpClientResponse */ "mCft");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPHttpClientResponse", function() { return _spHttpClient_SPHttpClientResponse__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _spHttpClient_SPHttpClientBatchConfiguration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spHttpClient/SPHttpClientBatchConfiguration */ "9UXQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPHttpClientBatchConfiguration", function() { return _spHttpClient_SPHttpClientBatchConfiguration__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _spHttpClient_SPHttpClientBatch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./spHttpClient/SPHttpClientBatch */ "5emJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPHttpClientBatch", function() { return _spHttpClient_SPHttpClientBatch__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _spHttpClient_ODataVersion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./spHttpClient/ODataVersion */ "GSEB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ODataVersion", function() { return _spHttpClient_ODataVersion__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _oauthTokenProvider_OAuthTokenProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./oauthTokenProvider/OAuthTokenProvider */ "21FS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OAuthTokenProvider", function() { return _oauthTokenProvider_OAuthTokenProvider__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _oauthTokenProvider_AadConstants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./oauthTokenProvider/AadConstants */ "MGiw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_AadConstants", function() { return _oauthTokenProvider_AadConstants__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _oauthTokenProvider_AadTokenProviders__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./oauthTokenProvider/AadTokenProviders */ "KkUw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_AadTokenProviders", function() { return _oauthTokenProvider_AadTokenProviders__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _graphHttpClient_GraphHttpClient__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./graphHttpClient/GraphHttpClient */ "E9FO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_GraphHttpClient", function() { return _graphHttpClient_GraphHttpClient__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _graphHttpClient_GraphHttpClientResponse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./graphHttpClient/GraphHttpClientResponse */ "BkXy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_GraphHttpClientResponse", function() { return _graphHttpClient_GraphHttpClientResponse__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _graphHttpClient_GraphHttpClientConfiguration__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./graphHttpClient/GraphHttpClientConfiguration */ "kyCB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_GraphHttpClientConfiguration", function() { return _graphHttpClient_GraphHttpClientConfiguration__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _graphHttpClient_GraphHttpClientContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./graphHttpClient/GraphHttpClientContext */ "iDX0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_GraphHttpClientContext", function() { return _graphHttpClient_GraphHttpClientContext__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _oauthTokenProvider_AadTokenProvider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./oauthTokenProvider/AadTokenProvider */ "jtSf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AadTokenProvider", function() { return _oauthTokenProvider_AadTokenProvider__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BeforeRedirectEventArgs", function() { return _oauthTokenProvider_AadTokenProvider__WEBPACK_IMPORTED_MODULE_18__["BeforeRedirectEventArgs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenAcquisitionEventArgs", function() { return _oauthTokenProvider_AadTokenProvider__WEBPACK_IMPORTED_MODULE_18__["TokenAcquisitionEventArgs"]; });

/* harmony import */ var _aadHttpClient_AadHttpClient__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./aadHttpClient/AadHttpClient */ "81oh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AadHttpClient", function() { return _aadHttpClient_AadHttpClient__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _aadHttpClient_AadHttpClientResponse__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./aadHttpClient/AadHttpClientResponse */ "Xwc3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AadHttpClientResponse", function() { return _aadHttpClient_AadHttpClientResponse__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _aadHttpClient_AadHttpClientConfiguration__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./aadHttpClient/AadHttpClientConfiguration */ "BCL6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AadHttpClientConfiguration", function() { return _aadHttpClient_AadHttpClientConfiguration__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _aadHttpClient_AadHttpClientFactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./aadHttpClient/AadHttpClientFactory */ "rE/9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AadHttpClientFactory", function() { return _aadHttpClient_AadHttpClientFactory__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _oauthTokenProvider_AadTokenProviderFactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./oauthTokenProvider/AadTokenProviderFactory */ "3H3x");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AadTokenProviderFactory", function() { return _oauthTokenProvider_AadTokenProviderFactory__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _msGraphClient_MSGraphClient__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./msGraphClient/MSGraphClient */ "bLht");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MSGraphClient", function() { return _msGraphClient_MSGraphClient__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _msGraphClient_MSGraphClientFactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./msGraphClient/MSGraphClientFactory */ "uti6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MSGraphClientFactory", function() { return _msGraphClient_MSGraphClientFactory__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _caching_CacheDataProviderService__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./caching/CacheDataProviderService */ "Pac7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_CacheDataProviderService", function() { return _caching_CacheDataProviderService__WEBPACK_IMPORTED_MODULE_26__["CacheDataProviderService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_getCacheDataProviderServiceKey", function() { return _caching_CacheDataProviderService__WEBPACK_IMPORTED_MODULE_26__["getCacheDataProviderServiceKey"]; });

/* harmony import */ var _caching_CacheManager__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./caching/CacheManager */ "pueB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_CacheManager", function() { return _caching_CacheManager__WEBPACK_IMPORTED_MODULE_27__["CacheManager"]; });

/* harmony import */ var _caching_IRequestCacheOptions__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./caching/IRequestCacheOptions */ "ZcCP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_CacheStrategy", function() { return _caching_IRequestCacheOptions__WEBPACK_IMPORTED_MODULE_28__["CacheStrategy"]; });

/**
 * Base communication layer for the SharePoint Framework
 *
 * @remarks
 * This package defines the base communication layer for
 * the SharePoint Framework.  For REST calls, it handles authentication,
 * logging, diagnostics, and batching.  It also simplifies requests by
 * adding default headers that follow the recommended best practices.
 *
 * @packagedocumentation
 */































/***/ }),

/***/ "pueB":
/*!*************************************!*\
  !*** ./lib/caching/CacheManager.js ***!
  \*************************************/
/*! exports provided: CacheManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheManager", function() { return CacheManager; });
/* harmony import */ var _IRequestCacheOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IRequestCacheOptions */ "ZcCP");

/**
 * Cache Manager for http Requests
 *
 * @internal
 */
var CacheManager = /** @class */ (function () {
    function CacheManager() {
    }
    /**
     * Fetches latest data from server or cache. Updates the cache from server if needed.
     * @param cacheKey - The cache Key
     * @param cacheProvider - The cache Provider
     * @param cacheStrategy - The Cache Strategy
     * @param serverFetch - The server fetch call
     * @param serverFetchArgs - The arguments to be used on the server fetch call
     */
    CacheManager.fetchAndCache = function (cacheKey /* tslint:disable-line:no-any */, cacheProvider, cacheConfiguration, serverFetch) {
        var cacheStrategy = cacheConfiguration.cacheStrategy;
        // 3rd party default behavior - If cacheStrategy is undefined, make a cache or network request
        if (cacheStrategy === undefined) {
            return cacheProvider
                .getData(cacheKey, cacheConfiguration)
                .then(function (cacheData) { return cacheData.data; })
                .catch(function () {
                // Cache Miss, update cache with serverData
                return CacheManager._fetchAndUpdateCache(serverFetch, cacheKey, cacheProvider, cacheConfiguration).catch(function (e) {
                    throw e;
                });
            });
        }
        // First Party Caching Strategies
        if (cacheStrategy === _IRequestCacheOptions__WEBPACK_IMPORTED_MODULE_0__["CacheStrategy"].CacheThenNetwork) {
            return CacheManager._applyCacheThenNetworkStrategy(cacheKey, cacheProvider, cacheConfiguration, serverFetch);
        }
        var cachableResponse = CacheManager._applyCacheStrategy(cacheKey, cacheProvider, cacheConfiguration, serverFetch);
        return Promise.resolve(cachableResponse);
    };
    CacheManager._applyCacheThenNetworkStrategy = function (cacheKey /* tslint:disable-line:no-any */, cacheProvider, cacheConfiguration, serverFetch) {
        var cachableResponse = {
            cachedResponse: undefined,
            serverResponse: undefined
        };
        return cacheProvider
            .getData(cacheKey, cacheConfiguration)
            .then(function (cacheData) {
            cachableResponse.cachedResponse = Promise.resolve(cacheData.data);
            if (cacheData.stats && cacheData.stats.isStale) {
                cachableResponse.serverResponse = CacheManager._fetchAndUpdateCache(serverFetch, cacheKey, cacheProvider, cacheConfiguration);
            }
            return cachableResponse;
        })
            .catch(function () {
            // Only serverData can be available and returned
            cachableResponse.serverResponse = CacheManager._fetchAndUpdateCache(serverFetch, cacheKey, cacheProvider, cacheConfiguration);
            return cachableResponse;
        });
    };
    CacheManager._applyCacheStrategy = function (cacheKey /* tslint:disable-line:no-any */, cacheProvider, cacheConfiguration, serverFetch) {
        var cacheStrategy = cacheConfiguration.cacheStrategy;
        var cachableResponse = {
            cachedResponse: undefined,
            serverResponse: undefined
        };
        if (cacheStrategy === _IRequestCacheOptions__WEBPACK_IMPORTED_MODULE_0__["CacheStrategy"].CacheOnly || cacheStrategy === _IRequestCacheOptions__WEBPACK_IMPORTED_MODULE_0__["CacheStrategy"].CacheAndNetwork) {
            cachableResponse.cachedResponse = cacheProvider
                .getData(cacheKey, cacheConfiguration)
                .then(function (cacheData) { return cacheData.data; });
        }
        if (cacheStrategy === _IRequestCacheOptions__WEBPACK_IMPORTED_MODULE_0__["CacheStrategy"].NetworkOnly || cacheStrategy === _IRequestCacheOptions__WEBPACK_IMPORTED_MODULE_0__["CacheStrategy"].CacheAndNetwork) {
            cachableResponse.serverResponse = CacheManager._fetchAndUpdateCache(serverFetch, cacheKey, cacheProvider, cacheConfiguration);
        }
        return cachableResponse;
    };
    CacheManager._fetchAndUpdateCache = function (serverFetch, cacheKey /* tslint:disable-line:no-any */, cacheProvider, cacheConfiguration) {
        return serverFetch().then(function (response) {
            if (response.clone) {
                CacheManager._updateCache(cacheKey, cacheProvider, response.clone(), cacheConfiguration);
            }
            return response;
        });
    };
    CacheManager._updateCache = function (cacheKey /* tslint:disable-line:no-any */, cacheProvider, response, cacheConfiguration) {
        // Only update the cache if the server response is valid and a non-empty response
        if (response.status >= 200 && response.status < 300 && response.status !== 204) {
            response
                .json()
                .then(function (freshData) {
                if (freshData) {
                    // Update the cache when there is fresh data available from the server
                    setTimeout(function () { return cacheProvider.setData(cacheKey, freshData, cacheConfiguration); }, 0);
                }
            })
                .catch(function (e) {
                throw e;
            });
        }
    };
    return CacheManager;
}());



/***/ }),

/***/ "rE/9":
/*!***************************************************!*\
  !*** ./lib/aadHttpClient/AadHttpClientFactory.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _oauthTokenProvider_AadTokenProviders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../oauthTokenProvider/AadTokenProviders */ "KkUw");
/* harmony import */ var _AadHttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AadHttpClient */ "81oh");



/**
 * Returns a preinitialized version of the AadHttpClient for a given resource url.
 * For more information: {@link https://docs.microsoft.com/en-us/sharepoint/dev/spfx/use-aadhttpclient}
 *
 * @public
 */
var AadHttpClientFactory = /** @class */ (function () {
    /**
     * @internal
     */
    function AadHttpClientFactory(serviceScope) {
        this._serviceScope = serviceScope;
    }
    /**
     * Returns an instance of the AadHttpClient that communicates with the current tenant's configurable
     * Service Principal.
     * @param resourceEndpoint - The target AAD application's resource endpoint.
     */
    AadHttpClientFactory.prototype.getClient = function (resourceEndpoint) {
        return Promise.resolve(new _AadHttpClient__WEBPACK_IMPORTED_MODULE_2__["default"](this._serviceScope, resourceEndpoint));
    };
    /**
     * Returns an instance of the AadHttpClient that communicates with the preconfigured
     * Service Principal.
     * @param resourceEndpoint - The target AAD application's resource endpoint.
     * @internal
     */
    AadHttpClientFactory.prototype._getStandardClient = function (resourceEndpoint) {
        return Promise.resolve(new _AadHttpClient__WEBPACK_IMPORTED_MODULE_2__["default"](this._serviceScope, resourceEndpoint, {
            configuration: _oauthTokenProvider_AadTokenProviders__WEBPACK_IMPORTED_MODULE_1__["default"].preAuthorizedConfiguration
        }));
    };
    /**
     * The service key for AadHttpClientFactory.
     */
    AadHttpClientFactory.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceKey"].create('sp-http:AadHttpClientFactory', AadHttpClientFactory);
    return AadHttpClientFactory;
}());
/* harmony default export */ __webpack_exports__["default"] = (AadHttpClientFactory);


/***/ }),

/***/ "ut3N":
/*!********************************************!*\
  !*** external "@microsoft/sp-diagnostics" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ut3N__;

/***/ }),

/***/ "uti6":
/*!***************************************************!*\
  !*** ./lib/msGraphClient/MSGraphClientFactory.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MSGraphClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MSGraphClient */ "bLht");


/**
 * Returns a preinitialized version of the MSGraphClient.
 * For more information: {@link https://docs.microsoft.com/en-us/sharepoint/dev/spfx/use-msgraph}
 *
 * @public
 */
var MSGraphClientFactory = /** @class */ (function () {
    /**
     * @param serviceScope - Provides services for the MSGraphClient to consume.
     *
     * @internal
     */
    function MSGraphClientFactory(serviceScope) {
        this._serviceScope = serviceScope;
    }
    /**
     * Returns an instance of the MSGraphClient that communicates with the current tenant's configurable
     * Service Principal.
     */
    MSGraphClientFactory.prototype.getClient = function () {
        var _this = this;
        /* tslint:disable:next-line no-any */
        if (!_MSGraphClient__WEBPACK_IMPORTED_MODULE_1__["default"]._instance) {
            /* tslint:disable:next-line max-line-length */
            return __webpack_require__.e(/*! import() | sp-http-msgraphclient */ "vendors~sp-http-msgraphclient").then(__webpack_require__.t.bind(null, /*! @microsoft/microsoft-graph-client/lib/graph-js-sdk-web */ "D9Mm", 7)).then(function () {
                return new _MSGraphClient__WEBPACK_IMPORTED_MODULE_1__["default"](_this._serviceScope);
            });
        }
        else {
            return Promise.resolve(new _MSGraphClient__WEBPACK_IMPORTED_MODULE_1__["default"](this._serviceScope));
        }
    };
    /**
     * The service key for MSGraphClientFactory.
     */
    MSGraphClientFactory.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceKey"].create('sp-http:MSGraphClientFactory', MSGraphClientFactory);
    return MSGraphClientFactory;
}());
/* harmony default export */ __webpack_exports__["default"] = (MSGraphClientFactory);


/***/ }),

/***/ "zgJL":
/*!***************************************************!*\
  !*** ./lib/httpClient/HttpClientConfiguration.js ***!
  \***************************************************/
/*! exports provided: default, predefinedConfigurations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "predefinedConfigurations", function() { return predefinedConfigurations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Configuration for HttpClient.
 *
 * @remarks
 * The HttpClientConfiguration object provides a set of switches for enabling/disabling
 * various features of the HttpClient class.  Normally these switches are set
 * (e.g. when calling HttpClient.fetch()) by providing one of the predefined defaults
 * from HttpClientConfigurations, however switches can also be changed via the
 * HttpClientConfiguration.overrideWith() method.
 *
 * @public
 */
var HttpClientConfiguration = /** @class */ (function () {
    /**
     * Constructs a new instance of HttpClientConfiguration with the specified flags.
     * The default values will be used for any flags that are missing or undefined.
     * If overrideFlags is specified, it takes precedence over flags.
     */
    function HttpClientConfiguration(flags, overrideFlags) {
        this.flags = {};
        this.initializeFlags();
        this.flags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.flags), flags), (overrideFlags || {}));
    }
    /**
     * Child classes should override this method to construct the child class type,
     * rather than the base class type.
     * @virtual
     */
    HttpClientConfiguration.prototype.overrideWith = function (sourceFlags) {
        return new HttpClientConfiguration(this.flags, sourceFlags);
    };
    /**
     * Child classes should override this method to initialize the flags object.
     * @virtual
     */
    HttpClientConfiguration.prototype.initializeFlags = function () {
        // Empty Block
    };
    return HttpClientConfiguration;
}());
/* harmony default export */ __webpack_exports__["default"] = (HttpClientConfiguration);
var predefinedConfigurations = {
    v1: new HttpClientConfiguration({})
};


/***/ })

/******/ })});;
//# sourceMappingURL=sp-http_[locale].js.map