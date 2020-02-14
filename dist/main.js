/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game1_tag/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nvar R = typeof Reflect === 'object' ? Reflect : null\nvar ReflectApply = R && typeof R.apply === 'function'\n  ? R.apply\n  : function ReflectApply(target, receiver, args) {\n    return Function.prototype.apply.call(target, receiver, args);\n  }\n\nvar ReflectOwnKeys\nif (R && typeof R.ownKeys === 'function') {\n  ReflectOwnKeys = R.ownKeys\n} else if (Object.getOwnPropertySymbols) {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target)\n      .concat(Object.getOwnPropertySymbols(target));\n  };\n} else {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target);\n  };\n}\n\nfunction ProcessEmitWarning(warning) {\n  if (console && console.warn) console.warn(warning);\n}\n\nvar NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\n  return value !== value;\n}\n\nfunction EventEmitter() {\n  EventEmitter.init.call(this);\n}\nmodule.exports = EventEmitter;\n\n// Backwards-compat with node 0.10.x\nEventEmitter.EventEmitter = EventEmitter;\n\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._eventsCount = 0;\nEventEmitter.prototype._maxListeners = undefined;\n\n// By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\nvar defaultMaxListeners = 10;\n\nfunction checkListener(listener) {\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n}\n\nObject.defineProperty(EventEmitter, 'defaultMaxListeners', {\n  enumerable: true,\n  get: function() {\n    return defaultMaxListeners;\n  },\n  set: function(arg) {\n    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {\n      throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + '.');\n    }\n    defaultMaxListeners = arg;\n  }\n});\n\nEventEmitter.init = function() {\n\n  if (this._events === undefined ||\n      this._events === Object.getPrototypeOf(this)._events) {\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n  }\n\n  this._maxListeners = this._maxListeners || undefined;\n};\n\n// Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\nEventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\n  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {\n    throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + '.');\n  }\n  this._maxListeners = n;\n  return this;\n};\n\nfunction _getMaxListeners(that) {\n  if (that._maxListeners === undefined)\n    return EventEmitter.defaultMaxListeners;\n  return that._maxListeners;\n}\n\nEventEmitter.prototype.getMaxListeners = function getMaxListeners() {\n  return _getMaxListeners(this);\n};\n\nEventEmitter.prototype.emit = function emit(type) {\n  var args = [];\n  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);\n  var doError = (type === 'error');\n\n  var events = this._events;\n  if (events !== undefined)\n    doError = (doError && events.error === undefined);\n  else if (!doError)\n    return false;\n\n  // If there is no 'error' event listener then throw.\n  if (doError) {\n    var er;\n    if (args.length > 0)\n      er = args[0];\n    if (er instanceof Error) {\n      // Note: The comments on the `throw` lines are intentional, they show\n      // up in Node's output if this results in an unhandled exception.\n      throw er; // Unhandled 'error' event\n    }\n    // At least give some kind of context to the user\n    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));\n    err.context = er;\n    throw err; // Unhandled 'error' event\n  }\n\n  var handler = events[type];\n\n  if (handler === undefined)\n    return false;\n\n  if (typeof handler === 'function') {\n    ReflectApply(handler, this, args);\n  } else {\n    var len = handler.length;\n    var listeners = arrayClone(handler, len);\n    for (var i = 0; i < len; ++i)\n      ReflectApply(listeners[i], this, args);\n  }\n\n  return true;\n};\n\nfunction _addListener(target, type, listener, prepend) {\n  var m;\n  var events;\n  var existing;\n\n  checkListener(listener);\n\n  events = target._events;\n  if (events === undefined) {\n    events = target._events = Object.create(null);\n    target._eventsCount = 0;\n  } else {\n    // To avoid recursion in the case that type === \"newListener\"! Before\n    // adding it to the listeners, first emit \"newListener\".\n    if (events.newListener !== undefined) {\n      target.emit('newListener', type,\n                  listener.listener ? listener.listener : listener);\n\n      // Re-assign `events` because a newListener handler could have caused the\n      // this._events to be assigned to a new object\n      events = target._events;\n    }\n    existing = events[type];\n  }\n\n  if (existing === undefined) {\n    // Optimize the case of one listener. Don't need the extra array object.\n    existing = events[type] = listener;\n    ++target._eventsCount;\n  } else {\n    if (typeof existing === 'function') {\n      // Adding the second element, need to change to array.\n      existing = events[type] =\n        prepend ? [listener, existing] : [existing, listener];\n      // If we've already got an array, just append.\n    } else if (prepend) {\n      existing.unshift(listener);\n    } else {\n      existing.push(listener);\n    }\n\n    // Check for listener leak\n    m = _getMaxListeners(target);\n    if (m > 0 && existing.length > m && !existing.warned) {\n      existing.warned = true;\n      // No error code for this since it is a Warning\n      // eslint-disable-next-line no-restricted-syntax\n      var w = new Error('Possible EventEmitter memory leak detected. ' +\n                          existing.length + ' ' + String(type) + ' listeners ' +\n                          'added. Use emitter.setMaxListeners() to ' +\n                          'increase limit');\n      w.name = 'MaxListenersExceededWarning';\n      w.emitter = target;\n      w.type = type;\n      w.count = existing.length;\n      ProcessEmitWarning(w);\n    }\n  }\n\n  return target;\n}\n\nEventEmitter.prototype.addListener = function addListener(type, listener) {\n  return _addListener(this, type, listener, false);\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.prependListener =\n    function prependListener(type, listener) {\n      return _addListener(this, type, listener, true);\n    };\n\nfunction onceWrapper() {\n  if (!this.fired) {\n    this.target.removeListener(this.type, this.wrapFn);\n    this.fired = true;\n    if (arguments.length === 0)\n      return this.listener.call(this.target);\n    return this.listener.apply(this.target, arguments);\n  }\n}\n\nfunction _onceWrap(target, type, listener) {\n  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };\n  var wrapped = onceWrapper.bind(state);\n  wrapped.listener = listener;\n  state.wrapFn = wrapped;\n  return wrapped;\n}\n\nEventEmitter.prototype.once = function once(type, listener) {\n  checkListener(listener);\n  this.on(type, _onceWrap(this, type, listener));\n  return this;\n};\n\nEventEmitter.prototype.prependOnceListener =\n    function prependOnceListener(type, listener) {\n      checkListener(listener);\n      this.prependListener(type, _onceWrap(this, type, listener));\n      return this;\n    };\n\n// Emits a 'removeListener' event if and only if the listener was removed.\nEventEmitter.prototype.removeListener =\n    function removeListener(type, listener) {\n      var list, events, position, i, originalListener;\n\n      checkListener(listener);\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      list = events[type];\n      if (list === undefined)\n        return this;\n\n      if (list === listener || list.listener === listener) {\n        if (--this._eventsCount === 0)\n          this._events = Object.create(null);\n        else {\n          delete events[type];\n          if (events.removeListener)\n            this.emit('removeListener', type, list.listener || listener);\n        }\n      } else if (typeof list !== 'function') {\n        position = -1;\n\n        for (i = list.length - 1; i >= 0; i--) {\n          if (list[i] === listener || list[i].listener === listener) {\n            originalListener = list[i].listener;\n            position = i;\n            break;\n          }\n        }\n\n        if (position < 0)\n          return this;\n\n        if (position === 0)\n          list.shift();\n        else {\n          spliceOne(list, position);\n        }\n\n        if (list.length === 1)\n          events[type] = list[0];\n\n        if (events.removeListener !== undefined)\n          this.emit('removeListener', type, originalListener || listener);\n      }\n\n      return this;\n    };\n\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\n\nEventEmitter.prototype.removeAllListeners =\n    function removeAllListeners(type) {\n      var listeners, events, i;\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      // not listening for removeListener, no need to emit\n      if (events.removeListener === undefined) {\n        if (arguments.length === 0) {\n          this._events = Object.create(null);\n          this._eventsCount = 0;\n        } else if (events[type] !== undefined) {\n          if (--this._eventsCount === 0)\n            this._events = Object.create(null);\n          else\n            delete events[type];\n        }\n        return this;\n      }\n\n      // emit removeListener for all listeners on all events\n      if (arguments.length === 0) {\n        var keys = Object.keys(events);\n        var key;\n        for (i = 0; i < keys.length; ++i) {\n          key = keys[i];\n          if (key === 'removeListener') continue;\n          this.removeAllListeners(key);\n        }\n        this.removeAllListeners('removeListener');\n        this._events = Object.create(null);\n        this._eventsCount = 0;\n        return this;\n      }\n\n      listeners = events[type];\n\n      if (typeof listeners === 'function') {\n        this.removeListener(type, listeners);\n      } else if (listeners !== undefined) {\n        // LIFO order\n        for (i = listeners.length - 1; i >= 0; i--) {\n          this.removeListener(type, listeners[i]);\n        }\n      }\n\n      return this;\n    };\n\nfunction _listeners(target, type, unwrap) {\n  var events = target._events;\n\n  if (events === undefined)\n    return [];\n\n  var evlistener = events[type];\n  if (evlistener === undefined)\n    return [];\n\n  if (typeof evlistener === 'function')\n    return unwrap ? [evlistener.listener || evlistener] : [evlistener];\n\n  return unwrap ?\n    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\n}\n\nEventEmitter.prototype.listeners = function listeners(type) {\n  return _listeners(this, type, true);\n};\n\nEventEmitter.prototype.rawListeners = function rawListeners(type) {\n  return _listeners(this, type, false);\n};\n\nEventEmitter.listenerCount = function(emitter, type) {\n  if (typeof emitter.listenerCount === 'function') {\n    return emitter.listenerCount(type);\n  } else {\n    return listenerCount.call(emitter, type);\n  }\n};\n\nEventEmitter.prototype.listenerCount = listenerCount;\nfunction listenerCount(type) {\n  var events = this._events;\n\n  if (events !== undefined) {\n    var evlistener = events[type];\n\n    if (typeof evlistener === 'function') {\n      return 1;\n    } else if (evlistener !== undefined) {\n      return evlistener.length;\n    }\n  }\n\n  return 0;\n}\n\nEventEmitter.prototype.eventNames = function eventNames() {\n  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\n};\n\nfunction arrayClone(arr, n) {\n  var copy = new Array(n);\n  for (var i = 0; i < n; ++i)\n    copy[i] = arr[i];\n  return copy;\n}\n\nfunction spliceOne(list, index) {\n  for (; index + 1 < list.length; index++)\n    list[index] = list[index + 1];\n  list.pop();\n}\n\nfunction unwrapListeners(arr) {\n  var ret = new Array(arr.length);\n  for (var i = 0; i < ret.length; ++i) {\n    ret[i] = arr[i].listener || arr[i];\n  }\n  return ret;\n}\n\n\n//# sourceURL=webpack:///./node_modules/events/events.js?");

