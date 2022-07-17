const {projectList} = require('./data')

const projectListElement = document.querySelector(".project-list");

for(let i = 0; i < projectList.length; i++){
    const item = projectList[i];
    const listItem = document.createElement("li");
    listItem.classList.add("project-item");
    
    const projectTitle = document.createElement("h3");
    projectTitle.textContent = item.title;
    
    const projectDesc = document.createElement("p");
    projectDesc.textContent = item.description;

    const siteLink = document.createElement("a");
    siteLink.setAttribute("href", item.projectLink)
    siteLink.classList.add("project-link")
    siteLink.classList.add("site-link")
    siteLink.setAttribute("target", "_blank");
    siteLink.textContent = "Visit Site"
    
    const codeLink = document.createElement("a");
    codeLink.setAttribute("href", item.codeLink)
    codeLink.classList.add("project-link")
    codeLink.classList.add("code-link")
    codeLink.setAttribute("target", "_blank");
    codeLink.textContent = "View Code"

    listItem.appendChild(projectTitle);
    listItem.appendChild(projectDesc);
    listItem.appendChild(siteLink);
    listItem.appendChild(codeLink);

    projectListElement.appendChild(listItem);
}

