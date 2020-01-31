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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Vector */ \"./src/core/Vector.js\");\n/* harmony import */ var _core_Rectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/Rectangle */ \"./src/core/Rectangle.js\");\n\r\n\r\n\r\nclass Bullet extends _core_Rectangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]{\r\n    constructor(positionX, positionY){\r\n        super(positionX, positionY, 5, 5, 'green', 'bullet');\r\n        this.velocity = new _core_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0);\r\n        this.owner = null;\r\n        this.initTime = null;\r\n        this.speed = 3;\r\n    }\r\n    setVelocity(x,y){\r\n        this.velocity.x = x;\r\n        this.velocity.y = y;\r\n    }\r\n    setOwner(gameObject){\r\n        this.owner = gameObject;\r\n    }\r\n    update(timestamp){\r\n        let seconds = (timestamp/2000).toFixed(2)\r\n        this.position.add(this.velocity);\r\n        if(this.initTime == null){\r\n            this.initTime = seconds;\r\n        }\r\n        if(seconds - this.initTime > 3){\r\n            let object = this.parent.findObjectWithTag('bullet');\r\n            this.parent.remove(object);\r\n        }\r\n    }\r\n    \r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bullet);\n\n//# sourceURL=webpack:///./src/Bullet.js?");

/***/ }),

/***/ "./src/PickupManager.js":
/*!******************************!*\
  !*** ./src/PickupManager.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Rectangle */ \"./src/core/Rectangle.js\");\n\r\n\r\n// ------Tagger pickups-------\r\n//BlackHole pickup\r\n//Frozen pickup\r\n//Chain pickup\r\n//Speed pickup\r\n\r\n\r\n\r\nclass BasicPickup extends _core_Rectangle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(positionX, positionY, spawnTime){\r\n        super(positionX, positionY, 5, 5, 'orange', 'pickup');\r\n        this.type = \"basic\";\r\n        this.spawnTime = spawnTime;\r\n    }\r\n}\r\n\r\nclass ShootPickup extends _core_Rectangle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(positionX, positionY, spawnTime){\r\n        super(positionX, positionY, 5, 5, 'red', 'pickup');\r\n        this.type = \"shoot\";\r\n        this.spawnTime = spawnTime;\r\n    }\r\n}\r\n\r\nclass BlackHolePickup extends _core_Rectangle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(positionX, positionY, spawnTime){\r\n        super(positionX, positionY, 5, 5, 'black', 'pickup');\r\n        this.type = \"black-hole\";\r\n        this.spawnTime = spawnTime;\r\n    }\r\n}\r\n\r\nclass PickupManager extends _core_Rectangle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(){\r\n        super(0, 0, 0, 0, 'black', 'pickupManager');\r\n        this.existDuration = 3000;\r\n        this.spawnTimeDuration = 5000;\r\n        this.lastSpawnTime = null;\r\n        this.pickupList = [];\r\n    }\r\n    update(timestamp){\r\n        if(this.lastSpawnTime == null){\r\n            this.lastSpawnTime = timestamp;\r\n        }\r\n        if(timestamp - this.lastSpawnTime > this.spawnTimeDuration){\r\n            this.spawnPickup(timestamp);\r\n        }\r\n        for(let pickup of this.pickupList){\r\n            if(timestamp - pickup.spawnTime > this.existDuration){\r\n                this.destroy(pickup);\r\n            }\r\n        }\r\n    }\r\n    spawnPickup(spawnTime){\r\n        let choice = Math.floor(Math.random() * 3);\r\n        let x = Math.floor(Math.random()*300);\r\n        let y = Math.floor(Math.random()*300);\r\n        console.log(choice);\r\n        let pickup = null;\r\n        if(choice == 0){\r\n            pickup = new BlackHolePickup(x,y, spawnTime);\r\n        }else if(choice == 1){\r\n            pickup = new ShootPickup(x,y, spawnTime);\r\n        }else{\r\n            pickup = new BasicPickup(x,y, spawnTime);\r\n        }\r\n        this.pickupList.push(pickup);\r\n        this.parent.add(pickup);\r\n        this.lastSpawnTime = spawnTime;\r\n    }\r\n    destroy(pickupToDestroy){\r\n        let index = this.pickupList.findIndex(pickup => pickup.id == pickupToDestroy.id);\r\n        this.pickupList.splice(index, 1);\r\n        this.parent.remove(pickupToDestroy);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (PickupManager);\n\n//# sourceURL=webpack:///./src/PickupManager.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Rectangle */ \"./src/core/Rectangle.js\");\n/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bullet */ \"./src/Bullet.js\");\n/* harmony import */ var _core_Vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Vector */ \"./src/core/Vector.js\");\n\r\n\r\n\r\n\r\nclass Player extends _core_Rectangle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(positionX, positionY, playerConfig){\r\n        super(positionX, positionY, 10, 10,'green', 'player');\r\n        this.velocity = new _core_Vector__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0,0);\r\n        this.playerConfig = playerConfig;\r\n        this.abilityType = null;\r\n        this.taggerStartTime = null;\r\n        this.taggerDuration = 4000;\r\n        this.speed = 3;\r\n    }\r\n    setState(state){\r\n        if(state == 'tagger'){\r\n            this.setTag('tagger');\r\n            this.color = 'red';\r\n        }else if(state=='player'){\r\n            this.setTag('player');\r\n            this.color = 'green';\r\n            this.speed = 3;\r\n            this.abilityType = null;\r\n        }\r\n    }\r\n    setAbilityType(abilityType){\r\n        this.abilityType = abilityType;\r\n    }\r\n    subscribe(addEventListener){\r\n        let up = this.playerConfig['up'];\r\n        let down = this.playerConfig['down'];\r\n        let right = this.playerConfig['right'];\r\n        let left = this.playerConfig['left'];\r\n        let ability = this.playerConfig['ability'];\r\n        addEventListener('keydown', up, () => this.moveUp());\r\n        addEventListener('keydown', down, () => this.moveDown());\r\n        addEventListener('keydown', left, () => this.moveLeft());\r\n        addEventListener('keydown', right, () => this.moveRight());\r\n        addEventListener('keyup', up, () => this.setVelocityY(0));\r\n        addEventListener('keyup', down, () => this.setVelocityY(0));\r\n        addEventListener('keyup', left, () => this.setVelocityX(0));\r\n        addEventListener('keyup', right, () => this.setVelocityX(0));\r\n        addEventListener('keydown', ability, () => this.doAbility());\r\n    }\r\n    moveUp(){\r\n        this.velocity.y = -this.speed;\r\n    }\r\n    moveDown(){\r\n        this.velocity.y = this.speed;\r\n    }\r\n    moveLeft(){\r\n        this.velocity.x = -this.speed;\r\n    }\r\n    moveRight(){\r\n        this.velocity.x = this.speed;\r\n    }\r\n    setVelocity(x,y){\r\n        this.velocity.x = x;\r\n        this.velocity.y = y;\r\n    }\r\n    setVelocityX(x){\r\n        this.velocity.x = x;\r\n    }\r\n    setVelocityY(y){\r\n        this.velocity.y = y;\r\n    }\r\n    doAbility(){\r\n        if(this.abilityType == 'black-hole'){\r\n            let player = this.parent.findObjectWithTag('player');\r\n            if(player != null){\r\n                let direction = new _core_Vector__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.position.x - player.position.x , this.position.y - player.position.y).normalized();\r\n                player.setVelocity(direction.x, direction.y);\r\n            }\r\n        }\r\n        else if(this.abilityType == 'shoot'){\r\n            let bullet = new _Bullet__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.position.x, this.position.y);\r\n            let direction = this.velocity.normalized();\r\n            let max = 1.2;\r\n            let min = 0.4;\r\n            let xRandom = Math.random() * (max - min) + min;\r\n            let yRandom = Math.random() * (max - min) + min;\r\n            bullet.setVelocity(direction.x * bullet.speed * xRandom, direction.y * bullet.speed * yRandom);\r\n            bullet.setOwner(this);\r\n            this.parent.add(bullet);\r\n        }\r\n    }\r\n    update(timestamp){\r\n        this.lastPosition.x = this.position.x;\r\n        this.lastPosition.y = this.position.y;\r\n        this.position.x += this.velocity.x;\r\n        this.position.y += this.velocity.y;\r\n\r\n        if(this.tag == 'tagger'){\r\n            if(this.taggerStartTime==null){\r\n                this.taggerStartTime = timestamp;\r\n            }\r\n            if(timestamp - this.taggerStartTime > this.taggerDuration){\r\n                this.setState('player');\r\n                this.taggerStartTime = null;\r\n            }\r\n\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/Player.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\nclass InputHandler{\r\n\r\n    addEventListener(eventType, keycode, action){\r\n        document.addEventListener(eventType, function(event){\r\n            if(event.code == keycode){\r\n                action();\r\n            }\r\n        });\r\n    }\r\n    bind(controllable){\r\n        controllable.subscribe(this.addEventListener);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputHandler);\n\n//# sourceURL=webpack:///./src/core/InputHandler.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ \"./src/core/GameObject.js\");\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ \"./src/core/Vector.js\");\n\r\n\r\n\r\nclass Rectangle extends _GameObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(positionX, positionY, sizeX, sizeY, color, tag){\r\n        super(tag);\r\n        this.color = color;\r\n        this.lastPosition = new _Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](positionX,positionY);\r\n        this.position = new _Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](positionX,positionY);\r\n        this.size = new _Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](sizeX,sizeY);\r\n    }\r\n    get left(){\r\n        return this.position.x;\r\n    }\r\n    get right(){\r\n        return this.position.x + this.size.x;\r\n    }\r\n    get top(){\r\n        return this.position.y;\r\n    }\r\n    get bottom(){\r\n        return this.position.y + this.size.y;\r\n    }\r\n    update(){\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rectangle);\n\n//# sourceURL=webpack:///./src/core/Rectangle.js?");