/***/ }),

/***/ "./src/core/DynamicRectangle.js":
/*!**************************************!*\
  !*** ./src/core/DynamicRectangle.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rectangle */ \"./src/core/Rectangle.js\");\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ \"./src/core/Vector.js\");\n\r\n\r\n\r\nclass DynamicRectangle extends _Rectangle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(positionX, positionY, sizeX, sizeY, color, tag){\r\n        super(positionX, positionY, sizeX, sizeY, color, tag);\r\n        this.lastPosition = new _Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](positionX,positionY);\r\n        this.velocity = new _Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0, 0);\r\n    }\r\n    setVelocity(x,y){\r\n        this.velocity.x = x;\r\n        this.velocity.y = y;\r\n    }\r\n    setVelocityX(x){\r\n        this.velocity.x = x;\r\n    }\r\n    setVelocityY(y){\r\n        this.velocity.y = y;\r\n    }\r\n\r\n    update(){\r\n        this.lastPosition.x = this.position.x;\r\n        this.lastPosition.y = this.position.y;\r\n        this.position.x += this.velocity.x;\r\n        this.position.y += this.velocity.y;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (DynamicRectangle);\n\n//# sourceURL=webpack:///./src/core/DynamicRectangle.js?");

/***/ }),

/***/ "./src/core/Game.js":
/*!**************************!*\
  !*** ./src/core/Game.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameObjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObjectList */ \"./src/core/GameObjectList.js\");\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Renderer */ \"./src/core/Renderer.js\");\n/* harmony import */ var _OverlapDetector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OverlapDetector */ \"./src/core/OverlapDetector.js\");\n\r\n\r\n\r\n\r\nclass Game{\r\n    constructor(renderConfig, overlapConfig){\r\n        this.gameObjectList = new _GameObjectList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n        this.renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.getElementById('canvas').getContext('2d'), this.gameObjectList, renderConfig);\r\n        this.overlapDetector = new _OverlapDetector__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.gameObjectList, overlapConfig);\r\n    }\r\n    add(gameObject){\r\n        this.gameObjectList.add(gameObject);\r\n    }\r\n    addAll(gameObjects){\r\n        for(let gameObject of gameObjects){\r\n            this.gameObjectList.add(gameObject);\r\n        }\r\n    }\r\n    remove(gameObject){\r\n        this.gameObjectList.remove(gameObject);\r\n    }\r\n    update(timestamp){\r\n        for(let gameObject of this.gameObjectList.children){\r\n            gameObject.update(timestamp);\r\n        }\r\n        this.overlapDetector.checkOverlap();\r\n    }\r\n    render(){\r\n        this.renderer.render();\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/core/Game.js?");

