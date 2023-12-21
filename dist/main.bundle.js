/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/javascripts/menu.js":
/*!****************************************!*\
  !*** ./src/assets/javascripts/menu.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openMenu: () => (/* binding */ openMenu)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index.js */ "./src/index.js");

const body = document.querySelector("body");
const containerMenu = document.querySelector("#container-menu");
let calc;
let menu;
let start = false;

// draw the snake game when we start
if (!start) {
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.landMaps)();
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.snakePosition)();
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeBody)();
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.fruitsAppear)();
}
const createCalc = () => {
  calc = document.createElement("div");
  calc.classList.add("calc");
  calc.addEventListener("click", event => {
    event.stopPropagation();
  });
};
const createMenu = () => {
  body.classList.add("remove-scrolling");
  menu = document.createElement("div");
  menu.classList.add("menu");
  menu.innerHTML = `
  <div class="menu-home">
    <div class="menu-image"> 
      <img src="./assets/images/janviereric.jpg" alt="JanvierEric" />
    </div>
    <div class="menu-buttons">
      <button class="button button-play"> ▷ Jouer </button>
      <div class="button-params">
        <img src="./assets/images/button-params.jpg" alt="button params" />
      </div>
    </div>
  </div>
  `;
  const buttonPlay = menu.querySelector(".button-play");
  buttonPlay.addEventListener("click", event => {
    event.stopPropagation();
    containerMenu.classList.add("off");
    start = !start;
    requestAnimationFrame(_index_js__WEBPACK_IMPORTED_MODULE_0__.gameLoop);
  });
};

// menu is open when we start
createCalc();
createMenu();
calc.append(menu);
containerMenu.append(calc);

// open the menu anywhere
const openMenu = () => {
  containerMenu.classList.remove("off");
  calc.append(menu);
  containerMenu.append(calc);
};

/***/ }),

/***/ "./src/fruits/fruits-appear.js":
/*!*************************************!*\
  !*** ./src/fruits/fruits-appear.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fruitsAppear: () => (/* binding */ fruitsAppear)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");

const fruits = Math.floor(Math.random() * 10);
const fruitsAppear = () => {
  if (fruits === 0) {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawFruits)(_index_js__WEBPACK_IMPORTED_MODULE_0__.redFruitColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.redFruitBorderColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.redBranchFruitColor);
  } else if (fruits === 1) {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawFruits)(_index_js__WEBPACK_IMPORTED_MODULE_0__.blueFruitColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.blueFruitBorderColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.blueBranchFruitColor);
  } else if (fruits === 2) {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawFruits)(_index_js__WEBPACK_IMPORTED_MODULE_0__.grayFruitColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.grayFruitBorderColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.grayBranchFruitColor);
  } else if (fruits === 3) {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawFruits)(_index_js__WEBPACK_IMPORTED_MODULE_0__.pinkFruitColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.pinkFruitBorderColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.pinkBranchFruitColor);
  } else if (fruits === 4) {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawFruits)(_index_js__WEBPACK_IMPORTED_MODULE_0__.blackFruitColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.blackFruitBorderColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.blackBranchFruitColor);
  } else if (fruits === 5) {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawFruits)(_index_js__WEBPACK_IMPORTED_MODULE_0__.greenFruitColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.greenFruitBorderColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.greenBranchFruitColor);
  } else if (fruits === 6) {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawFruits)(_index_js__WEBPACK_IMPORTED_MODULE_0__.whiteFruitColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.whiteFruitBorderColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.whiteBranchFruitColor);
  } else if (fruits === 7) {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawFruits)(_index_js__WEBPACK_IMPORTED_MODULE_0__.orangeFruitColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.orangeFruitBorderColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.orangeBranchFruitColor);
  } else if (fruits === 8) {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawFruits)(_index_js__WEBPACK_IMPORTED_MODULE_0__.purpleFruitColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.purpleFruitBorderColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.purpleBranchFruitColor);
  } else {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawFruits)(_index_js__WEBPACK_IMPORTED_MODULE_0__.yellowFruitColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.yellowFruitBorderColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.yellowBranchFruitColor);
  }
};

/***/ }),

/***/ "./src/fruits/fruits-color.js":
/*!************************************!*\
  !*** ./src/fruits/fruits-color.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blackBranchFruitColor: () => (/* binding */ blackBranchFruitColor),
/* harmony export */   blackFruitBorderColor: () => (/* binding */ blackFruitBorderColor),
/* harmony export */   blackFruitColor: () => (/* binding */ blackFruitColor),
/* harmony export */   blueBranchFruitColor: () => (/* binding */ blueBranchFruitColor),
/* harmony export */   blueFruitBorderColor: () => (/* binding */ blueFruitBorderColor),
/* harmony export */   blueFruitColor: () => (/* binding */ blueFruitColor),
/* harmony export */   grayBranchFruitColor: () => (/* binding */ grayBranchFruitColor),
/* harmony export */   grayFruitBorderColor: () => (/* binding */ grayFruitBorderColor),
/* harmony export */   grayFruitColor: () => (/* binding */ grayFruitColor),
/* harmony export */   greenBranchFruitColor: () => (/* binding */ greenBranchFruitColor),
/* harmony export */   greenFruitBorderColor: () => (/* binding */ greenFruitBorderColor),
/* harmony export */   greenFruitColor: () => (/* binding */ greenFruitColor),
/* harmony export */   orangeBranchFruitColor: () => (/* binding */ orangeBranchFruitColor),
/* harmony export */   orangeFruitBorderColor: () => (/* binding */ orangeFruitBorderColor),
/* harmony export */   orangeFruitColor: () => (/* binding */ orangeFruitColor),
/* harmony export */   pinkBranchFruitColor: () => (/* binding */ pinkBranchFruitColor),
/* harmony export */   pinkFruitBorderColor: () => (/* binding */ pinkFruitBorderColor),
/* harmony export */   pinkFruitColor: () => (/* binding */ pinkFruitColor),
/* harmony export */   purpleBranchFruitColor: () => (/* binding */ purpleBranchFruitColor),
/* harmony export */   purpleFruitBorderColor: () => (/* binding */ purpleFruitBorderColor),
/* harmony export */   purpleFruitColor: () => (/* binding */ purpleFruitColor),
/* harmony export */   redBranchFruitColor: () => (/* binding */ redBranchFruitColor),
/* harmony export */   redFruitBorderColor: () => (/* binding */ redFruitBorderColor),
/* harmony export */   redFruitColor: () => (/* binding */ redFruitColor),
/* harmony export */   whiteBranchFruitColor: () => (/* binding */ whiteBranchFruitColor),
/* harmony export */   whiteFruitBorderColor: () => (/* binding */ whiteFruitBorderColor),
/* harmony export */   whiteFruitColor: () => (/* binding */ whiteFruitColor),
/* harmony export */   yellowBranchFruitColor: () => (/* binding */ yellowBranchFruitColor),
/* harmony export */   yellowFruitBorderColor: () => (/* binding */ yellowFruitBorderColor),
/* harmony export */   yellowFruitColor: () => (/* binding */ yellowFruitColor)
/* harmony export */ });
const greenFruitColor = "#6ab04c";
const greenFruitBorderColor = "#3ae374";
const greenBranchFruitColor = "#218c74";
const redFruitColor = "#ff3838";
const redFruitBorderColor = "#fab1a0";
const redBranchFruitColor = "#c23616";
const blueFruitColor = "#0097e6";
const blueFruitBorderColor = "#34e7e4";
const blueBranchFruitColor = "#227093";
const yellowFruitColor = "#fbc531";
const yellowFruitBorderColor = "#fffa65";
const yellowBranchFruitColor = "#cc8e35";
const pinkFruitColor = "#ff6b81";
const pinkFruitBorderColor = "#ffb8b8";
const pinkBranchFruitColor = "#fc427b";
const orangeFruitColor = "#ff793f";
const orangeFruitBorderColor = "#ffc048";
const orangeBranchFruitColor = "#d35400";
const purpleFruitColor = "#a55eea";
const purpleFruitBorderColor = "#c7ecee";
const purpleBranchFruitColor = "#8854d0";
const grayFruitColor = "#bdc3c7";
const grayFruitBorderColor = "#dfe4ea";
const grayBranchFruitColor = "#596275";
const whiteFruitColor = "#f7f1e3";
const whiteFruitBorderColor = "#ffffff";
const whiteBranchFruitColor = "#dfe4ea";
const blackFruitColor = "#485460";
const blackFruitBorderColor = "#ced6e0";
const blackBranchFruitColor = "#222f3e";

