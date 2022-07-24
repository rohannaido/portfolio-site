const {projectList} = require('./data')

const projectListElement = document.querySelector(".project-list");

for(let i = 0; i < projectList.length; i++){
    const item = projectList[i];
    const listItem = document.createElement("li");
    listItem.classList.add("project-item");
    
    const projectTitle = document.createElement("h3");
    projectTitle.textContent = item.title;
    
    const imageDiv = document.createElement("div");
    const image = document.createElement("img");
    imageDiv.classList.add("project-image-div");
    image.classList.add("image");
    image.src = item.img;
    imageDiv.appendChild(image);
    
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

    const headingImageDiv = document.createElement('div');
    headingImageDiv.classList.add("heading-image-div")
    const descriptionButtonsDiv = document.createElement('div');
    descriptionButtonsDiv.classList.add("description-buttons-div")

    headingImageDiv.appendChild(projectTitle);
    if(item.img){
        headingImageDiv.appendChild(imageDiv);
    }
    listItem.appendChild(headingImageDiv);
    descriptionButtonsDiv.appendChild(projectDesc);

    const buttonContainer = document.createElement('div');
    buttonContainer.appendChild(siteLink);
    buttonContainer.appendChild(codeLink);
    descriptionButtonsDiv.appendChild(buttonContainer);
    listItem.appendChild(descriptionButtonsDiv);
    
    projectListElement.appendChild(listItem);
}