/***/ }),

/***/ "./src/core/GameObject.js":
/*!********************************!*\
  !*** ./src/core/GameObject.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameObject{\r\n    constructor(tag=null){\r\n        this.parent = null;\r\n        this.id = null;\r\n        this.tag = tag;\r\n    }\r\n    _setId(id){\r\n        this.id = id;\r\n    }\r\n    setTag(tag){\r\n        this.tag = tag;\r\n    }\r\n    setParent(parent){\r\n        this.parent = parent;\r\n    }\r\n    update(timestamp){\r\n        //do nothing\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameObject);\n\n//# sourceURL=webpack:///./src/core/GameObject.js?");

/***/ }),

/***/ "./src/core/GameObjectList.js":
/*!************************************!*\
  !*** ./src/core/GameObjectList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameObjectList{\r\n    constructor(){\r\n        this.isChanged = false;\r\n        this.children = []\r\n        this.idPool = new Set();\r\n    }\r\n    \r\n    get length(){\r\n        return this.children.length;\r\n    }\r\n\r\n    add(gameObject){\r\n        let id = this._generateId();\r\n        gameObject._setId(id);\r\n        gameObject.setParent(this);\r\n        this.children.push(gameObject);\r\n        this.isChanged = true;\r\n    }\r\n    remove(gameObjectToRemove){\r\n        let index = this.children.findIndex(gameObj => gameObj.id == gameObjectToRemove.id);\r\n        this.idPool.delete(this.children[index].id);\r\n        this.children.splice(index, 1);\r\n        this.isChanged = true;\r\n    }\r\n    findObjectWithIndex(index){\r\n        return this.children[index];\r\n    }\r\n    findObjectWithTag(tag){\r\n        let index = this.children.findIndex(gameObj => gameObj.tag == tag);\r\n        return index == -1 ? null : this.children[index];\r\n    }\r\n    findObjectWithId(id){\r\n        let index = this.children.findIndex(gameObj => gameObj.id == id);\r\n        return index == -1 ? null : this.children[index];\r\n    }\r\n\r\n    //javascript is unable to console.log object realtime \r\n    //so its necessary to have this print function for debugging\r\n    print(){\r\n        let printList = [];\r\n        for(let i=0; i<this.children.length; i++){\r\n            let tempObj = Object.assign({},this.children[i]);\r\n            printList.push(tempObj);\r\n        }\r\n        console.log(printList);\r\n    }\r\n\r\n    _generateId(){\r\n        // To be improved \r\n        let id = Math.floor(Math.random()*90000) + 10000;\r\n        while(this.idPool.has(id)){\r\n            id = Math.floor(Math.random()*90000) + 10000;\r\n        }\r\n        this.idPool.add(id);\r\n        return id;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameObjectList);\n\n//# sourceURL=webpack:///./src/core/GameObjectList.js?");

/***/ }),