/***/ }),

/***/ "./src/fruits/fruits-draw.js":
/*!***********************************!*\
  !*** ./src/fruits/fruits-draw.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawFruits: () => (/* binding */ drawFruits)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");

let fruit = [5, 1];
const drawFruits = (fruitColor, fruitBorderColor, branchFruitColor) => {
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(fruit[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 5, fruit[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 5, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 10, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 10, 15);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = `${fruitColor}`;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = `${fruitBorderColor}`;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(fruit[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 18, fruit[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 7, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = `${branchFruitColor}`;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
};

/***/ }),

/***/ "./src/game/game-loop.js":
/*!*******************************!*\
  !*** ./src/game/game-loop.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameLoop: () => (/* binding */ gameLoop)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");

const gameLoop = () => {
  if (!(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateSnakePosition)()) {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.landMaps)();
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.snakePosition)();
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeBody)();
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.fruitsAppear)();
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.gameOver)();
    setTimeout(() => {
      requestAnimationFrame(gameLoop);
    }, 1000);
  }
};

/***/ }),

/***/ "./src/game/game-over.js":
/*!*******************************!*\
  !*** ./src/game/game-over.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameOver: () => (/* binding */ gameOver)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");

const gameOver = () => {
  // easy level
  // if (snake[0][0] > 14) {
  //   snake[0][0] = 0;
  // } else if (snake[0][0] < 0) {
  //   snake[0][0] = 14;
  // } else if (snake[0][1] > 14) {
  //   console.log(snake[0][1]);
  //   snake[0][1] = 0;
  // } else if (snake[0][1] < 0) {
  //   console.log(snake[0][1]);
  //   snake[0][1] = 14;
  // } else {

  // middle and hard level
  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.snake[0][0] > 14 || _index_js__WEBPACK_IMPORTED_MODULE_0__.snake[0][0] < 0 || _index_js__WEBPACK_IMPORTED_MODULE_0__.snake[0][1] > 14 || _index_js__WEBPACK_IMPORTED_MODULE_0__.snake[0][1] < 0) {
    // setTimeout(() => {
    //   openMenu();
    // }, "500");
    return true;
  } else {
    const [snakeHead, ...snakeBody] = _index_js__WEBPACK_IMPORTED_MODULE_0__.snake;
    for (let body of snakeBody) {
      if (body[0] === snakeHead[0] && body[1] === snakeHead[1]) {
        // setTimeout(() => {
        //   openMenu();
        // }, "700");
        location.assign("./");
        return true;
      }
    }
  }
  return false;
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blackBorderMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.blackBorderMapColor),
/* harmony export */   blackBranchFruitColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.blackBranchFruitColor),
/* harmony export */   blackFruitBorderColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.blackFruitBorderColor),
/* harmony export */   blackFruitColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.blackFruitColor),
/* harmony export */   blueBorderMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.blueBorderMapColor),
/* harmony export */   blueBranchFruitColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.blueBranchFruitColor),
/* harmony export */   blueFruitBorderColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.blueFruitBorderColor),
/* harmony export */   blueFruitColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.blueFruitColor),
/* harmony export */   context2D: () => (/* reexport safe */ _maps_maps_draw_js__WEBPACK_IMPORTED_MODULE_1__.context2D),
/* harmony export */   darkBlackMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.darkBlackMapColor),
/* harmony export */   darkBlueMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.darkBlueMapColor),
/* harmony export */   darkGrayMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.darkGrayMapColor),
/* harmony export */   darkGreenMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.darkGreenMapColor),
/* harmony export */   darkOrangeMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.darkOrangeMapColor),
/* harmony export */   darkPinkMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.darkPinkMapColor),
/* harmony export */   darkPurpleMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.darkPurpleMapColor),
/* harmony export */   darkRedMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.darkRedMapColor),
/* harmony export */   darkWhiteMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.darkWhiteMapColor),
/* harmony export */   darkYellowMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.darkYellowMapColor),
/* harmony export */   direction: () => (/* reexport safe */ _snake_snake_move_js__WEBPACK_IMPORTED_MODULE_7__.direction),
/* harmony export */   drawFruits: () => (/* reexport safe */ _fruits_fruits_draw_js__WEBPACK_IMPORTED_MODULE_9__.drawFruits),
/* harmony export */   drawMaps: () => (/* reexport safe */ _maps_maps_draw_js__WEBPACK_IMPORTED_MODULE_1__.drawMaps),
/* harmony export */   drawSnakeBody: () => (/* reexport safe */ _snake_snake_draw_body_js__WEBPACK_IMPORTED_MODULE_4__.drawSnakeBody),
/* harmony export */   drawSnakeHeadBottom: () => (/* reexport safe */ _snake_snake_draw_head_js__WEBPACK_IMPORTED_MODULE_5__.drawSnakeHeadBottom),
/* harmony export */   drawSnakeHeadLeft: () => (/* reexport safe */ _snake_snake_draw_head_js__WEBPACK_IMPORTED_MODULE_5__.drawSnakeHeadLeft),
/* harmony export */   drawSnakeHeadRight: () => (/* reexport safe */ _snake_snake_draw_head_js__WEBPACK_IMPORTED_MODULE_5__.drawSnakeHeadRight),
/* harmony export */   drawSnakeHeadTop: () => (/* reexport safe */ _snake_snake_draw_head_js__WEBPACK_IMPORTED_MODULE_5__.drawSnakeHeadTop),
/* harmony export */   drawSnakeTailBottom: () => (/* reexport safe */ _snake_snake_draw_tail_js__WEBPACK_IMPORTED_MODULE_6__.drawSnakeTailBottom),
/* harmony export */   drawSnakeTailLeft: () => (/* reexport safe */ _snake_snake_draw_tail_js__WEBPACK_IMPORTED_MODULE_6__.drawSnakeTailLeft),
/* harmony export */   drawSnakeTailRight: () => (/* reexport safe */ _snake_snake_draw_tail_js__WEBPACK_IMPORTED_MODULE_6__.drawSnakeTailRight),
/* harmony export */   drawSnakeTailTop: () => (/* reexport safe */ _snake_snake_draw_tail_js__WEBPACK_IMPORTED_MODULE_6__.drawSnakeTailTop),
/* harmony export */   fruitsAppear: () => (/* reexport safe */ _fruits_fruits_appear_js__WEBPACK_IMPORTED_MODULE_10__.fruitsAppear),
/* harmony export */   gameLoop: () => (/* reexport safe */ _game_game_loop_js__WEBPACK_IMPORTED_MODULE_12__.gameLoop),
/* harmony export */   gameOver: () => (/* reexport safe */ _game_game_over_js__WEBPACK_IMPORTED_MODULE_13__.gameOver),
/* harmony export */   grayBorderMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.grayBorderMapColor),
/* harmony export */   grayBranchFruitColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.grayBranchFruitColor),
/* harmony export */   grayFruitBorderColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.grayFruitBorderColor),
/* harmony export */   grayFruitColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.grayFruitColor),
/* harmony export */   greenBorderMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.greenBorderMapColor),
/* harmony export */   greenBranchFruitColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.greenBranchFruitColor),
/* harmony export */   greenFruitBorderColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.greenFruitBorderColor),
/* harmony export */   greenFruitColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.greenFruitColor),
/* harmony export */   gridElement: () => (/* reexport safe */ _maps_maps_draw_js__WEBPACK_IMPORTED_MODULE_1__.gridElement),
/* harmony export */   landMaps: () => (/* reexport safe */ _maps_maps_land_js__WEBPACK_IMPORTED_MODULE_2__.landMaps),
/* harmony export */   lightBlackMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.lightBlackMapColor),
/* harmony export */   lightBlueMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.lightBlueMapColor),
/* harmony export */   lightGrayMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.lightGrayMapColor),
/* harmony export */   lightGreenMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.lightGreenMapColor),
/* harmony export */   lightOrangeMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.lightOrangeMapColor),
/* harmony export */   lightPinkMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.lightPinkMapColor),
/* harmony export */   lightPurpleMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.lightPurpleMapColor),
/* harmony export */   lightRedMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.lightRedMapColor),
/* harmony export */   lightWhiteMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.lightWhiteMapColor),
/* harmony export */   lightYellowMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.lightYellowMapColor),
/* harmony export */   openMenu: () => (/* reexport safe */ _assets_javascripts_menu_js__WEBPACK_IMPORTED_MODULE_14__.openMenu),
/* harmony export */   orangeBorderMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.orangeBorderMapColor),
/* harmony export */   orangeBranchFruitColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.orangeBranchFruitColor),
/* harmony export */   orangeFruitBorderColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.orangeFruitBorderColor),
/* harmony export */   orangeFruitColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.orangeFruitColor),
/* harmony export */   pinkBorderMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.pinkBorderMapColor),
/* harmony export */   pinkBranchFruitColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.pinkBranchFruitColor),
/* harmony export */   pinkFruitBorderColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.pinkFruitBorderColor),
/* harmony export */   pinkFruitColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.pinkFruitColor),
/* harmony export */   purpleBorderMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.purpleBorderMapColor),
/* harmony export */   purpleBranchFruitColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.purpleBranchFruitColor),
/* harmony export */   purpleFruitBorderColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.purpleFruitBorderColor),
/* harmony export */   purpleFruitColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.purpleFruitColor),
/* harmony export */   redBorderMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.redBorderMapColor),
/* harmony export */   redBranchFruitColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.redBranchFruitColor),
/* harmony export */   redFruitBorderColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.redFruitBorderColor),
/* harmony export */   redFruitColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.redFruitColor),
/* harmony export */   snake: () => (/* reexport safe */ _snake_snake_draw_head_js__WEBPACK_IMPORTED_MODULE_5__.snake),
/* harmony export */   snakeBodyColor: () => (/* reexport safe */ _snake_snake_color_js__WEBPACK_IMPORTED_MODULE_8__.snakeBodyColor),
/* harmony export */   snakeBodyStainColor: () => (/* reexport safe */ _snake_snake_color_js__WEBPACK_IMPORTED_MODULE_8__.snakeBodyStainColor),
/* harmony export */   snakeColorBorder: () => (/* reexport safe */ _snake_snake_color_js__WEBPACK_IMPORTED_MODULE_8__.snakeColorBorder),
/* harmony export */   snakeEyeFirstColor: () => (/* reexport safe */ _snake_snake_color_js__WEBPACK_IMPORTED_MODULE_8__.snakeEyeFirstColor),
/* harmony export */   snakeEyeSecondColor: () => (/* reexport safe */ _snake_snake_color_js__WEBPACK_IMPORTED_MODULE_8__.snakeEyeSecondColor),
/* harmony export */   snakeEyeThirdColor: () => (/* reexport safe */ _snake_snake_color_js__WEBPACK_IMPORTED_MODULE_8__.snakeEyeThirdColor),
/* harmony export */   snakeFirstBodyStainColor: () => (/* reexport safe */ _snake_snake_color_js__WEBPACK_IMPORTED_MODULE_8__.snakeFirstBodyStainColor),
/* harmony export */   snakeHeadColor: () => (/* reexport safe */ _snake_snake_color_js__WEBPACK_IMPORTED_MODULE_8__.snakeHeadColor),
/* harmony export */   snakeNostrilColor: () => (/* reexport safe */ _snake_snake_color_js__WEBPACK_IMPORTED_MODULE_8__.snakeNostrilColor),
/* harmony export */   snakePosition: () => (/* reexport safe */ _snake_snake_move_js__WEBPACK_IMPORTED_MODULE_7__.snakePosition),
/* harmony export */   snakeTailColor: () => (/* reexport safe */ _snake_snake_color_js__WEBPACK_IMPORTED_MODULE_8__.snakeTailColor),
/* harmony export */   snakeTailStainColorBottomDirection: () => (/* reexport safe */ _snake_snake_color_js__WEBPACK_IMPORTED_MODULE_8__.snakeTailStainColorBottomDirection),
/* harmony export */   snakeTailStainColorLeftDirection: () => (/* reexport safe */ _snake_snake_color_js__WEBPACK_IMPORTED_MODULE_8__.snakeTailStainColorLeftDirection),
/* harmony export */   snakeTailStainColorRightDirection: () => (/* reexport safe */ _snake_snake_color_js__WEBPACK_IMPORTED_MODULE_8__.snakeTailStainColorRightDirection),
/* harmony export */   snakeTailStainColorTopDirection: () => (/* reexport safe */ _snake_snake_color_js__WEBPACK_IMPORTED_MODULE_8__.snakeTailStainColorTopDirection),
/* harmony export */   updateSnakePosition: () => (/* reexport safe */ _snake_snake_move_js__WEBPACK_IMPORTED_MODULE_7__.updateSnakePosition),
/* harmony export */   whiteBorderMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.whiteBorderMapColor),
/* harmony export */   whiteBranchFruitColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.whiteBranchFruitColor),
/* harmony export */   whiteFruitBorderColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.whiteFruitBorderColor),
/* harmony export */   whiteFruitColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.whiteFruitColor),
/* harmony export */   yellowBorderMapColor: () => (/* reexport safe */ _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__.yellowBorderMapColor),
/* harmony export */   yellowBranchFruitColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.yellowBranchFruitColor),
/* harmony export */   yellowFruitBorderColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.yellowFruitBorderColor),
/* harmony export */   yellowFruitColor: () => (/* reexport safe */ _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__.yellowFruitColor)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _maps_maps_draw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps/maps-draw.js */ "./src/maps/maps-draw.js");
/* harmony import */ var _maps_maps_land_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps/maps-land.js */ "./src/maps/maps-land.js");
/* harmony import */ var _maps_maps_color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maps/maps-color.js */ "./src/maps/maps-color.js");
/* harmony import */ var _snake_snake_draw_body_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./snake/snake-draw-body.js */ "./src/snake/snake-draw-body.js");
/* harmony import */ var _snake_snake_draw_head_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./snake/snake-draw-head.js */ "./src/snake/snake-draw-head.js");
/* harmony import */ var _snake_snake_draw_tail_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./snake/snake-draw-tail.js */ "./src/snake/snake-draw-tail.js");
/* harmony import */ var _snake_snake_move_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./snake/snake-move.js */ "./src/snake/snake-move.js");
/* harmony import */ var _snake_snake_color_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./snake/snake-color.js */ "./src/snake/snake-color.js");
/* harmony import */ var _fruits_fruits_draw_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fruits/fruits-draw.js */ "./src/fruits/fruits-draw.js");
/* harmony import */ var _fruits_fruits_appear_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fruits/fruits-appear.js */ "./src/fruits/fruits-appear.js");
/* harmony import */ var _fruits_fruits_color_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fruits/fruits-color.js */ "./src/fruits/fruits-color.js");
/* harmony import */ var _game_game_loop_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./game/game-loop.js */ "./src/game/game-loop.js");
/* harmony import */ var _game_game_over_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./game/game-over.js */ "./src/game/game-over.js");
/* harmony import */ var _assets_javascripts_menu_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/javascripts/menu.js */ "./src/assets/javascripts/menu.js");


