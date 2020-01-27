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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Bullet.js":
/*!***********************!*\
  !*** ./src/Bullet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ \"./src/Vector.js\");\n/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rectangle */ \"./src/Rectangle.js\");\n\r\n\r\n\r\nclass Bullet extends _Rectangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]{\r\n    constructor(positionX, positionY){\r\n        super(positionX, positionY, 5, 5, 'yellow', 'bullet');\r\n        this.velocity = new _Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0);\r\n        this.owner = null;\r\n        this.initTime = null;\r\n    }\r\n    setVelocity(x,y){\r\n        this.velocity.x = x;\r\n        this.velocity.y = y;\r\n    }\r\n    setOwner(gameObject){\r\n        this.owner = gameObject;\r\n    }\r\n    update(timestamp){\r\n        let seconds = (timestamp/1000).toFixed(2)\r\n        this.position.add(this.velocity);\r\n        if(this.initTime == null){\r\n            this.initTime = seconds;\r\n        }\r\n        if(seconds - this.initTime > 3){\r\n            let object = this.parent.findObjectWithTag('bullet');\r\n            this.parent.remove(object);\r\n        }\r\n    }\r\n    \r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bullet);\n\n//# sourceURL=webpack:///./src/Bullet.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameObjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObjectList */ \"./src/GameObjectList.js\");\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Renderer */ \"./src/Renderer.js\");\n/* harmony import */ var _OverlapDetector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OverlapDetector */ \"./src/OverlapDetector.js\");\n\r\n\r\n\r\n\r\nclass Game{\r\n    constructor(document, renderConfig){\r\n        this.gameObjectList = new _GameObjectList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n        this.document = document;\r\n        this.renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.getElementById('canvas').getContext('2d'), this.gameObjectList, renderConfig);\r\n        this.overlapDetector = new _OverlapDetector__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.gameObjectList);\r\n    }\r\n    add(gameObject){\r\n        this.gameObjectList.add(gameObject);\r\n    }\r\n    remove(gameObject){\r\n        this.gameObjectList.remove(gameObject);\r\n    }\r\n    update(timestamp){\r\n        for(let gameObject of this.gameObjectList.children){\r\n            gameObject.update(timestamp);\r\n        }\r\n        this.overlapDetector.checkOverlap();\r\n    }\r\n    render(){\r\n        this.renderer.render();\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/Game.js?");

/***/ }),

/***/ "./src/GameObject.js":
/*!***************************!*\
  !*** ./src/GameObject.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameObject{\r\n    constructor(tag){\r\n        this.parent = null;\r\n        this.id = null;\r\n        this.tag = tag;\r\n    }\r\n    _setId(id){\r\n        this.id = id;\r\n    }\r\n    setParent(parent){\r\n        this.parent = parent;\r\n    }\r\n    update(timestamp){\r\n        //do nothing\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameObject);\n\n//# sourceURL=webpack:///./src/GameObject.js?");

/***/ }),

/***/ "./src/GameObjectList.js":
/*!*******************************!*\
  !*** ./src/GameObjectList.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameObjectList{\r\n    constructor(){\r\n        this.isChanged = false;\r\n        this.children = []\r\n        this.idPool = new Set();\r\n    }\r\n    add(gameObject){\r\n        let id = this._generateId();\r\n        gameObject._setId(id);\r\n        gameObject.setParent(this);\r\n        this.children.push(gameObject);\r\n        this.isChanged = true;\r\n    }\r\n    remove(gameObject){\r\n        let index = this.children.findIndex(gameObj => gameObj.id == gameObject.id);\r\n        this.idPool.delete(this.children[index].id);\r\n        this.children.splice(index, 1);\r\n        this.isChanged = true;\r\n    }\r\n    get length(){\r\n        return this.children.length;\r\n    }\r\n    findObjectWithIndex(index){\r\n        return this.children[index];\r\n    }\r\n    findObjectWithTag(tag){\r\n        let index = this.children.findIndex(gameObj => gameObj.tag == tag);\r\n        return this.children[index];\r\n    }\r\n    findObjectWithId(id){\r\n        let index = this.children.findIndex(gameObj => gameObj.id == id);\r\n        return this.children[index];\r\n    }\r\n\r\n    //javascript is unable to console.log object realtime \r\n    //so its necessary to have this print function for debugging\r\n    print(){\r\n        let printList = [];\r\n        for(let i=0; i<this.children.length; i++){\r\n            let tempObj = Object.assign({},this.children[i]);\r\n            printList.push(tempObj);\r\n        }\r\n        console.log(printList);\r\n    }\r\n\r\n    _generateId(){\r\n        let id = Math.floor(Math.random()*90000) + 10000;\r\n        while(this.idPool.has(id)){\r\n            id = Math.floor(Math.random()*90000) + 10000;\r\n        }\r\n        this.idPool.add(id);\r\n        return id;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameObjectList);\n\n//# sourceURL=webpack:///./src/GameObjectList.js?");

/***/ }),