/***/ "./src/core/InputHandler.js":
/*!**********************************!*\
  !*** ./src/core/InputHandler.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst events = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\r\n\r\nclass InputHandler{\r\n    constructor(){\r\n        this.em = new events.EventEmitter();\r\n        this.subscribers = {\r\n            \"keyboard\": [],\r\n            \"mouse\": []\r\n        };\r\n\r\n        this.em.on('keyup', (data)=>{\r\n            this.subscribers.keyboard.forEach(s => s.notify(data))\r\n        });\r\n        this.em.on('keydown', (data)=>{\r\n            this.subscribers.keyboard.forEach(s => s.notify(data))\r\n        });\r\n        this.em.on('mousedown', (data)=>{\r\n            this.subscribers.mouse.forEach(s => s.notify(data))\r\n        });\r\n        this.em.on('mouseup', (data)=>{\r\n            this.subscribers.mouse.forEach(s => s.notify(data))\r\n        });\r\n\r\n        document.addEventListener('keydown',(event) => {\r\n            this.em.emit('keydown',{\r\n                'type': 'keydown',\r\n                'code': event.code\r\n            });\r\n        });\r\n        document.addEventListener('keyup', (event)=>{\r\n            this.em.emit('keyup',{\r\n                'type': event.type,\r\n                'code': event.code\r\n            });\r\n        });\r\n        document.addEventListener('mousedown', (event) => {\r\n            this.em.emit('mousedown',{\r\n                'type': event.type,\r\n                'clientX': event.clientX,\r\n                'clientY': event.clientY\r\n            });\r\n            console.log(`[${event.clientX}, ${event.clientY}]`);\r\n        })\r\n        document.addEventListener('mouseup', (event) => {\r\n            this.em.emit('mouseup',{\r\n                'type': event.type,\r\n                'clientX': event.clientX,\r\n                'clientY': event.clientY\r\n            });\r\n            console.log(`[${event.clientX}, ${event.clientY}]`);\r\n        })\r\n    }\r\n\r\n    subscribeBy(controllable, channel){\r\n        this.subscribers[channel].push(controllable);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputHandler);\n\n//# sourceURL=webpack:///./src/core/InputHandler.js?");

/***/ }),

/***/ "./src/core/OverlapDetector.js":
/*!*************************************!*\
  !*** ./src/core/OverlapDetector.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rectangle */ \"./src/core/Rectangle.js\");\n\r\n\r\nclass Pair{\r\n    constructor(gameObject1, gameObject2){\r\n        this.gameObject1 = gameObject1;\r\n        this.gameObject2 = gameObject2;\r\n    }\r\n    matchTag(tag1, tag2){\r\n        if(this.gameObject1.tag==tag1 && this.gameObject2.tag == tag2){\r\n           return true;\r\n        }\r\n        if(this.gameObject2.tag==tag1 && this.gameObject1.tag == tag2){\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n    findObjectWithTag(tag){\r\n        if(this.gameObject1.tag==tag && this.gameObject2.tag==tag){\r\n            return [this.gameObject1, this.gameObject2]\r\n        }\r\n        if(this.gameObject1.tag==tag){\r\n            return this.gameObject1;\r\n        }\r\n        if(this.gameObject2.tag==tag){\r\n            return this.gameObject2;\r\n        }\r\n        return null;\r\n    }\r\n}\r\n\r\nclass OverlapDetector{\r\n    constructor(gameObjectList, overlapConfig){\r\n        this.gameObjectList = gameObjectList;\r\n        this.overlapConfig = this._parseOverlapConfig(overlapConfig);\r\n    }\r\n\r\n    checkOverlap(){\r\n        for(let i=0; i<this.gameObjectList.children.length; i++){\r\n            for(let j=i+1; j<this.gameObjectList.children.length; j++){\r\n                let gameObject1 = this.gameObjectList.children[i];\r\n                let gameObject2 = this.gameObjectList.children[j];\r\n                if(this._isOverlap(gameObject1, gameObject2)){\r\n                    this._resolveOverlap(gameObject1, gameObject2);\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    _parseOverlapConfig(overlapConfig){\r\n        return overlapConfig;\r\n    }\r\n\r\n    _resolveOverlap(gameObject1, gameObject2){\r\n        let pair = new Pair(gameObject1, gameObject2);\r\n\r\n        for(let config of this.overlapConfig){\r\n            if(pair.matchTag(config.tag1,config.tag2)){\r\n                config.action(pair.findObjectWithTag(config.tag1),pair.findObjectWithTag(config.tag2), this.gameObjectList);\r\n            }\r\n        }\r\n    }\r\n    _isOverlap(gameObject1, gameObject2){\r\n        let leftRightOverlap = gameObject1.right > gameObject2.left && gameObject1.left < gameObject2.right;\r\n        let topBottomOverlap = gameObject1.top < gameObject2.bottom && gameObject1.bottom > gameObject2.top;\r\n        if (leftRightOverlap && topBottomOverlap){\r\n            return true;\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (OverlapDetector);\n\n//# sourceURL=webpack:///./src/core/OverlapDetector.js?");

/***/ }),

/***/ "./src/core/Rectangle.js":
/*!*******************************!*\
  !*** ./src/core/Rectangle.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ \"./src/core/GameObject.js\");\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ \"./src/core/Vector.js\");\n\r\n\r\n\r\nclass Rectangle extends _GameObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(positionX, positionY, sizeX, sizeY, color, tag){\r\n        super(tag);\r\n        this.color = color;\r\n        this.position = new _Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](positionX,positionY);\r\n        this.size = new _Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](sizeX,sizeY);\r\n    }\r\n    get left(){\r\n        return this.position.x;\r\n    }\r\n    get right(){\r\n        return this.position.x + this.size.x;\r\n    }\r\n    get top(){\r\n        return this.position.y;\r\n    }\r\n    get bottom(){\r\n        return this.position.y + this.size.y;\r\n    }\r\n    update(){\r\n        //do nothing\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rectangle);\n\n//# sourceURL=webpack:///./src/core/Rectangle.js?");

/***/ }),

/***/ "./src/core/Renderer.js":
/*!******************************!*\
  !*** ./src/core/Renderer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Renderer{\r\n    constructor(context, gameObjectList, renderConfig){\r\n        this.context = context;\r\n        this.gameObjectList = gameObjectList;\r\n        this.renderConfig = renderConfig;\r\n        this.renderList = null;\r\n\r\n    }\r\n    refreshRenderList(){\r\n        this.renderList = [];\r\n        for(let layer in this.renderConfig){\r\n            for(let gameObject of this.gameObjectList.children){\r\n                if(this.renderConfig[layer].includes(gameObject.tag)){\r\n                    this.renderList.push(gameObject);\r\n                }\r\n            }\r\n        }\r\n        this.gameObjectList.isChanged = false;\r\n    }\r\n    render(){\r\n        if(this.gameObjectList.isChanged || this.renderList == null){\r\n            this.refreshRenderList();\r\n        }\r\n        for(let gameObject of this.renderList){\r\n            this.context.fillStyle = gameObject.color;\r\n            this.context.fillRect(gameObject.position.x, gameObject.position.y, gameObject.size.x, gameObject.size.y);\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Renderer);\n\n//# sourceURL=webpack:///./src/core/Renderer.js?");

/***/ }),

/***/ "./src/core/Vector.js":
/*!****************************!*\
  !*** ./src/core/Vector.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Vector{\r\n    constructor(x, y){\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    add(vector2){\r\n        this.x += vector2.x;\r\n        this.y += vector2.y;\r\n    }\r\n    subtract(vector2){\r\n        this.x -= vector2.x;\r\n        this.y -= vector2.y;\r\n    }\r\n    normalized(){\r\n        let total = Math.sqrt(this.x * this.x + this.y * this.y);\r\n        let x = this.x / total;\r\n        let y = this.y / total;\r\n        return new Vector(x,y);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vector);\n\n//# sourceURL=webpack:///./src/core/Vector.js?");

/***/ }),

/***/ "./src/game1_tag/Bullet.js":
/*!*********************************!*\
  !*** ./src/game1_tag/Bullet.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Vector */ \"./src/core/Vector.js\");\n/* harmony import */ var _core_DynamicRectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/DynamicRectangle */ \"./src/core/DynamicRectangle.js\");\n\r\n\r\n\r\nclass Bullet extends _core_DynamicRectangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]{\r\n    constructor(positionX, positionY){\r\n        super(positionX, positionY, 5, 5, 'green', 'bullet');\r\n        this.owner = null;\r\n        this.initTime = null;\r\n        this.speed = 3;\r\n    }\r\n    setOwner(gameObject){\r\n        this.owner = gameObject;\r\n    }\r\n    update(timestamp){\r\n        let seconds = (timestamp/2000).toFixed(2)\r\n        this.position.add(this.velocity);\r\n        if(this.initTime == null){\r\n            this.initTime = seconds;\r\n        }\r\n        if(seconds - this.initTime > 3){\r\n            let object = this.parent.findObjectWithTag('bullet');\r\n            this.parent.remove(object);\r\n        }\r\n    }\r\n    \r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bullet);\n\n//# sourceURL=webpack:///./src/game1_tag/Bullet.js?");

/***/ }),

/***/ "./src/game1_tag/PickupManager.js":
/*!****************************************!*\
  !*** ./src/game1_tag/PickupManager.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/GameObject */ \"./src/core/GameObject.js\");\n/* harmony import */ var _core_Rectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Rectangle */ \"./src/core/Rectangle.js\");\n\r\n\r\n\r\n// ------Tagger pickups-------\r\n//BlackHole pickup\r\n//Frozen pickup\r\n//Chain pickup\r\n//Speed pickup\r\n\r\n\r\n\r\nclass BasicPickup extends _core_Rectangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]{\r\n    constructor(positionX, positionY, spawnTime){\r\n        super(positionX, positionY, 5, 5, 'orange', 'pickup');\r\n        this.type = \"basic\";\r\n        this.spawnTime = spawnTime;\r\n    }\r\n}\r\n\r\nclass ShootPickup extends _core_Rectangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]{\r\n    constructor(positionX, positionY, spawnTime){\r\n        super(positionX, positionY, 5, 5, 'red', 'pickup');\r\n        this.type = \"shoot\";\r\n        this.spawnTime = spawnTime;\r\n    }\r\n}\r\n\r\nclass BlackHolePickup extends _core_Rectangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]{\r\n    constructor(positionX, positionY, spawnTime){\r\n        super(positionX, positionY, 5, 5, 'black', 'pickup');\r\n        this.type = \"black-hole\";\r\n        this.spawnTime = spawnTime;\r\n    }\r\n}\r\n\r\nclass PickupManager extends _core_GameObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(){\r\n        super('pickupManager');\r\n        this.existDuration = 3000;\r\n        this.spawnTimeDuration = 5000;\r\n        this.lastSpawnTime = null;\r\n        this.pickupList = [];\r\n    }\r\n    update(timestamp){\r\n        super.update();\r\n        if(this.lastSpawnTime == null){\r\n            this.lastSpawnTime = timestamp;\r\n        }\r\n        if(timestamp - this.lastSpawnTime > this.spawnTimeDuration){\r\n            this.spawnPickup(timestamp);\r\n        }\r\n        for(let pickup of this.pickupList){\r\n            if(timestamp - pickup.spawnTime > this.existDuration){\r\n                this.destroy(pickup);\r\n            }\r\n        }\r\n    }\r\n    spawnPickup(spawnTime){\r\n        let choice = Math.floor(Math.random() * 3);\r\n        let x = Math.floor(Math.random()*300);\r\n        let y = Math.floor(Math.random()*300);\r\n        let pickup = null;\r\n        if(choice == 0){\r\n            pickup = new BlackHolePickup(x,y, spawnTime);\r\n        }else if(choice == 1){\r\n            pickup = new ShootPickup(x,y, spawnTime);\r\n        }else{\r\n            pickup = new BasicPickup(x,y, spawnTime);\r\n        }\r\n        this.pickupList.push(pickup);\r\n        this.parent.add(pickup);\r\n        this.lastSpawnTime = spawnTime;\r\n    }\r\n    destroy(pickupToDestroy){\r\n        let index = this.pickupList.findIndex(pickup => pickup.id == pickupToDestroy.id);\r\n        this.pickupList.splice(index, 1);\r\n        this.parent.remove(pickupToDestroy);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (PickupManager);\n\n//# sourceURL=webpack:///./src/game1_tag/PickupManager.js?");