// folder map start



// folder map end

// folder snake start





// folder snake end

// folder fruits start



// folder fruits end

// folder rules start


// folder rules end

// folder assets > javascripts start

// folder assets > javascripts end

/***/ }),

/***/ "./src/maps/maps-color.js":
/*!********************************!*\
  !*** ./src/maps/maps-color.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blackBorderMapColor: () => (/* binding */ blackBorderMapColor),
/* harmony export */   blueBorderMapColor: () => (/* binding */ blueBorderMapColor),
/* harmony export */   darkBlackMapColor: () => (/* binding */ darkBlackMapColor),
/* harmony export */   darkBlueMapColor: () => (/* binding */ darkBlueMapColor),
/* harmony export */   darkGrayMapColor: () => (/* binding */ darkGrayMapColor),
/* harmony export */   darkGreenMapColor: () => (/* binding */ darkGreenMapColor),
/* harmony export */   darkOrangeMapColor: () => (/* binding */ darkOrangeMapColor),
/* harmony export */   darkPinkMapColor: () => (/* binding */ darkPinkMapColor),
/* harmony export */   darkPurpleMapColor: () => (/* binding */ darkPurpleMapColor),
/* harmony export */   darkRedMapColor: () => (/* binding */ darkRedMapColor),
/* harmony export */   darkWhiteMapColor: () => (/* binding */ darkWhiteMapColor),
/* harmony export */   darkYellowMapColor: () => (/* binding */ darkYellowMapColor),
/* harmony export */   grayBorderMapColor: () => (/* binding */ grayBorderMapColor),
/* harmony export */   greenBorderMapColor: () => (/* binding */ greenBorderMapColor),
/* harmony export */   lightBlackMapColor: () => (/* binding */ lightBlackMapColor),
/* harmony export */   lightBlueMapColor: () => (/* binding */ lightBlueMapColor),
/* harmony export */   lightGrayMapColor: () => (/* binding */ lightGrayMapColor),
/* harmony export */   lightGreenMapColor: () => (/* binding */ lightGreenMapColor),
/* harmony export */   lightOrangeMapColor: () => (/* binding */ lightOrangeMapColor),
/* harmony export */   lightPinkMapColor: () => (/* binding */ lightPinkMapColor),
/* harmony export */   lightPurpleMapColor: () => (/* binding */ lightPurpleMapColor),
/* harmony export */   lightRedMapColor: () => (/* binding */ lightRedMapColor),
/* harmony export */   lightWhiteMapColor: () => (/* binding */ lightWhiteMapColor),
/* harmony export */   lightYellowMapColor: () => (/* binding */ lightYellowMapColor),
/* harmony export */   orangeBorderMapColor: () => (/* binding */ orangeBorderMapColor),
/* harmony export */   pinkBorderMapColor: () => (/* binding */ pinkBorderMapColor),
/* harmony export */   purpleBorderMapColor: () => (/* binding */ purpleBorderMapColor),
/* harmony export */   redBorderMapColor: () => (/* binding */ redBorderMapColor),
/* harmony export */   whiteBorderMapColor: () => (/* binding */ whiteBorderMapColor),
/* harmony export */   yellowBorderMapColor: () => (/* binding */ yellowBorderMapColor)
/* harmony export */ });
const lightGreenMapColor = "#44bd32";
const darkGreenMapColor = "#009432";
const greenBorderMapColor = "2rem #27ae60 solid";
const lightRedMapColor = "#e66767 ";
const darkRedMapColor = "#b33939";
const redBorderMapColor = "2rem #ea2027 solid";
const lightBlueMapColor = "#4b7bec";
const darkBlueMapColor = "#3867d6";
const blueBorderMapColor = "2rem #0652DD solid";
const lightYellowMapColor = "#ffda79";
const darkYellowMapColor = "#ccae62";
const yellowBorderMapColor = "2rem #ffb142 solid";
const lightPinkMapColor = "#fd79a8";
const darkPinkMapColor = "#e84393";
const pinkBorderMapColor = "2rem #ed4C67 solid";
const lightOrangeMapColor = "#f3a683";
const darkOrangeMapColor = "#f19066";
const orangeBorderMapColor = "2rem #e67e22 solid";
const lightPurpleMapColor = "#9c88ff";
const darkPurpleMapColor = "#8c7ae6";
const purpleBorderMapColor = "2rem #7158e2 solid";
const lightGrayMapColor = "#a5b1c2";
const darkGrayMapColor = "#808e9b";
const grayBorderMapColor = "2rem #57606f solid";
const lightWhiteMapColor = "#dfe4ea";
const darkWhiteMapColor = "#dcdde1";
const whiteBorderMapColor = "2rem #f5f6fa solid";
const lightBlackMapColor = "#4b4b4b";
const darkBlackMapColor = "#3d3d3d";
const blackBorderMapColor = "2rem #28282b solid";

