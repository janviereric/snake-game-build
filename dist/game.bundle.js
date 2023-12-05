/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/javascripts/color-variable.js":
/*!**************************************************!*\
  !*** ./src/assets/javascripts/color-variable.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapSeaColor: () => (/* binding */ mapSeaColor),
/* harmony export */   snakeBodyColor: () => (/* binding */ snakeBodyColor),
/* harmony export */   snakeBodyStainColor: () => (/* binding */ snakeBodyStainColor),
/* harmony export */   snakeColorBorder: () => (/* binding */ snakeColorBorder),
/* harmony export */   snakeEyeFirstColor: () => (/* binding */ snakeEyeFirstColor),
/* harmony export */   snakeEyeSecondColor: () => (/* binding */ snakeEyeSecondColor),
/* harmony export */   snakeEyeThirdColor: () => (/* binding */ snakeEyeThirdColor),
/* harmony export */   snakeFirstBodyStainColor: () => (/* binding */ snakeFirstBodyStainColor),
/* harmony export */   snakeHeadColor: () => (/* binding */ snakeHeadColor),
/* harmony export */   snakeNostrilColor: () => (/* binding */ snakeNostrilColor),
/* harmony export */   snakeTailColor: () => (/* binding */ snakeTailColor),
/* harmony export */   snakeTailStainColorBottomDirection: () => (/* binding */ snakeTailStainColorBottomDirection),
/* harmony export */   snakeTailStainColorLeftDirection: () => (/* binding */ snakeTailStainColorLeftDirection),
/* harmony export */   snakeTailStainColorRightDirection: () => (/* binding */ snakeTailStainColorRightDirection),
/* harmony export */   snakeTailStainColorTopDirection: () => (/* binding */ snakeTailStainColorTopDirection)
/* harmony export */ });
const mapSeaColor = "#45aaf2";
const snakeHeadColor = "#27ae60";
const snakeEyeFirstColor = "#2ecc71";
const snakeEyeSecondColor = "#f1f2f6";
const snakeEyeThirdColor = "#2f3640";
const snakeNostrilColor = "#3d3d3d";
const snakeBodyColor = "#27ae60";
const snakeBodyStainColor = "#27ae60";
const snakeFirstBodyStainColor = "#20bf6b";
const snakeColorBorder = "#009432";
const snakeTailColor = "#20bf6b";
const snakeTailStainColorRightDirection = "#26de81";
const snakeTailStainColorLeftDirection = "#0be881";
const snakeTailStainColorTopDirection = "#32ff7e";
const snakeTailStainColorBottomDirection = "#7bed9f";

/***/ }),

/***/ "./src/map/map-draw.js":
/*!*****************************!*\
  !*** ./src/map/map-draw.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   context2D: () => (/* binding */ context2D),
/* harmony export */   drawMap: () => (/* binding */ drawMap),
/* harmony export */   gridElement: () => (/* binding */ gridElement)
/* harmony export */ });
/* harmony import */ var _snake_snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../snake/snake */ "./src/snake/snake.js");

const canvas = document.querySelector("canvas");
const context2D = canvas.getContext("2d");
const gridElement = 40; // 20 * 20

const drawMap = () => {
  context2D.fillStyle = _snake_snake__WEBPACK_IMPORTED_MODULE_0__.mapSeaColor;
  context2D.fillRect(0, 0, 800, 800);
};

/***/ }),

/***/ "./src/map/map.js":
/*!************************!*\
  !*** ./src/map/map.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   context2D: () => (/* reexport safe */ _map_draw_js__WEBPACK_IMPORTED_MODULE_0__.context2D),
/* harmony export */   drawMap: () => (/* reexport safe */ _map_draw_js__WEBPACK_IMPORTED_MODULE_0__.drawMap),
/* harmony export */   gridElement: () => (/* reexport safe */ _map_draw_js__WEBPACK_IMPORTED_MODULE_0__.gridElement)
/* harmony export */ });
/* harmony import */ var _map_draw_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-draw.js */ "./src/map/map-draw.js");


/***/ }),

/***/ "./src/snake/snake-draw/snake-draw-body.js":
/*!*************************************************!*\
  !*** ./src/snake/snake-draw/snake-draw-body.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawSnakeBody: () => (/* binding */ drawSnakeBody)
/* harmony export */ });
/* harmony import */ var _snake_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../snake.js */ "./src/snake/snake.js");

const drawSnakeBody = () => {
  // snake body start
  let [, ...snakeBody] = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snake;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeBodyColor;
  for (let body of snakeBody) {
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(body[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, body[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, 5);
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
    snakeBody.pop();
    snakeBody.push(body);

    // snake body first stain start
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(body[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, body[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeBodyStainColor;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
    // snake body first stain end

    // snake body second stain start
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(body[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, body[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeBodyStainColor;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
    // snake body second stain end

    // snake body third stain start
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(body[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, body[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeBodyStainColor;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
    // snake body third stain end

    // snake body fourth stain start
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(body[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, body[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeBodyStainColor;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
    // snake body fourth stain end

    // snake body fifth stain start
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(body[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, body[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeBodyStainColor;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
    // snake body fifth stain end

    // snake body sixth stain start
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(body[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, body[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeBodyStainColor;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
    // snake body sixth stain end

    // snake body seventh stain start
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(body[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, body[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeBodyStainColor;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
    // snake body seventh stain end

    // snake body eighth stain start
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(body[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, body[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeBodyStainColor;
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
    _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
    // snake body eighth stain end

    let firstBody = snakeBody[0];
    if (_snake_js__WEBPACK_IMPORTED_MODULE_0__.direction === "e" || _snake_js__WEBPACK_IMPORTED_MODULE_0__.direction === "o") {
      // snake first body first stain start
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(firstBody[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 3, firstBody[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 5, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeFirstBodyStainColor;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
      // snake first body first stain end

      // snake first body second stain start
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(firstBody[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 3, firstBody[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 25, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeFirstBodyStainColor;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
      // snake first body second stain end

      // snake first body third stain start
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(firstBody[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, firstBody[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 5, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeFirstBodyStainColor;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
      // snake first body third stain end

      // snake first body fourth stain start
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(firstBody[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, firstBody[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 25, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeFirstBodyStainColor;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
      // snake first body fourth stain end
    } else {
      // snake first body first stain start
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(firstBody[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 5, firstBody[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 3, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 5);
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeFirstBodyStainColor;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
      // snake first body first stain end

      // snake first body second stain start
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(firstBody[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 5, firstBody[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 5);
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeFirstBodyStainColor;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
      // snake first body second stain end

      // snake first body third stain start
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(firstBody[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 25, firstBody[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 3, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 5);
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeFirstBodyStainColor;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
      // snake first body third stain end

      // snake first body fourth stain start
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(firstBody[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 25, firstBody[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 5);
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeFirstBodyStainColor;
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
      _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
      // snake first body fourth stain end
    }
  }
  // snake body first stain start
  // snake body end
};

/***/ }),

/***/ "./src/snake/snake-draw/snake-draw-head.js":
/*!*************************************************!*\
  !*** ./src/snake/snake-draw/snake-draw-head.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawSnakeHeadBottom: () => (/* binding */ drawSnakeHeadBottom),
/* harmony export */   drawSnakeHeadLeft: () => (/* binding */ drawSnakeHeadLeft),
/* harmony export */   drawSnakeHeadRight: () => (/* binding */ drawSnakeHeadRight),
/* harmony export */   drawSnakeHeadTop: () => (/* binding */ drawSnakeHeadTop),
/* harmony export */   snake: () => (/* binding */ snake)
/* harmony export */ });
/* harmony import */ var _snake_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../snake.js */ "./src/snake/snake.js");

const snake = [[9, 9], [8, 9], [7, 9]];
const drawSnakeHeadRight = () => {
  // snake head start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 2, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, 15);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeHeadColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();

  // snake right nostril start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 32, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 25, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 36, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 38, 2);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeNostrilColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake right nostril end

  // snake left nostril start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 32, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 12, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 36, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 38, 2);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeNostrilColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake left nostril end

  // snake right eye start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, 10);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeFirstColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 3, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 23, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 10);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeSecondColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 13, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 28, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeThirdColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake right eye end

  // snake left eye start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, 10);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeFirstColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 3, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 3, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 10);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeSecondColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 13, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 8, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeThirdColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake left eye end
  // snake head end
};

const drawSnakeHeadLeft = () => {
  // snake head start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 1, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, 15);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeHeadColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();

  // snake right nostril start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 4, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 13, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 36, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 38, 2);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeNostrilColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake right nostril end

  // snake left nostril start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 4, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 25, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 36, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 38, 2);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeNostrilColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake left nostril end

  // snake right eye start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, 10);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeFirstColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 3, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 10);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeSecondColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 7, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeThirdColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake right eye end

  // snake left eye start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, 10);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeFirstColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 23, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 10);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeSecondColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 28, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeThirdColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake left eye end
  // snake head end
};

const drawSnakeHeadTop = () => {
  // snake head start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 1, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, 15);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeHeadColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();

  // snake right nostril start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 25, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 6, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 38, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 36, 2);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeNostrilColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake right nostril start

  // snake left nostril start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 13, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 6, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 38, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 36, 2);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeNostrilColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake left nostril end

  // snake right eye start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, 10);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeFirstColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 23, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 10);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeSecondColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 28, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeThirdColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake right eye end

  // snake left eye start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, 10);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeFirstColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 2, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 10);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeSecondColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 7, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeThirdColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake left eye end
  // snake head end
};

const drawSnakeHeadBottom = () => {
  // snake head start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 2, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, 15);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeHeadColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();

  // snake right nostril start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 13, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 38, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 36, 2);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeNostrilColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake right nostril end

  // snake left nostril start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 25, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 38, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 36, 2);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeNostrilColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake left nostril end

  // snake right eye start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 1, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, 10);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeFirstColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 3, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 4, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 10);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeSecondColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 8, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 14, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeThirdColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake right eye end

  // snake left eye start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 1, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, 10);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeFirstColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 23, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 4, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 10);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeSecondColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 28, snake[0][1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 14, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeThirdColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake left eye end
  // snake head end
};

/***/ }),

/***/ "./src/snake/snake-draw/snake-draw-tail.js":
/*!*************************************************!*\
  !*** ./src/snake/snake-draw/snake-draw-tail.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawSnakeTailBottom: () => (/* binding */ drawSnakeTailBottom),
/* harmony export */   drawSnakeTailLeft: () => (/* binding */ drawSnakeTailLeft),
/* harmony export */   drawSnakeTailRight: () => (/* binding */ drawSnakeTailRight),
/* harmony export */   drawSnakeTailTop: () => (/* binding */ drawSnakeTailTop)
/* harmony export */ });
/* harmony import */ var _snake_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../snake.js */ "./src/snake/snake.js");

const drawSnakeTailRight = () => {
  let snakeTail = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snake[_snake_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1];
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();

  // snake tail first stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorRightDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail first stain start

  // snake tail second stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorRightDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail second stain start

  // snake tail third stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorRightDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail third stain start

  // snake tail fourth stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorRightDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail fourth stain start

  // snake tail fifth stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorRightDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail fifth stain start

  // snake tail sixth stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorRightDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail sixth stain start

  // snake tail seventh stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorRightDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail seventh stain start

  // snake tail eighth stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorRightDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail eighth stain start
};

const drawSnakeTailLeft = () => {
  let snakeTail = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snake[_snake_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1];
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();

  // snake tail first stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorLeftDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail first stain start

  // snake tail second stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorLeftDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail second stain start

  // snake tail third stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorLeftDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail third stain start

  // snake tail fourth stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorLeftDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail fourth stain start

  // snake tail fifth stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorLeftDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail fifth stain start

  // snake tail sixth stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorLeftDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail sixth stain start

  // snake tail seventh stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorLeftDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail seventh stain start

  // snake tail eighth stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorLeftDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail eighth stain start
};

const drawSnakeTailTop = () => {
  let snakeTail = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snake[_snake_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1];
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();

  // snake tail first stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorTopDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail first stain start

  // snake tail second stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorTopDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail second stain start

  // snake tail third stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorTopDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail third stain start

  // snake tail fourth stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorTopDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail fourth stain start

  // snake tail fifth stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorTopDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail fifth stain start

  // snake tail sixth stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorTopDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail sixth stain start

  // snake tail seventh stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorTopDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail seventh stain start

  // snake tail eighth stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorTopDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail eighth stain start
};

const drawSnakeTailBottom = () => {
  let snakeTail = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snake[_snake_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1];
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailColor;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();

  // snake tail first stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorBottomDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail first stain start

  // snake tail second stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorBottomDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail second stain start

  // snake tail third stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorBottomDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail third stain start

  // snake tail fourth stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorBottomDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail fourth stain start

  // snake tail fifth stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorBottomDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail fifth stain start

  // snake tail sixth stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorBottomDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail sixth stain start

  // snake tail seventh stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorBottomDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail seventh stain start

  // snake tail eighth stain start
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, snakeTail[1] * _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _snake_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _snake_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorBottomDirection;
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail eighth stain start
};

/***/ }),

/***/ "./src/snake/snake-move/snake-move.js":
/*!********************************************!*\
  !*** ./src/snake/snake-move/snake-move.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   direction: () => (/* binding */ direction),
/* harmony export */   move: () => (/* binding */ move),
/* harmony export */   snakePosition: () => (/* binding */ snakePosition)
/* harmony export */ });
/* harmony import */ var _snake_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../snake.js */ "./src/snake/snake.js");

let direction = "e";
window.addEventListener("keydown", event => {
  switch (event.key) {
    case "ArrowRight":
      {
        direction = "e";
        break;
      }
    case "ArrowLeft":
      {
        direction = "o";
        break;
      }
    case "ArrowUp":
      {
        direction = "n";
        break;
      }
    case "ArrowDown":
      {
        direction = "s";
        break;
      }
  }
});
const snakePosition = () => {
  switch (direction) {
    case "e":
      {
        (0,_snake_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeHeadRight)();
        (0,_snake_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeTailRight)();
        break;
      }
    case "o":
      {
        (0,_snake_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeHeadLeft)();
        (0,_snake_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeTailLeft)();
        break;
      }
    case "n":
      {
        (0,_snake_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeHeadTop)();
        (0,_snake_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeTailTop)();
        break;
      }
    case "s":
      {
        (0,_snake_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeHeadBottom)();
        (0,_snake_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeTailBottom)();
        break;
      }
    default:
      {
        (0,_snake_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeHeadRight)();
        (0,_snake_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeTailRight)();
      }
  }
};
const updateSnakePosition = () => {
  let snakeHead;
  let snakeTail;
  switch (direction) {
    case "e":
      {
        snakeHead = [_snake_js__WEBPACK_IMPORTED_MODULE_0__.snake[0][0] + 1, _snake_js__WEBPACK_IMPORTED_MODULE_0__.snake[0][1]];
        snakeTail = [_snake_js__WEBPACK_IMPORTED_MODULE_0__.snake[_snake_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1][0] + 1, _snake_js__WEBPACK_IMPORTED_MODULE_0__.snake[_snake_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1][1]];
        break;
      }
    case "o":
      {
        snakeHead = [_snake_js__WEBPACK_IMPORTED_MODULE_0__.snake[0][0] - 1, _snake_js__WEBPACK_IMPORTED_MODULE_0__.snake[0][1]];
        snakeTail = [_snake_js__WEBPACK_IMPORTED_MODULE_0__.snake[_snake_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1][0] - 1, _snake_js__WEBPACK_IMPORTED_MODULE_0__.snake[_snake_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1][1]];
        break;
      }
    case "n":
      {
        snakeHead = [_snake_js__WEBPACK_IMPORTED_MODULE_0__.snake[0][0], _snake_js__WEBPACK_IMPORTED_MODULE_0__.snake[0][1] - 1];
        snakeTail = [_snake_js__WEBPACK_IMPORTED_MODULE_0__.snake[_snake_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1][0], _snake_js__WEBPACK_IMPORTED_MODULE_0__.snake[_snake_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1][1] - 1];
        break;
      }
    case "s":
      {
        snakeHead = [_snake_js__WEBPACK_IMPORTED_MODULE_0__.snake[0][0], _snake_js__WEBPACK_IMPORTED_MODULE_0__.snake[0][1] + 1];
        snakeTail = [_snake_js__WEBPACK_IMPORTED_MODULE_0__.snake[_snake_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1][0], _snake_js__WEBPACK_IMPORTED_MODULE_0__.snake[_snake_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1][1] + 1];
        break;
      }
    default:
      {}
  }
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.snake.unshift(snakeHead);
  _snake_js__WEBPACK_IMPORTED_MODULE_0__.snake.pop();
};
const move = () => {
  updateSnakePosition();
  (0,_snake_js__WEBPACK_IMPORTED_MODULE_0__.drawMap)();
  snakePosition();
  (0,_snake_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeBody)();
  setTimeout(() => {
    requestAnimationFrame(move);
  }, 1000);
};

/***/ }),

/***/ "./src/snake/snake.js":
/*!****************************!*\
  !*** ./src/snake/snake.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   context2D: () => (/* reexport safe */ _map_map_js__WEBPACK_IMPORTED_MODULE_0__.context2D),
/* harmony export */   direction: () => (/* reexport safe */ _snake_move_snake_move_js__WEBPACK_IMPORTED_MODULE_1__.direction),
/* harmony export */   drawMap: () => (/* reexport safe */ _map_map_js__WEBPACK_IMPORTED_MODULE_0__.drawMap),
/* harmony export */   drawSnakeBody: () => (/* reexport safe */ _snake_draw_snake_draw_body_js__WEBPACK_IMPORTED_MODULE_3__.drawSnakeBody),
/* harmony export */   drawSnakeHeadBottom: () => (/* reexport safe */ _snake_draw_snake_draw_head_js__WEBPACK_IMPORTED_MODULE_2__.drawSnakeHeadBottom),
/* harmony export */   drawSnakeHeadLeft: () => (/* reexport safe */ _snake_draw_snake_draw_head_js__WEBPACK_IMPORTED_MODULE_2__.drawSnakeHeadLeft),
/* harmony export */   drawSnakeHeadRight: () => (/* reexport safe */ _snake_draw_snake_draw_head_js__WEBPACK_IMPORTED_MODULE_2__.drawSnakeHeadRight),
/* harmony export */   drawSnakeHeadTop: () => (/* reexport safe */ _snake_draw_snake_draw_head_js__WEBPACK_IMPORTED_MODULE_2__.drawSnakeHeadTop),
/* harmony export */   drawSnakeTailBottom: () => (/* reexport safe */ _snake_draw_snake_draw_tail_js__WEBPACK_IMPORTED_MODULE_5__.drawSnakeTailBottom),
/* harmony export */   drawSnakeTailLeft: () => (/* reexport safe */ _snake_draw_snake_draw_tail_js__WEBPACK_IMPORTED_MODULE_5__.drawSnakeTailLeft),
/* harmony export */   drawSnakeTailRight: () => (/* reexport safe */ _snake_draw_snake_draw_tail_js__WEBPACK_IMPORTED_MODULE_5__.drawSnakeTailRight),
/* harmony export */   drawSnakeTailTop: () => (/* reexport safe */ _snake_draw_snake_draw_tail_js__WEBPACK_IMPORTED_MODULE_5__.drawSnakeTailTop),
/* harmony export */   gridElement: () => (/* reexport safe */ _map_map_js__WEBPACK_IMPORTED_MODULE_0__.gridElement),
/* harmony export */   mapSeaColor: () => (/* reexport safe */ _assets_javascripts_color_variable_js__WEBPACK_IMPORTED_MODULE_4__.mapSeaColor),
/* harmony export */   move: () => (/* reexport safe */ _snake_move_snake_move_js__WEBPACK_IMPORTED_MODULE_1__.move),
/* harmony export */   snake: () => (/* reexport safe */ _snake_draw_snake_draw_head_js__WEBPACK_IMPORTED_MODULE_2__.snake),
/* harmony export */   snakeBodyColor: () => (/* reexport safe */ _assets_javascripts_color_variable_js__WEBPACK_IMPORTED_MODULE_4__.snakeBodyColor),
/* harmony export */   snakeBodyStainColor: () => (/* reexport safe */ _assets_javascripts_color_variable_js__WEBPACK_IMPORTED_MODULE_4__.snakeBodyStainColor),
/* harmony export */   snakeColorBorder: () => (/* reexport safe */ _assets_javascripts_color_variable_js__WEBPACK_IMPORTED_MODULE_4__.snakeColorBorder),
/* harmony export */   snakeEyeFirstColor: () => (/* reexport safe */ _assets_javascripts_color_variable_js__WEBPACK_IMPORTED_MODULE_4__.snakeEyeFirstColor),
/* harmony export */   snakeEyeSecondColor: () => (/* reexport safe */ _assets_javascripts_color_variable_js__WEBPACK_IMPORTED_MODULE_4__.snakeEyeSecondColor),
/* harmony export */   snakeEyeThirdColor: () => (/* reexport safe */ _assets_javascripts_color_variable_js__WEBPACK_IMPORTED_MODULE_4__.snakeEyeThirdColor),
/* harmony export */   snakeFirstBodyStainColor: () => (/* reexport safe */ _assets_javascripts_color_variable_js__WEBPACK_IMPORTED_MODULE_4__.snakeFirstBodyStainColor),
/* harmony export */   snakeHeadColor: () => (/* reexport safe */ _assets_javascripts_color_variable_js__WEBPACK_IMPORTED_MODULE_4__.snakeHeadColor),
/* harmony export */   snakeNostrilColor: () => (/* reexport safe */ _assets_javascripts_color_variable_js__WEBPACK_IMPORTED_MODULE_4__.snakeNostrilColor),
/* harmony export */   snakePosition: () => (/* reexport safe */ _snake_move_snake_move_js__WEBPACK_IMPORTED_MODULE_1__.snakePosition),
/* harmony export */   snakeTailColor: () => (/* reexport safe */ _assets_javascripts_color_variable_js__WEBPACK_IMPORTED_MODULE_4__.snakeTailColor),
/* harmony export */   snakeTailStainColorBottomDirection: () => (/* reexport safe */ _assets_javascripts_color_variable_js__WEBPACK_IMPORTED_MODULE_4__.snakeTailStainColorBottomDirection),
/* harmony export */   snakeTailStainColorLeftDirection: () => (/* reexport safe */ _assets_javascripts_color_variable_js__WEBPACK_IMPORTED_MODULE_4__.snakeTailStainColorLeftDirection),
/* harmony export */   snakeTailStainColorRightDirection: () => (/* reexport safe */ _assets_javascripts_color_variable_js__WEBPACK_IMPORTED_MODULE_4__.snakeTailStainColorRightDirection),
/* harmony export */   snakeTailStainColorTopDirection: () => (/* reexport safe */ _assets_javascripts_color_variable_js__WEBPACK_IMPORTED_MODULE_4__.snakeTailStainColorTopDirection)
/* harmony export */ });
/* harmony import */ var _map_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map/map.js */ "./src/map/map.js");
/* harmony import */ var _snake_move_snake_move_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snake-move/snake-move.js */ "./src/snake/snake-move/snake-move.js");
/* harmony import */ var _snake_draw_snake_draw_head_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snake-draw/snake-draw-head.js */ "./src/snake/snake-draw/snake-draw-head.js");
/* harmony import */ var _snake_draw_snake_draw_body_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snake-draw/snake-draw-body.js */ "./src/snake/snake-draw/snake-draw-body.js");
/* harmony import */ var _assets_javascripts_color_variable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/javascripts/color-variable.js */ "./src/assets/javascripts/color-variable.js");
/* harmony import */ var _snake_draw_snake_draw_tail_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./snake-draw/snake-draw-tail.js */ "./src/snake/snake-draw/snake-draw-tail.js");







/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Mulish", sans-serif;
  letter-spacing: 0.1rem;
  cursor: default;
}

a {
  color: var(--dark);
  text-decoration: none;
}

body {
  font-size: 10px;
}

/* header start */
header {
  background-color: #27ae60;
  height: 3rem;
}

.container-title-logo {
  display: flex;
  justify-content: center;
}

.text-title-logo {
  font-size: 1rem;
  padding: 0.6rem;
  margin-top: 0.2rem;
  color: #f5f6fa;
}

.text-title-logo:hover {
  transition: all 0.2s;
  background-color: #2ecc71;
  border-radius: 0.2rem;
  cursor: pointer;
}
/* header end */

/* main start */
main {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: white;
}

main a {
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
}

/* main end */

/* footer start */
footer {
  height: 8rem;
  background-color: #4d4d4d;
  color: #f5f6fa;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  height: 1rem;
  width: 1rem;
  margin-bottom: -0.1rem;
}

.j {
  font-family: "Roboto Condensed", sans-seri;
}

.e {
  font-family: "Roboto Condensed", sans-seri;
}
/* footer end */
`, "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,iCAAiC;EACjC,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA,iBAAiB;AACjB;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,oBAAoB;EACpB,yBAAyB;EACzB,qBAAqB;EACrB,eAAe;AACjB;AACA,eAAe;;AAEf,eAAe;AACf;EACE,aAAa;EACb,WAAW;EACX,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,eAAe;AACjB;;AAEA,aAAa;;AAEb,iBAAiB;AACjB;EACE,YAAY;EACZ,yBAAyB;EACzB,cAAc;EACd,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,0CAA0C;AAC5C;AACA,eAAe","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Mulish\", sans-serif;\n  letter-spacing: 0.1rem;\n  cursor: default;\n}\n\na {\n  color: var(--dark);\n  text-decoration: none;\n}\n\nbody {\n  font-size: 10px;\n}\n\n/* header start */\nheader {\n  background-color: #27ae60;\n  height: 3rem;\n}\n\n.container-title-logo {\n  display: flex;\n  justify-content: center;\n}\n\n.text-title-logo {\n  font-size: 1rem;\n  padding: 0.6rem;\n  margin-top: 0.2rem;\n  color: #f5f6fa;\n}\n\n.text-title-logo:hover {\n  transition: all 0.2s;\n  background-color: #2ecc71;\n  border-radius: 0.2rem;\n  cursor: pointer;\n}\n/* header end */\n\n/* main start */\nmain {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  background: white;\n}\n\nmain a {\n  font-size: 2rem;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n/* main end */\n\n/* footer start */\nfooter {\n  height: 8rem;\n  background-color: #4d4d4d;\n  color: #f5f6fa;\n  font-size: 0.7rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nimg {\n  height: 1rem;\n  width: 1rem;\n  margin-bottom: -0.1rem;\n}\n\n.j {\n  font-family: \"Roboto Condensed\", sans-seri;\n}\n\n.e {\n  font-family: \"Roboto Condensed\", sans-seri;\n}\n/* footer end */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/game/game.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/game/game.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* main start */
main {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: white;
}

canvas {
  border: 1px solid black;
}
/* main end */
`, "",{"version":3,"sources":["webpack://./src/game/game.css"],"names":[],"mappings":"AAAA,eAAe;AACf;EACE,aAAa;EACb,WAAW;EACX,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;AACzB;AACA,aAAa","sourcesContent":["/* main start */\nmain {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  background: white;\n}\n\ncanvas {\n  border: 1px solid black;\n}\n/* main end */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/game/game.css":
/*!***************************!*\
  !*** ./src/game/game.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./game.css */ "./node_modules/css-loader/dist/cjs.js!./src/game/game.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _game_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.css */ "./src/game/game.css");
/* harmony import */ var _map_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map/map.js */ "./src/map/map.js");
/* harmony import */ var _snake_snake_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../snake/snake.js */ "./src/snake/snake.js");




(0,_map_map_js__WEBPACK_IMPORTED_MODULE_2__.drawMap)();
(0,_snake_snake_js__WEBPACK_IMPORTED_MODULE_3__.snakePosition)();
(0,_snake_snake_js__WEBPACK_IMPORTED_MODULE_3__.drawSnakeBody)();
requestAnimationFrame(_snake_snake_js__WEBPACK_IMPORTED_MODULE_3__.move);
})();

/******/ })()
;
//# sourceMappingURL=game.bundle.js.map