/***/ "./src/InputHandler.js":
/*!*****************************!*\
  !*** ./src/InputHandler.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass InputHandler{\r\n    constructor(document){\r\n    }\r\n    register(controllable,eventType, keycode, action){\r\n        document.addEventListener(eventType, function(event){\r\n            if(event.code == keycode){\r\n                action(controllable);\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputHandler);\n\n//# sourceURL=webpack:///./src/InputHandler.js?");

/***/ }),

/***/ "./src/OverlapDetector.js":
/*!********************************!*\
  !*** ./src/OverlapDetector.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rectangle */ \"./src/Rectangle.js\");\n\r\n\r\nclass OverlapDetector{\r\n    constructor(gameObjectList){\r\n        this.gameObjectList = gameObjectList;\r\n    }\r\n    \r\n    addInteraction(tag1, tag2, interactionFunction){\r\n        \r\n    }\r\n\r\n    checkOverlap(){\r\n        let length = this.gameObjectList.length;\r\n        for(let i=0; i < length; i++){\r\n            for(let j=i+1; j<length; j++){\r\n                let gameObject1 = this.gameObjectList.findObjectWithIndex(i);\r\n                let gameObject2 = this.gameObjectList.findObjectWithIndex(j)\r\n                if(this._isOverlap(gameObject1, gameObject2)){\r\n                    this._resolveOverlap(gameObject1, gameObject2);\r\n                }\r\n            }\r\n        }\r\n    }\r\n    _resolveOverlap(gameObject1, gameObject2){\r\n        /*\r\n        registerInteraction(tag1, tag2, function) => [(tag1, tag2) -> interact(g1, g2)]\r\n        _resolveOverlap(gameObject1, gameObject2)\r\n\r\n        function _resolveOverlap(gameObject1, gameObject2){\r\n            let func = lookup(gameObject1.tag, gameObject2.tag);\r\n            func(gameObject1, gameObject2)\r\n        }\r\n        \r\n        */\r\n        if(gameObject1.tag == 'player' && gameObject2.tag == 'rect'){\r\n            console.log(\"Overlap!!\");\r\n        }\r\n    }\r\n    _isOverlap(gameObject1, gameObject2){\r\n        if(gameObject1 instanceof _Rectangle__WEBPACK_IMPORTED_MODULE_0__[\"default\"] && gameObject2 instanceof _Rectangle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]){\r\n            let leftRightOverlap = gameObject1.right > gameObject2.left && gameObject1.left < gameObject2.right;\r\n            let topBottomOverlap = gameObject1.top < gameObject2.bottom && gameObject1.bottom > gameObject2.top;\r\n            if (leftRightOverlap && topBottomOverlap){\r\n                return true;\r\n            }\r\n            return false;\r\n        }\r\n        return false;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (OverlapDetector);\n\n//# sourceURL=webpack:///./src/OverlapDetector.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rectangle */ \"./src/Rectangle.js\");\n/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bullet */ \"./src/Bullet.js\");\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vector */ \"./src/Vector.js\");\n\r\n\r\n\r\n\r\nclass Player extends _Rectangle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(positionX, positionY){\r\n        super(positionX, positionY, 10, 10,'blue', 'player');\r\n        this.velocity = new _Vector__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0,0);\r\n        this.speed = 3;\r\n    }\r\n    moveUp(){\r\n        this.velocity.y = -this.speed;\r\n    }\r\n    moveDown(){\r\n        this.velocity.y = this.speed;\r\n    }\r\n    moveLeft(){\r\n        this.velocity.x = -this.speed;\r\n    }\r\n    moveRight(){\r\n        this.velocity.x = this.speed;\r\n    }\r\n    setVelocity(x,y){\r\n        this.velocity.x = x;\r\n        this.velocity.y = y;\r\n    }\r\n    setVelocityX(x){\r\n        this.velocity.x = x;\r\n    }\r\n    setVelocityY(y){\r\n        this.velocity.y = y;\r\n    }\r\n    shoot(){\r\n        let bullet = new _Bullet__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.position.x, this.position.y);\r\n        bullet.setVelocity(this.velocity.x, this.velocity.y);\r\n        bullet.setOwner(this);\r\n        this.parent.add(bullet);\r\n    }\r\n    update(){\r\n        this.position.add(this.velocity);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/Player.js?");

/***/ }),