/***/ }),

/***/ "./src/core/Renderer.js":
/*!******************************!*\
  !*** ./src/core/Renderer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Renderer{\r\n    constructor(context, gameObjectList, renderConfig){\r\n        this.context = context;\r\n        this.gameObjectList = gameObjectList;\r\n        this.renderConfig = renderConfig;\r\n        this.renderList = null;\r\n\r\n    }\r\n    refreshRenderList(){\r\n        this.renderList = [];\r\n        for(let layer in this.renderConfig){\r\n            for(let gameObject of this.gameObjectList.children){\r\n                if(this.renderConfig[layer].includes(gameObject.tag)){\r\n                    this.renderList.push(gameObject);\r\n                }\r\n            }\r\n        }\r\n        this.gameObjectList.isChanged = false;\r\n    }\r\n    render(){\r\n        if(this.gameObjectList.isChanged || this.renderList == null){\r\n            this.refreshRenderList();\r\n        }\r\n        for(let gameObject of this.renderList){\r\n            this.context.fillStyle = gameObject.color;\r\n            this.context.fillRect(gameObject.position.x, gameObject.position.y, gameObject.size.x, gameObject.size.y);\r\n        }\r\n        //console.log(this.gameObjectList);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Renderer);\n\n//# sourceURL=webpack:///./src/core/Renderer.js?");

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Game */ \"./src/core/Game.js\");\n/* harmony import */ var _core_InputHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/InputHandler */ \"./src/core/InputHandler.js\");\n/* harmony import */ var _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Rectangle */ \"./src/core/Rectangle.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n/* harmony import */ var _PickupManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PickupManager */ \"./src/PickupManager.js\");\n/* harmony import */ var _core_Vector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/Vector */ \"./src/core/Vector.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet renderConfig = {\r\n    0:['background'],\r\n    1:['obstacle'],\r\n    2:['rectangle', 'pickup'],\r\n    3:['player','tagger', 'bullet'],\r\n    4:[]\r\n}\r\nconst overlapConfig = [\r\n    {\r\n        tag1: 'player',\r\n        tag2: 'pickup',\r\n        action: (player, pickup, gameObjectList) => {\r\n            player.setState('tagger');\r\n            player.setAbilityType(pickup.type);\r\n            if(pickup.type == 'shoot'){\r\n                player.speed = 0.5;\r\n            }\r\n            gameObjectList.findObjectWithTag('pickupManager').destroy(pickup);\r\n        }\r\n    },\r\n    {\r\n        tag1: 'player',\r\n        tag2: 'obstacle',\r\n        action: (player, obstacle, gameObjectList) => {\r\n            player.position.x = player.lastPosition.x;\r\n            player.position.y = player.lastPosition.y;\r\n        }\r\n    },\r\n    {\r\n        tag1: 'tagger',\r\n        tag2: 'obstacle',\r\n        action: (player, obstacle, gameObjectList) => {\r\n            player.position.x = player.lastPosition.x;\r\n            player.position.y = player.lastPosition.y;\r\n        }\r\n    },\r\n    {\r\n        tag1: 'player',\r\n        tag2: 'tagger',\r\n        action: (player, tagger, gameObjectList) => {\r\n            gameObjectList.remove(player);\r\n        }\r\n    },\r\n    {\r\n        tag1: 'player',\r\n        tag2: 'bullet',\r\n        action: (player, bullet, gameObjectList) => {\r\n            if(bullet.owner != player){\r\n                gameObjectList.remove(player);\r\n            }\r\n        }\r\n    },\r\n    \r\n]\r\n\r\nconst game = new _core_Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](renderConfig, overlapConfig);\r\nlet inputhandler = new _core_InputHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nlet background = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0,0,400,400,'white','background');\r\nlet wall1 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0,0,400,10,'green','obstacle');\r\nlet wall2 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0,0,10,400,'green','obstacle');\r\nlet wall3 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](390,0,10,400,'green','obstacle');\r\nlet wall4 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0,390,400,10,'green','obstacle');\r\n\r\nlet wall5 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](50,50,10,100,'green','obstacle');\r\nlet wall6 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](50,250,10,100,'green','obstacle');\r\n\r\nlet wall7 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](150,50,10,100,'green','obstacle');\r\nlet wall8 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](150,250,10,100,'green','obstacle');\r\n\r\nlet wall9 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](250,50,10,100,'green','obstacle');\r\nlet wall10 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](250,250,10,100,'green','obstacle');\r\n\r\nlet wall11 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](350,50,10,100,'green','obstacle');\r\nlet wall12 = new _core_Rectangle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](350,250,10,100,'green','obstacle');\r\n\r\nlet setup = [background, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12];\r\nlet player1 = new _Player__WEBPACK_IMPORTED_MODULE_3__[\"default\"](20,20, {\r\n    'up': 'KeyW',\r\n    'down': 'KeyS',\r\n    'left': 'KeyA',\r\n    'right': 'KeyD',\r\n    'ability': 'Space'\r\n});\r\nlet player2 = new _Player__WEBPACK_IMPORTED_MODULE_3__[\"default\"](380,380,{\r\n    'up': 'ArrowUp',\r\n    'down': 'ArrowDown',\r\n    'left': 'ArrowLeft',\r\n    'right': 'ArrowRight',\r\n    'ability':'Numpad0'\r\n});\r\nlet pickupManager = new _PickupManager__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\r\ninputhandler.bind(player1);\r\ninputhandler.bind(player2);\r\ngame.add(pickupManager);\r\ngame.addAll(setup);\r\ngame.add(player1);\r\ngame.add(player2);\r\nfunction start(){\r\n    function frame(timestamp){\r\n        game.update(timestamp);\r\n        game.render();\r\n        requestAnimationFrame(frame);\r\n    }\r\n    requestAnimationFrame(frame);\r\n}\r\nstart();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });