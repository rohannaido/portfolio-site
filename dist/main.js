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

eval("const projectList = [\r\n    {\r\n        title: \"Booking App\",\r\n        description: \"A booking app where users can book hotels in Indian cities. It is integrated with Firebase to fetch hotel data as per city name. Users can filter and sort hotels results by price and ratings. Hotel Images are displayed in a carousel form. All the components are built using pure CSS and in-house.\",\r\n        img:\"./images/booking-app-screenshot.png\",\r\n        projectLink: \"https://rohannaido.github.io/booking-app/\",\r\n        codeLink: \"https://github.com/rohannaido/booking-app\"\r\n    },\r\n    {\r\n        title: \"Fullstack Ecommerce App\",\r\n        description: \"A Fullstack ecommerce app which was built using ReactJS for the frontend and ExpressJS for the its backend API which is integerated with MongoDB Database. The backend API is hosted on Heroku and consumes MongoDB's cloud database.\",\r\n        img:\"./images/ecommerce-screenshot.png\" ,\r\n        projectLink: \"https://rohannaido.github.io/ecommerce-app/\",\r\n        codeLink: \"https://github.com/rohannaido/ecommerce-app\"\r\n    },\r\n    {\r\n        title: \"Ecommerce Admin App\",\r\n        description: \"Ecommerce app which was built using ReactJS for the frontend and consumes NodeJS backend API which is integerated with MongoDB Database. The backend API is hosted on Heroku and consumes MongoDB's cloud database. This App enable admin privilege users to add, delete, and edit products on the Ecommerce store.\",\r\n        img:\"./images/ecommerce-admin.png\" ,\r\n        projectLink: \"https://rohannaido.github.io/ecommerce-admin/\",\r\n        codeLink: \"https://github.com/rohannaido/ecommerce-admin\"\r\n    },\r\n    {\r\n        title: \"Video App\",\r\n        description: \"This is a video library application where users can watch videos, add videos to watch Later, Like videos and access and clear their watch history.\",\r\n        img:\"./images/video-app.png\" ,\r\n        projectLink: \"https://rohannaido.github.io/video-app/\",\r\n        codeLink: \"https://github.com/rohannaido/video-app\"\r\n    },\r\n    {\r\n        title: \"Notes App\",\r\n        description: \"A notes app inspired by Google Notes design. Users can create, edit and delete their notes. Every user get their own notes storage.\",\r\n        img:\"./images/notes-app.png\" ,\r\n        projectLink: \"https://rohannaido.github.io/notes-app/\",\r\n        codeLink: \"https://github.com/rohannaido/notes-app\"\r\n    },\r\n    {\r\n        title: \"Wheres waldo\",\r\n        description: \"A Game with ReactJS in the frontend and Firebase as backend. User has to locate characters in the search image and time will be logged in the backend.\",\r\n        img:\"./images/wheres-waldo.png\",\r\n        projectLink: \"https://rohannaido.github.io/wheres-waldo/\",\r\n        codeLink: \"https://github.com/rohannaido/wheres-waldo\"\r\n    },\r\n];\r\n\r\nconst blogList = [];\r\n\r\nmodule.exports = {\r\n    projectList: projectList,\r\n    blogList: blogList\r\n}\n\n//# sourceURL=webpack://portfolio-site/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {projectList} = __webpack_require__(/*! ./data */ \"./src/data.js\")\r\n\r\nconst projectListElement = document.querySelector(\".project-list\");\r\n\r\nfor(let i = 0; i < projectList.length; i++){\r\n    const item = projectList[i];\r\n    const listItem = document.createElement(\"li\");\r\n    listItem.classList.add(\"project-item\");\r\n    \r\n    const projectTitle = document.createElement(\"h3\");\r\n    projectTitle.textContent = item.title;\r\n    \r\n    const imageDiv = document.createElement(\"div\");\r\n    const image = document.createElement(\"img\");\r\n    imageDiv.classList.add(\"project-image-div\");\r\n    image.classList.add(\"image\");\r\n    image.src = item.img;\r\n    imageDiv.appendChild(image);\r\n    \r\n    const projectDesc = document.createElement(\"p\");\r\n    projectDesc.textContent = item.description;\r\n\r\n    const siteLink = document.createElement(\"a\");\r\n    siteLink.setAttribute(\"href\", item.projectLink)\r\n    siteLink.classList.add(\"project-link\")\r\n    siteLink.classList.add(\"site-link\")\r\n    siteLink.setAttribute(\"target\", \"_blank\");\r\n    siteLink.textContent = \"Visit Site\"\r\n    \r\n    const codeLink = document.createElement(\"a\");\r\n    codeLink.setAttribute(\"href\", item.codeLink)\r\n    codeLink.classList.add(\"project-link\")\r\n    codeLink.classList.add(\"code-link\")\r\n    codeLink.setAttribute(\"target\", \"_blank\");\r\n    codeLink.textContent = \"View Code\"\r\n\r\n    const headingImageDiv = document.createElement('div');\r\n    headingImageDiv.classList.add(\"heading-image-div\")\r\n    const descriptionButtonsDiv = document.createElement('div');\r\n    descriptionButtonsDiv.classList.add(\"description-buttons-div\")\r\n\r\n    headingImageDiv.appendChild(projectTitle);\r\n    if(item.img){\r\n        headingImageDiv.appendChild(imageDiv);\r\n    }\r\n    listItem.appendChild(headingImageDiv);\r\n    descriptionButtonsDiv.appendChild(projectDesc);\r\n\r\n    const buttonContainer = document.createElement('div');\r\n    buttonContainer.appendChild(siteLink);\r\n    buttonContainer.appendChild(codeLink);\r\n    descriptionButtonsDiv.appendChild(buttonContainer);\r\n    listItem.appendChild(descriptionButtonsDiv);\r\n    \r\n    projectListElement.appendChild(listItem);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://portfolio-site/./src/index.js?");

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