/***/ "./src/Rectangle.js":
/*!**************************!*\
  !*** ./src/Rectangle.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ \"./src/GameObject.js\");\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ \"./src/Vector.js\");\n\r\n\r\n\r\nclass Rectangle extends _GameObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(positionX, positionY, sizeX, sizeY, color, tag){\r\n        super(tag);\r\n        this.color = color;\r\n        this.position = new _Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](positionX,positionY);\r\n        this.size = new _Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](sizeX,sizeY);\r\n    }\r\n    get left(){\r\n        return this.position.x;\r\n    }\r\n    get right(){\r\n        return this.position.x + this.size.x;\r\n    }\r\n    get top(){\r\n        return this.position.y;\r\n    }\r\n    get bottom(){\r\n        return this.position.y + this.size.y;\r\n    }\r\n    update(){\r\n        //do nothing\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rectangle);\n\n//# sourceURL=webpack:///./src/Rectangle.js?");

/***/ }),

/***/ "./src/Renderer.js":
/*!*************************!*\
  !*** ./src/Renderer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Renderer{\r\n    constructor(context, gameObjectList, renderConfig){\r\n        this.context = context;\r\n        this.gameObjectList = gameObjectList;\r\n        this.renderConfig = renderConfig;\r\n        this.renderList = null;\r\n\r\n    }\r\n    refreshRenderList(){\r\n        this.renderList = [];\r\n        for(let layer in this.renderConfig){\r\n            for(let gameObject of this.gameObjectList.children){\r\n                if(this.renderConfig[layer].includes(gameObject.tag)){\r\n                    this.renderList.push(gameObject);\r\n                }\r\n            }\r\n        }\r\n        this.gameObjectList.isChanged = false;\r\n    }\r\n    render(){\r\n        if(this.gameObjectList.isChanged || this.renderList == null){\r\n            this.refreshRenderList();\r\n        }\r\n        for(let gameObject of this.renderList){\r\n            this.context.fillStyle = gameObject.color;\r\n            this.context.fillRect(gameObject.position.x, gameObject.position.y, gameObject.size.x, gameObject.size.y);\r\n        }\r\n        //console.log(this.gameObjectList);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Renderer);\n\n//# sourceURL=webpack:///./src/Renderer.js?");

/***/ }),

/***/ "./src/Vector.js":
/*!***********************!*\
  !*** ./src/Vector.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Vector{\r\n    constructor(x, y){\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    add(vector2){\r\n        this.x += vector2.x;\r\n        this.y += vector2.y;\r\n    }\r\n    subtract(vector2){\r\n        this.x -= vector2.x;\r\n        this.y -= vector2.y;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vector);\n\n//# sourceURL=webpack:///./src/Vector.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n/* harmony import */ var _InputHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputHandler */ \"./src/InputHandler.js\");\n/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Rectangle */ \"./src/Rectangle.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet renderConfig = {\r\n    0:['background'],\r\n    1:['obstacle'],\r\n    2:['rect', 'pickup'],\r\n    3:['player', 'bullet'],\r\n    4:[]\r\n}\r\nconst game = new _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document, renderConfig);\r\nlet inputhandler = new _InputHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document);\r\nlet rect1 = new _Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](20,20,50,50,'green','rect');\r\nlet rect2 = new _Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](100,100,50,50,'green','rect');\r\nlet background = new _Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0,0,400,400,'black','background');\r\nlet player = new _Player__WEBPACK_IMPORTED_MODULE_3__[\"default\"](50,50);\r\ninputhandler.register(player, 'keydown', 'KeyW', function(){player.moveUp()});\r\ninputhandler.register(player, 'keydown', 'KeyS', function(){player.moveDown()});\r\ninputhandler.register(player, 'keydown', 'KeyA', function(){player.moveLeft()});\r\ninputhandler.register(player, 'keydown', 'KeyD', function(){player.moveRight()});\r\ninputhandler.register(player, 'keyup', 'KeyW', function(){player.setVelocityY(0)});\r\ninputhandler.register(player, 'keyup', 'KeyS', function(){player.setVelocityY(0)});\r\ninputhandler.register(player, 'keyup', 'KeyA', function(){player.setVelocityX(0)});\r\ninputhandler.register(player, 'keyup', 'KeyD', function(){player.setVelocityX(0)});\r\ninputhandler.register(player, 'keypress', 'KeyL', function(){player.shoot()});\r\ngame.add(player);\r\ngame.add(rect1);\r\ngame.add(rect2);\r\ngame.add(background);\r\n\r\nfunction start(){\r\n    function frame(timestamp){\r\n        game.update(timestamp);\r\n        game.render();\r\n        requestAnimationFrame(frame);\r\n    }\r\n    requestAnimationFrame(frame);\r\n}\r\nstart();\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });