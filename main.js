/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((module) => {

eval("const projectList = [\r\n    {\r\n        title: \"Fullstack Ecommerce App\",\r\n        description: \"A Fullstack ecommerce app which was built using ReactJS for the frontend and ExpressJS for the its backend API which is integerated with MongoDB Database.\",\r\n        projectLink: \"https://rohannaido.github.io/ecommerce-app/\",\r\n        codeLink: \"https://github.com/rohannaido/ecommerce-app\"\r\n    },\r\n    {\r\n        title: \"Wheres waldo\",\r\n        description: \"A Game with ReactJS in the frontend and Firebase as backend. User has to locate characters in the search image and time will be logged in the backend.\",\r\n        projectLink: \"https://rohannaido.github.io/wheres-waldo/\",\r\n        codeLink: \"https://github.com/rohannaido/wheres-waldo\"\r\n    },\r\n    {\r\n        title: \"Shopping Cart\",\r\n        description: \"Simple ReactJS application with React Routing implementation and add to cart functionality.\",\r\n        projectLink: \"https://rohannaido.github.io/shopping-cart/\",\r\n        codeLink: \"https://github.com/rohannaido/shopping-cart\",\r\n    },\r\n    {\r\n        title: \"CV Project\",\r\n        description: \"ReactJS project to implement useState to update and Build CV.\",\r\n        projectLink: \"https://rohannaido.github.io/cv-project/\",\r\n        codeLink: \"https://github.com/rohannaido/cv-project\",\r\n    },\r\n    {\r\n        title: \"Memory Card Game\",\r\n        description: \"ReactJS Web Game to test memory power by remembering selected cards.\",\r\n        projectLink: \"https://rohannaido.github.io/memory-card-game/\",\r\n        codeLink: \"https://github.com/rohannaido/memory-card-game\",\r\n    }\r\n];\r\n\r\nconst blogList = [];\r\n\r\nmodule.exports = {\r\n    projectList: projectList,\r\n    blogList: blogList\r\n}\n\n//# sourceURL=webpack://portfolio-site/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {projectList} = __webpack_require__(/*! ./data */ \"./src/data.js\")\r\n\r\nconst projectListElement = document.querySelector(\".project-list\");\r\n\r\nfor(let i = 0; i < projectList.length; i++){\r\n    const item = projectList[i];\r\n    const listItem = document.createElement(\"li\");\r\n    listItem.classList.add(\"project-item\");\r\n    \r\n    const projectTitle = document.createElement(\"h3\");\r\n    projectTitle.textContent = item.title;\r\n    \r\n    const projectDesc = document.createElement(\"p\");\r\n    projectDesc.textContent = item.description;\r\n\r\n    const siteLink = document.createElement(\"a\");\r\n    siteLink.setAttribute(\"href\", item.projectLink)\r\n    siteLink.classList.add(\"project-link\")\r\n    siteLink.classList.add(\"site-link\")\r\n    siteLink.setAttribute(\"target\", \"_blank\");\r\n    siteLink.textContent = \"Visit Site\"\r\n    \r\n    const codeLink = document.createElement(\"a\");\r\n    codeLink.setAttribute(\"href\", item.codeLink)\r\n    codeLink.classList.add(\"project-link\")\r\n    codeLink.classList.add(\"code-link\")\r\n    codeLink.setAttribute(\"target\", \"_blank\");\r\n    codeLink.textContent = \"View Code\"\r\n\r\n    listItem.appendChild(projectTitle);\r\n    listItem.appendChild(projectDesc);\r\n    listItem.appendChild(siteLink);\r\n    listItem.appendChild(codeLink);\r\n\r\n    projectListElement.appendChild(listItem);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://portfolio-site/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;