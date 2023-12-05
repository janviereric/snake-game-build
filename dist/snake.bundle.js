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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/snake/snake.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=snake.bundle.js.map