/***/ }),

/***/ "./src/game1_tag/Player.js":
/*!*********************************!*\
  !*** ./src/game1_tag/Player.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_DynamicRectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/DynamicRectangle */ \"./src/core/DynamicRectangle.js\");\n/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bullet */ \"./src/game1_tag/Bullet.js\");\n/* harmony import */ var _core_Vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Vector */ \"./src/core/Vector.js\");\n\r\n\r\n\r\n\r\nclass Player extends _core_DynamicRectangle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(positionX, positionY, control){\r\n        super(positionX, positionY, 10, 10,'green', 'player');\r\n        this.control = control;\r\n        this.abilityType = null;\r\n        this.taggerStartTime = null;\r\n        this.taggerDuration = 4000;\r\n        this.speed = 3;\r\n    }\r\n    setState(state){\r\n        if(state == 'tagger'){\r\n            this.setTag('tagger');\r\n            this.color = 'red';\r\n        }else if(state=='player'){\r\n            this.setTag('player');\r\n            this.color = 'green';\r\n            this.speed = 3;\r\n            this.abilityType = null;\r\n        }\r\n    }\r\n    setAbilityType(abilityType){\r\n        this.abilityType = abilityType;\r\n    }\r\n    notify(event){\r\n        let up = this.control['up'];\r\n        let down = this.control['down'];\r\n        let right = this.control['right'];\r\n        let left = this.control['left'];\r\n        let ability = this.control['ability'];\r\n        if(event.type == 'keydown'){\r\n            if(event.code == up){\r\n                this.moveUp();\r\n            }else if(event.code == down){\r\n                this.moveDown();\r\n            }else if(event.code == left){\r\n                this.moveLeft();\r\n            }else if(event.code == right){\r\n                this.moveRight();\r\n            }else if(event.code == ability){\r\n                this.doAbility();\r\n            }\r\n        }\r\n        else if(event.type == 'keyup'){\r\n            if(event.code == up){\r\n                this.setVelocityY(0);\r\n            }else if(event.code == down){\r\n                this.setVelocityY(0);\r\n            }else if(event.code == left){\r\n                this.setVelocityX(0);\r\n            }else if(event.code == right){\r\n                this.setVelocityX(0);\r\n            }\r\n        }\r\n        console.log(event);\r\n    }\r\n    moveUp(){\r\n        this.velocity.y = -this.speed;\r\n    }\r\n    moveDown(){\r\n        this.velocity.y = this.speed;\r\n    }\r\n    moveLeft(){\r\n        this.velocity.x = -this.speed;\r\n    }\r\n    moveRight(){\r\n        this.velocity.x = this.speed;\r\n    }\r\n    doAbility(){\r\n        if(this.abilityType == 'black-hole'){\r\n            let player = this.parent.findObjectWithTag('player');\r\n            if(player != null){\r\n                let direction = new _core_Vector__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.position.x - player.position.x , this.position.y - player.position.y).normalized();\r\n                player.setVelocity(direction.x, direction.y);\r\n            }\r\n        }\r\n        else if(this.abilityType == 'shoot'){\r\n            let bullet = new _Bullet__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.position.x, this.position.y);\r\n            let direction = this.velocity.normalized();\r\n            let max = 1.2;\r\n            let min = 0.4;\r\n            let xRandom = Math.random() * (max - min) + min;\r\n            let yRandom = Math.random() * (max - min) + min;\r\n            bullet.setVelocity(direction.x * bullet.speed * xRandom, direction.y * bullet.speed * yRandom);\r\n            bullet.setOwner(this);\r\n            this.parent.add(bullet);\r\n        }\r\n    }\r\n    update(timestamp){\r\n        super.update();\r\n        if(this.tag == 'tagger'){\r\n            if(this.taggerStartTime==null){\r\n                this.taggerStartTime = timestamp;\r\n            }\r\n            if(timestamp - this.taggerStartTime > this.taggerDuration){\r\n                this.setState('player');\r\n                this.taggerStartTime = null;\r\n            }\r\n\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/game1_tag/Player.js?");

/***/ }),

/***/ "./src/game1_tag/index.js":
/*!********************************!*\
  !*** ./src/game1_tag/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Game */ \"./src/core/Game.js\");\n/* harmony import */ var _core_InputHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/InputHandler */ \"./src/core/InputHandler.js\");\n/* harmony import */ var _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Rectangle */ \"./src/core/Rectangle.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Player */ \"./src/game1_tag/Player.js\");\n/* harmony import */ var _PickupManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PickupManager */ \"./src/game1_tag/PickupManager.js\");\n/* harmony import */ var _core_Vector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Vector */ \"./src/core/Vector.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet renderConfig = {\r\n    0:['background'],\r\n    1:['obstacle'],\r\n    2:['rectangle', 'pickup'],\r\n    3:['player','tagger', 'bullet'],\r\n    4:[]\r\n}\r\nconst overlapConfig = [\r\n    {\r\n        tag1: 'player',\r\n        tag2: 'pickup',\r\n        action: (player, pickup, gameObjectList) => {\r\n            player.setState('tagger');\r\n            player.setAbilityType(pickup.type);\r\n            if(pickup.type == 'shoot'){\r\n                player.speed = 0.5;\r\n            }\r\n            gameObjectList.findObjectWithTag('pickupManager').destroy(pickup);\r\n        }\r\n    },\r\n    {\r\n        tag1: 'player',\r\n        tag2: 'obstacle',\r\n        action: (player, obstacle, gameObjectList) => {\r\n            player.position.x = player.lastPosition.x;\r\n            player.position.y = player.lastPosition.y;\r\n        }\r\n    },\r\n    {\r\n        tag1: 'tagger',\r\n        tag2: 'obstacle',\r\n        action: (player, obstacle, gameObjectList) => {\r\n            player.position.x = player.lastPosition.x;\r\n            player.position.y = player.lastPosition.y;\r\n        }\r\n    },\r\n    {\r\n        tag1: 'player',\r\n        tag2: 'tagger',\r\n        action: (player, tagger, gameObjectList) => {\r\n            gameObjectList.remove(player);\r\n        }\r\n    },\r\n    {\r\n        tag1: 'player',\r\n        tag2: 'bullet',\r\n        action: (player, bullet, gameObjectList) => {\r\n            if(bullet.owner != player){\r\n                gameObjectList.remove(player);\r\n            }\r\n        }\r\n    },\r\n    \r\n]\r\n\r\nconst game = new _core_Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](renderConfig, overlapConfig);\r\nlet inputhandler = new _core_InputHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nlet background = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0,0,400,400,'white','background');\r\nlet wall1 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0,0,400,10,'green','obstacle');\r\nlet wall2 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0,0,10,400,'green','obstacle');\r\nlet wall3 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](390,0,10,400,'green','obstacle');\r\nlet wall4 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0,390,400,10,'green','obstacle');\r\n\r\nlet wall5 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](50,50,10,100,'green','obstacle');\r\nlet wall6 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](50,250,10,100,'green','obstacle');\r\n\r\nlet wall7 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](150,50,10,100,'green','obstacle');\r\nlet wall8 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](150,250,10,100,'green','obstacle');\r\n\r\nlet wall9 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](250,50,10,100,'green','obstacle');\r\nlet wall10 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](250,250,10,100,'green','obstacle');\r\n\r\nlet wall11 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](350,50,10,100,'green','obstacle');\r\nlet wall12 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](350,250,10,100,'green','obstacle');\r\n\r\nlet setup = [background, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12];\r\nlet player1 = new _Player__WEBPACK_IMPORTED_MODULE_3__[\"default\"](20,20, {\r\n    'up': 'KeyW',\r\n    'down': 'KeyS',\r\n    'left': 'KeyA',\r\n    'right': 'KeyD',\r\n    'ability': 'Space'\r\n});\r\nlet player2 = new _Player__WEBPACK_IMPORTED_MODULE_3__[\"default\"](370,370,{\r\n    'up': 'ArrowUp',\r\n    'down': 'ArrowDown',\r\n    'left': 'ArrowLeft',\r\n    'right': 'ArrowRight',\r\n    'ability':'Numpad0'\r\n});\r\nlet pickupManager = new _PickupManager__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\r\ninputhandler.subscribeBy(player1, \"keyboard\");\r\ninputhandler.subscribeBy(player2, \"keyboard\");\r\ngame.add(pickupManager);\r\ngame.addAll(setup);\r\ngame.add(player1);\r\ngame.add(player2);\r\n\r\nfunction start(){\r\n    function frame(timestamp){\r\n        game.update(timestamp);\r\n        game.render();\r\n        requestAnimationFrame(frame);\r\n    }\r\n    requestAnimationFrame(frame);\r\n}\r\nstart();\r\n\n\n//# sourceURL=webpack:///./src/game1_tag/index.js?");

/***/ })

/******/ });