/***/ }),

/***/ "./src/maps/maps-draw.js":
/*!*******************************!*\
  !*** ./src/maps/maps-draw.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   context2D: () => (/* binding */ context2D),
/* harmony export */   drawMaps: () => (/* binding */ drawMaps),
/* harmony export */   gridElement: () => (/* binding */ gridElement)
/* harmony export */ });
const canvas = document.querySelector("canvas");
const context2D = canvas.getContext("2d");
const gridElement = 40; // 20 * 20

const drawMaps = (lightMapColor, darkMapColor, borderMapColor) => {
  context2D.beginPath();
  for (let i = 1; i <= 15; i++) {
    for (let j = 1; j <= 15; j++) {
      context2D.fillStyle = (i + j) % 2 === 0 ? `${lightMapColor}` : `${darkMapColor}`;
      context2D.fillRect(gridElement * (i - 1), gridElement * (j - 1), 600, 600);
    }
  }
  canvas.style.setProperty("border", `${borderMapColor}`);
  context2D.closePath();
};

/***/ }),

/***/ "./src/maps/maps-land.js":
/*!*******************************!*\
  !*** ./src/maps/maps-land.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   landMaps: () => (/* binding */ landMaps)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");

const maps = Math.floor(Math.random() * 10);
const landMaps = () => {
  if (maps === 0) {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawMaps)(_index_js__WEBPACK_IMPORTED_MODULE_0__.lightRedMapColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.darkRedMapColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.redBorderMapColor);
  } else if (maps === 1) {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawMaps)(_index_js__WEBPACK_IMPORTED_MODULE_0__.lightBlueMapColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.darkBlueMapColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.blueBorderMapColor);
  } else if (maps === 2) {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawMaps)(_index_js__WEBPACK_IMPORTED_MODULE_0__.lightGrayMapColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.darkGrayMapColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.grayBorderMapColor);
  } else if (maps === 3) {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawMaps)(_index_js__WEBPACK_IMPORTED_MODULE_0__.lightPinkMapColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.darkPinkMapColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.pinkBorderMapColor);
  } else if (maps === 4) {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawMaps)(_index_js__WEBPACK_IMPORTED_MODULE_0__.lightBlackMapColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.darkBlackMapColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.blackBorderMapColor);
  } else if (maps === 5) {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawMaps)(_index_js__WEBPACK_IMPORTED_MODULE_0__.lightGreenMapColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.darkGreenMapColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.greenBorderMapColor);
  } else if (maps === 6) {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawMaps)(_index_js__WEBPACK_IMPORTED_MODULE_0__.lightWhiteMapColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.darkWhiteMapColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.whiteBorderMapColor);
  } else if (maps === 7) {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawMaps)(_index_js__WEBPACK_IMPORTED_MODULE_0__.lightOrangeMapColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.darkOrangeMapColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.orangeBorderMapColor);
  } else if (maps === 8) {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawMaps)(_index_js__WEBPACK_IMPORTED_MODULE_0__.lightPurpleMapColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.darkPurpleMapColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.purpleBorderMapColor);
  } else {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawMaps)(_index_js__WEBPACK_IMPORTED_MODULE_0__.lightYellowMapColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.darkYellowMapColor, _index_js__WEBPACK_IMPORTED_MODULE_0__.yellowBorderMapColor);
  }
};

