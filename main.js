(()=>{var t={471:t=>{t.exports={projectList:[{title:"Fullstack Ecommerce App",description:"A Fullstack ecommerce app which was built using ReactJS for the frontend and ExpressJS for the its backend API which is integerated with MongoDB Database.",projectLink:"https://rohannaido.github.io/ecommerce-app/",codeLink:"https://github.com/rohannaido/ecommerce-app"},{title:"Wheres waldo",description:"A Game with ReactJS in the frontend and Firebase as backend. User has to locate characters in the search image and time will be logged in the backend.",projectLink:"https://rohannaido.github.io/wheres-waldo/",codeLink:"https://github.com/rohannaido/wheres-waldo"},{title:"Shopping Cart",description:"Simple ReactJS application with React Routing implementation and add to cart functionality.",projectLink:"https://rohannaido.github.io/shopping-cart/",codeLink:"https://github.com/rohannaido/shopping-cart"},{title:"CV Project",description:"ReactJS project to implement useState to update and Build CV.",projectLink:"https://rohannaido.github.io/cv-project/",codeLink:"https://github.com/rohannaido/cv-project"},{title:"Memory Card Game",description:"ReactJS Web Game to test memory power by remembering selected cards.",projectLink:"https://rohannaido.github.io/memory-card-game/",codeLink:"https://github.com/rohannaido/memory-card-game"}],blogList:[]}}},e={};function o(i){var n=e[i];if(void 0!==n)return n.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,o),a.exports}(()=>{const{projectList:t}=o(471),e=document.querySelector(".project-list");for(let o=0;o<t.length;o++){const i=t[o],n=document.createElement("li");n.classList.add("project-item");const a=document.createElement("h3");a.textContent=i.title;const r=document.createElement("p");r.textContent=i.description;const c=document.createElement("a");c.setAttribute("href",i.projectLink),c.classList.add("project-link"),c.setAttribute("target","_blank"),c.textContent="Visit Site";const d=document.createElement("a");d.setAttribute("href",i.codeLink),d.classList.add("project-link"),d.setAttribute("target","_blank"),d.textContent="View Code",n.appendChild(a),n.appendChild(r),n.appendChild(c),n.appendChild(d),e.appendChild(n)}})()})();