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

eval("const projectList = [\n    {\n        title: \"School Information System\",\n        description: \"This is a school information system website that I have built using NextJS and TailwindCSS.\",\n        img: \"./images/School-info-system-image.png\",\n        projectLink: \"https://sis-two.vercel.app/\",\n        codeLink: \"https://github.com/rohannaido/sis\"\n    },\n    {\n        title: \"Angular Component Library\",\n        description: \"This website has angular components that I felt the need build, They can be cloned and used from my gitHub.\",\n        img: \"./images/angular-component-library-screenshot.png\",\n        projectLink: \"https://rohannaido.github.io/component-library/\",\n        codeLink: \"https://github.com/rohannaido/component-library\"\n    },\n    {\n        title: \"Booking App\",\n        description: \"A booking app where users can book hotels in Indian cities. It is integrated with Firebase to fetch hotel data as per city name. Users can filter and sort hotels results by price and ratings. Hotel Images are displayed in a carousel form. All the components are built using pure CSS and in-house.\",\n        img: \"./images/booking-app-screenshot.png\",\n        projectLink: \"https://rohannaido.github.io/booking-app/\",\n        codeLink: \"https://github.com/rohannaido/booking-app\"\n    },\n    {\n        title: \"Fullstack Ecommerce App\",\n        description: \"A Fullstack ecommerce app which was built using ReactJS for the frontend and ExpressJS for the its backend API which is integerated with MongoDB Database. The backend API is hosted on Heroku and consumes MongoDB's cloud database.\",\n        img: \"./images/ecommerce-screenshot.png\",\n        projectLink: \"https://rohannaido.github.io/ecommerce-app/\",\n        codeLink: \"https://github.com/rohannaido/ecommerce-app\"\n    },\n    {\n        title: \"Ecommerce Admin App\",\n        description: \"Ecommerce app which was built using ReactJS for the frontend and consumes NodeJS backend API which is integerated with MongoDB Database. The backend API is hosted on Heroku and consumes MongoDB's cloud database. This App enable admin privilege users to add, delete, and edit products on the Ecommerce store.\",\n        img: \"./images/ecommerce-admin.png\",\n        projectLink: \"https://rohannaido.github.io/ecommerce-admin/\",\n        codeLink: \"https://github.com/rohannaido/ecommerce-admin\"\n    },\n    {\n        title: \"Video App\",\n        description: \"This is a video library application where users can watch videos, add videos to watch Later, Like videos and access and clear their watch history.\",\n        img: \"./images/video-app.png\",\n        projectLink: \"https://rohannaido.github.io/video-app/\",\n        codeLink: \"https://github.com/rohannaido/video-app\"\n    },\n    {\n        title: \"Notes App\",\n        description: \"A notes app inspired by Google Notes design. Users can create, edit and delete their notes. Every user get their own notes storage.\",\n        img: \"./images/notes-app.png\",\n        projectLink: \"https://rohannaido.github.io/notes-app/\",\n        codeLink: \"https://github.com/rohannaido/notes-app\"\n    },\n    {\n        title: \"Wheres waldo\",\n        description: \"A Game with ReactJS in the frontend and Firebase as backend. User has to locate characters in the search image and time will be logged in the backend.\",\n        img: \"./images/wheres-waldo.png\",\n        projectLink: \"https://rohannaido.github.io/wheres-waldo/\",\n        codeLink: \"https://github.com/rohannaido/wheres-waldo\"\n    },\n];\n\nconst blogList = [];\n\nmodule.exports = {\n    projectList: projectList,\n    blogList: blogList\n}\n\n//# sourceURL=webpack://portfolio-site/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {projectList} = __webpack_require__(/*! ./data */ \"./src/data.js\")\n\nconst projectListElement = document.querySelector(\".project-list\");\n\nfor(let i = 0; i < projectList.length; i++){\n    const item = projectList[i];\n    const listItem = document.createElement(\"li\");\n    listItem.classList.add(\"project-item\");\n    \n    const projectTitle = document.createElement(\"h3\");\n    projectTitle.textContent = item.title;\n    \n    const imageDiv = document.createElement(\"div\");\n    const image = document.createElement(\"img\");\n    imageDiv.classList.add(\"project-image-div\");\n    image.classList.add(\"image\");\n    image.src = item.img;\n    imageDiv.appendChild(image);\n    \n    const projectDesc = document.createElement(\"p\");\n    projectDesc.textContent = item.description;\n\n    const siteLink = document.createElement(\"a\");\n    siteLink.setAttribute(\"href\", item.projectLink)\n    siteLink.classList.add(\"project-link\")\n    siteLink.classList.add(\"site-link\")\n    siteLink.setAttribute(\"target\", \"_blank\");\n    siteLink.textContent = \"Visit Site\"\n    \n    const codeLink = document.createElement(\"a\");\n    codeLink.setAttribute(\"href\", item.codeLink)\n    codeLink.classList.add(\"project-link\")\n    codeLink.classList.add(\"code-link\")\n    codeLink.setAttribute(\"target\", \"_blank\");\n    codeLink.textContent = \"View Code\"\n\n    const headingImageDiv = document.createElement('div');\n    headingImageDiv.classList.add(\"heading-image-div\")\n    const descriptionButtonsDiv = document.createElement('div');\n    descriptionButtonsDiv.classList.add(\"description-buttons-div\")\n\n    headingImageDiv.appendChild(projectTitle);\n    if(item.img){\n        headingImageDiv.appendChild(imageDiv);\n    }\n    listItem.appendChild(headingImageDiv);\n    descriptionButtonsDiv.appendChild(projectDesc);\n\n    const buttonContainer = document.createElement('div');\n    buttonContainer.appendChild(siteLink);\n    buttonContainer.appendChild(codeLink);\n    descriptionButtonsDiv.appendChild(buttonContainer);\n    listItem.appendChild(descriptionButtonsDiv);\n    \n    projectListElement.appendChild(listItem);\n}\n\n\n\n//# sourceURL=webpack://portfolio-site/./src/index.js?");

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