/***/ }),

/***/ "./src/snake/snake-color.js":
/*!**********************************!*\
  !*** ./src/snake/snake-color.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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

/***/ "./src/snake/snake-draw-body.js":
/*!**************************************!*\
  !*** ./src/snake/snake-draw-body.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawSnakeBody: () => (/* binding */ drawSnakeBody)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");

const drawSnakeBody = () => {
  // snake body start
  let [, ...snakeBody] = _index_js__WEBPACK_IMPORTED_MODULE_0__.snake;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeBodyColor;
  for (let body of snakeBody) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(body[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, body[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, 5);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
    snakeBody.pop();
    snakeBody.push(body);

    // snake body first stain start
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(body[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, body[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeBodyStainColor;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
    // snake body first stain end

    // snake body second stain start
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(body[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, body[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeBodyStainColor;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
    // snake body second stain end

    // snake body third stain start
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(body[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, body[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeBodyStainColor;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
    // snake body third stain end

    // snake body fourth stain start
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(body[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, body[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeBodyStainColor;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
    // snake body fourth stain end

    // snake body fifth stain start
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(body[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, body[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeBodyStainColor;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
    // snake body fifth stain end

    // snake body sixth stain start
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(body[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, body[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeBodyStainColor;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
    // snake body sixth stain end

    // snake body seventh stain start
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(body[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, body[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeBodyStainColor;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
    // snake body seventh stain end

    // snake body eighth stain start
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(body[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, body[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeBodyStainColor;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
    // snake body eighth stain end

    let firstBody = snakeBody[0];
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.direction === "e" || _index_js__WEBPACK_IMPORTED_MODULE_0__.direction === "o") {
      // snake first body first stain start
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(firstBody[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 3, firstBody[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 5, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeFirstBodyStainColor;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
      // snake first body first stain end

      // snake first body second stain start
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(firstBody[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 3, firstBody[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 25, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeFirstBodyStainColor;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
      // snake first body second stain end

      // snake first body third stain start
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(firstBody[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, firstBody[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 5, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeFirstBodyStainColor;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
      // snake first body third stain end

      // snake first body fourth stain start
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(firstBody[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, firstBody[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 25, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeFirstBodyStainColor;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
      // snake first body fourth stain end
    } else {
      // snake first body first stain start
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(firstBody[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 5, firstBody[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 3, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 5);
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeFirstBodyStainColor;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
      // snake first body first stain end

      // snake first body second stain start
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(firstBody[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 5, firstBody[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 5);
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeFirstBodyStainColor;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
      // snake first body second stain end

      // snake first body third stain start
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(firstBody[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 25, firstBody[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 3, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 5);
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeFirstBodyStainColor;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
      // snake first body third stain end

      // snake first body fourth stain start
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(firstBody[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 25, firstBody[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 5);
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeFirstBodyStainColor;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
      // snake first body fourth stain end
    }
  }
  // snake body first stain start
  // snake body end
};

/***/ }),

/***/ "./src/snake/snake-draw-head.js":
/*!**************************************!*\
  !*** ./src/snake/snake-draw-head.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawSnakeHeadBottom: () => (/* binding */ drawSnakeHeadBottom),
/* harmony export */   drawSnakeHeadLeft: () => (/* binding */ drawSnakeHeadLeft),
/* harmony export */   drawSnakeHeadRight: () => (/* binding */ drawSnakeHeadRight),
/* harmony export */   drawSnakeHeadTop: () => (/* binding */ drawSnakeHeadTop),
/* harmony export */   snake: () => (/* binding */ snake)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");

const snake = [[2, 7], [1, 7], [0, 7]];
const drawSnakeHeadRight = () => {
  // snake head start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 2, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, 15);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeHeadColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();

  // snake right nostril start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 32, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 25, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 36, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 38, 2);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeNostrilColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake right nostril end

  // snake left nostril start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 32, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 12, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 36, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 38, 2);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeNostrilColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake left nostril end

  // snake right eye start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, 10);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeFirstColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 3, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 23, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 10);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeSecondColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 13, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 28, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeThirdColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake right eye end

  // snake left eye start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, 10);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeFirstColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 3, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 3, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 10);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeSecondColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 13, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 8, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeThirdColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake left eye end
  // snake head end
};

const drawSnakeHeadLeft = () => {
  // snake head start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 1, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, 15);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeHeadColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();

  // snake right nostril start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 4, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 13, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 36, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 38, 2);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeNostrilColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake right nostril end

  // snake left nostril start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 4, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 25, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 36, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 38, 2);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeNostrilColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake left nostril end

  // snake right eye start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, 10);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeFirstColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 3, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 10);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeSecondColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 7, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeThirdColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake right eye end

  // snake left eye start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, 10);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeFirstColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 23, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 10);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeSecondColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 28, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeThirdColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake left eye end
  // snake head end
};

const drawSnakeHeadTop = () => {
  // snake head start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 1, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, 15);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeHeadColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();

  // snake right nostril start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 25, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 6, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 38, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 36, 2);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeNostrilColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake right nostril start

  // snake left nostril start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 13, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 6, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 38, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 36, 2);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeNostrilColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake left nostril end

  // snake right eye start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, 10);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeFirstColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 23, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 10);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeSecondColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 28, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeThirdColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake right eye end

  // snake left eye start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, 10);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeFirstColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 2, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 10);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeSecondColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 7, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 22, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeThirdColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake left eye end
  // snake head end
};

const drawSnakeHeadBottom = () => {
  // snake head start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 2, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, 15);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeHeadColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();

  // snake right nostril start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 13, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 38, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 36, 2);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeNostrilColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake right nostril end

  // snake left nostril start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 25, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 38, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 36, 2);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeNostrilColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake left nostril end

  // snake right eye start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 1, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, 10);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeFirstColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 3, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 4, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 10);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeSecondColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 8, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 14, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeThirdColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake right eye end

  // snake left eye start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 1, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 20, 10);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeFirstColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 23, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 4, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 25, 10);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeSecondColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snake[0][0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 28, snake[0][1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 14, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 35, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeEyeThirdColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake left eye end
  // snake head end
};

/***/ }),

/***/ "./src/snake/snake-draw-tail.js":
/*!**************************************!*\
  !*** ./src/snake/snake-draw-tail.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawSnakeTailBottom: () => (/* binding */ drawSnakeTailBottom),
/* harmony export */   drawSnakeTailLeft: () => (/* binding */ drawSnakeTailLeft),
/* harmony export */   drawSnakeTailRight: () => (/* binding */ drawSnakeTailRight),
/* harmony export */   drawSnakeTailTop: () => (/* binding */ drawSnakeTailTop)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");

const drawSnakeTailRight = () => {
  let snakeTail = _index_js__WEBPACK_IMPORTED_MODULE_0__.snake[_index_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1];
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();

  // snake tail first stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorRightDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail first stain start

  // snake tail second stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorRightDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail second stain start

  // snake tail third stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorRightDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail third stain start

  // snake tail fourth stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorRightDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail fourth stain start

  // snake tail fifth stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorRightDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail fifth stain start

  // snake tail sixth stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorRightDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail sixth stain start

  // snake tail seventh stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorRightDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail seventh stain start

  // snake tail eighth stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorRightDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail eighth stain start
};

const drawSnakeTailLeft = () => {
  let snakeTail = _index_js__WEBPACK_IMPORTED_MODULE_0__.snake[_index_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1];
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();

  // snake tail first stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorLeftDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail first stain start

  // snake tail second stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorLeftDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail second stain start

  // snake tail third stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorLeftDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail third stain start

  // snake tail fourth stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorLeftDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail fourth stain start

  // snake tail fifth stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorLeftDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail fifth stain start

  // snake tail sixth stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorLeftDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail sixth stain start

  // snake tail seventh stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorLeftDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail seventh stain start

  // snake tail eighth stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorLeftDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail eighth stain start
};

const drawSnakeTailTop = () => {
  let snakeTail = _index_js__WEBPACK_IMPORTED_MODULE_0__.snake[_index_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1];
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();

  // snake tail first stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorTopDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail first stain start

  // snake tail second stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorTopDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail second stain start

  // snake tail third stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorTopDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail third stain start

  // snake tail fourth stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorTopDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail fourth stain start

  // snake tail fifth stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorTopDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail fifth stain start

  // snake tail sixth stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorTopDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail sixth stain start

  // snake tail seventh stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorTopDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail seventh stain start

  // snake tail eighth stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorTopDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail eighth stain start
};

const drawSnakeTailBottom = () => {
  let snakeTail = _index_js__WEBPACK_IMPORTED_MODULE_0__.snake[_index_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1];
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailColor;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();

  // snake tail first stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorBottomDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail first stain start

  // snake tail second stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorBottomDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail second stain start

  // snake tail third stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorBottomDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail third stain start

  // snake tail fourth stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorBottomDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail fourth stain start

  // snake tail fifth stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorBottomDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail fifth stain start

  // snake tail sixth stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 20, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorBottomDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail sixth stain start

  // snake tail seventh stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 10, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorBottomDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail seventh stain start

  // snake tail eighth stain start
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.beginPath();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.roundRect(snakeTail[0] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, snakeTail[1] * _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement + 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, _index_js__WEBPACK_IMPORTED_MODULE_0__.gridElement - 30, 5);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.lineWidth = 2;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.strokeStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeColorBorder;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fillStyle = _index_js__WEBPACK_IMPORTED_MODULE_0__.snakeTailStainColorBottomDirection;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.fill();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.stroke();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.context2D.closePath();
  // snake tail eighth stain start
};

/***/ }),

/***/ "./src/snake/snake-move.js":
/*!*********************************!*\
  !*** ./src/snake/snake-move.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   direction: () => (/* binding */ direction),
/* harmony export */   snakePosition: () => (/* binding */ snakePosition),
/* harmony export */   updateSnakePosition: () => (/* binding */ updateSnakePosition)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");

let direction = "e";
window.addEventListener("keydown", event => {
  switch (event.key) {
    case "d":
    case "ArrowRight":
      {
        direction = "e";
        break;
      }
    case "q":
    case "a":
    case "ArrowLeft":
      {
        direction = "o";
        break;
      }
    case "z":
    case "w":
    case "ArrowUp":
      {
        direction = "n";
        break;
      }
    case "s":
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
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeHeadRight)();
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeTailRight)();
        break;
      }
    case "o":
      {
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeHeadLeft)();
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeTailLeft)();
        break;
      }
    case "n":
      {
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeHeadTop)();
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeTailTop)();
        break;
      }
    case "s":
      {
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeHeadBottom)();
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeTailBottom)();
        break;
      }
    default:
      {
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeHeadRight)();
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawSnakeTailRight)();
      }
  }
};
const updateSnakePosition = () => {
  let snakeHead;
  let snakeTail;
  switch (direction) {
    case "e":
      {
        snakeHead = [_index_js__WEBPACK_IMPORTED_MODULE_0__.snake[0][0] + 1, _index_js__WEBPACK_IMPORTED_MODULE_0__.snake[0][1]];
        snakeTail = [_index_js__WEBPACK_IMPORTED_MODULE_0__.snake[_index_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1][0] + 1, _index_js__WEBPACK_IMPORTED_MODULE_0__.snake[_index_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1][1]];
        break;
      }
    case "o":
      {
        snakeHead = [_index_js__WEBPACK_IMPORTED_MODULE_0__.snake[0][0] - 1, _index_js__WEBPACK_IMPORTED_MODULE_0__.snake[0][1]];
        snakeTail = [_index_js__WEBPACK_IMPORTED_MODULE_0__.snake[_index_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1][0] - 1, _index_js__WEBPACK_IMPORTED_MODULE_0__.snake[_index_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1][1]];
        break;
      }
    case "n":
      {
        snakeHead = [_index_js__WEBPACK_IMPORTED_MODULE_0__.snake[0][0], _index_js__WEBPACK_IMPORTED_MODULE_0__.snake[0][1] - 1];
        snakeTail = [_index_js__WEBPACK_IMPORTED_MODULE_0__.snake[_index_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1][0], _index_js__WEBPACK_IMPORTED_MODULE_0__.snake[_index_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1][1] - 1];
        break;
      }
    case "s":
      {
        snakeHead = [_index_js__WEBPACK_IMPORTED_MODULE_0__.snake[0][0], _index_js__WEBPACK_IMPORTED_MODULE_0__.snake[0][1] + 1];
        snakeTail = [_index_js__WEBPACK_IMPORTED_MODULE_0__.snake[_index_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1][0], _index_js__WEBPACK_IMPORTED_MODULE_0__.snake[_index_js__WEBPACK_IMPORTED_MODULE_0__.snake.length - 1][1] + 1];
        break;
      }
    default:
      {}
  }
  _index_js__WEBPACK_IMPORTED_MODULE_0__.snake.unshift(snakeHead);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.snake.pop();
  return (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.gameOver)();
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/classes.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/classes.css ***!
  \**************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.off {
  display: none;
}

.remove-scrolling {
  overflow: hidden;
}

.button {
  border: 0;
  border-radius: 0.3rem;
  padding: 1rem 2rem;
  font-weight: 700;
  cursor: pointer;
  transition: box-shadow 0.2s;
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 0.1rem 0.2rem 0 rgba(60, 64, 67, 0.3),
      0 0.1rem 0.3rem 0.1rem rgba(60, 64, 67, 0.15);
    opacity: 89%;
    transition: box-shadow 0.2s;
    transition: all 0.2s;
  }
}

.button-play {
  background: #2ecc71;
  border: 0.2rem solid #27ae60;
  color: #f5f6fa;
  font-size: 1rem;
  transition: all 0.2s;
}

.button-params {
  height: 4rem;
  width: 4rem;
  border-radius: 0.3rem;
  background-color: #f5f6fa;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
}

.button-params:hover {
  opacity: 89%;
  transition: all 0.2s;
}

.button-params img {
  height: 3rem;
  width: 3rem;
  border-radius: 2.5rem;
}
`, "",{"version":3,"sources":["webpack://./src/assets/css/classes.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,2BAA2B;EAC3B,oBAAoB;EACpB;IACE;mDAC+C;IAC/C,YAAY;IACZ,2BAA2B;IAC3B,oBAAoB;EACtB;AACF;;AAEA;EACE,mBAAmB;EACnB,4BAA4B;EAC5B,cAAc;EACd,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,qBAAqB;EACrB,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,qBAAqB;AACvB","sourcesContent":[".off {\n  display: none;\n}\n\n.remove-scrolling {\n  overflow: hidden;\n}\n\n.button {\n  border: 0;\n  border-radius: 0.3rem;\n  padding: 1rem 2rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: box-shadow 0.2s;\n  transition: all 0.2s;\n  &:hover {\n    box-shadow: 0 0.1rem 0.2rem 0 rgba(60, 64, 67, 0.3),\n      0 0.1rem 0.3rem 0.1rem rgba(60, 64, 67, 0.15);\n    opacity: 89%;\n    transition: box-shadow 0.2s;\n    transition: all 0.2s;\n  }\n}\n\n.button-play {\n  background: #2ecc71;\n  border: 0.2rem solid #27ae60;\n  color: #f5f6fa;\n  font-size: 1rem;\n  transition: all 0.2s;\n}\n\n.button-params {\n  height: 4rem;\n  width: 4rem;\n  border-radius: 0.3rem;\n  background-color: #f5f6fa;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.button-params:hover {\n  opacity: 89%;\n  transition: all 0.2s;\n}\n\n.button-params img {\n  height: 3rem;\n  width: 3rem;\n  border-radius: 2.5rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/footer.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/footer.css ***!
  \*************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `footer {
  min-height: 5rem;
  width: 41.5rem;
  margin-top: -0.3rem;
  background-color: #7f8c8d;
  color: #f5f6fa;
  font-size: 0.7rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
}

img {
  height: 1rem;
  width: 1rem;
  margin-bottom: -0.1rem;
}

.j {
  font-family: "Roboto Condensed", sans-serif;
  color: black;
}

.e {
  font-family: "Roboto Condensed", sans-serif;
  color: black;
}
`, "",{"version":3,"sources":["webpack://./src/assets/css/footer.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,cAAc;EACd,mBAAmB;EACnB,yBAAyB;EACzB,cAAc;EACd,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kCAAkC;EAClC,iCAAiC;AACnC;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,2CAA2C;EAC3C,YAAY;AACd;;AAEA;EACE,2CAA2C;EAC3C,YAAY;AACd","sourcesContent":["footer {\n  min-height: 5rem;\n  width: 41.5rem;\n  margin-top: -0.3rem;\n  background-color: #7f8c8d;\n  color: #f5f6fa;\n  font-size: 0.7rem;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom-right-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n}\n\nimg {\n  height: 1rem;\n  width: 1rem;\n  margin-bottom: -0.1rem;\n}\n\n.j {\n  font-family: \"Roboto Condensed\", sans-serif;\n  color: black;\n}\n\n.e {\n  font-family: \"Roboto Condensed\", sans-serif;\n  color: black;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/header.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/header.css ***!
  \*************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `header {
  background-color: #2ecc71;
  min-height: 5rem;
  width: 41.5rem;
  display: flex;
  align-items: center;
  border-top-right-radius: 0.3rem;
  border-top-left-radius: 0.3rem;
}

.text-title-logo {
  font-size: 1rem;
  padding: 0.6rem;
  margin-top: 0.2rem;
  color: #f5f6fa;
}
`, "",{"version":3,"sources":["webpack://./src/assets/css/header.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,+BAA+B;EAC/B,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,cAAc;AAChB","sourcesContent":["header {\n  background-color: #2ecc71;\n  min-height: 5rem;\n  width: 41.5rem;\n  display: flex;\n  align-items: center;\n  border-top-right-radius: 0.3rem;\n  border-top-left-radius: 0.3rem;\n}\n\n.text-title-logo {\n  font-size: 1rem;\n  padding: 0.6rem;\n  margin-top: 0.2rem;\n  color: #f5f6fa;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/menu.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/menu.css ***!
  \***********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.calc {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu {
  border-radius: 0.3rem;
  text-align: center;
  height: 26rem;
  width: 20rem;
}

.menu-home {
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu-image img {
  height: 20rem;
  width: 20rem;
  border-radius: 0.3rem;
}

.menu-buttons {
  display: flex;
  justify-content: space-between;
}
`, "",{"version":3,"sources":["webpack://./src/assets/css/menu.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,aAAa;EACb,WAAW;EACX,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC","sourcesContent":[".calc {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.menu {\n  border-radius: 0.3rem;\n  text-align: center;\n  height: 26rem;\n  width: 20rem;\n}\n\n.menu-home {\n  height: 25rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.menu-image img {\n  height: 20rem;\n  width: 20rem;\n  border-radius: 0.3rem;\n}\n\n.menu-buttons {\n  display: flex;\n  justify-content: space-between;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/reset.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/reset.css ***!
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
}

body {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
}
`, "",{"version":3,"sources":["webpack://./src/assets/css/reset.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,iCAAiC;EACjC,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,8BAA8B;AAChC","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Mulish\", sans-serif;\n  letter-spacing: 0.1rem;\n}\n\nbody {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.8);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_assets_css_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./assets/css/reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/reset.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_assets_css_classes_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./assets/css/classes.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/classes.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_assets_css_menu_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./assets/css/menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/menu.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_assets_css_header_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./assets/css/header.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/header.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_assets_css_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./assets/css/footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/footer.css");
// Imports







var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_assets_css_reset_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_assets_css_classes_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_assets_css_menu_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_assets_css_header_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_assets_css_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
`, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
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

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map