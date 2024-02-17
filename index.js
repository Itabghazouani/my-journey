import projectsArray from "./javascript/data.js";
import { getProjectsHtml, getFirstsProjectsHtml } from "./javascript/getProjectsHtml.js";
import modalProject from "./javascript/modalProject.js";
import getNavBarHtml from "./javascript/getNavBarHtml.js";
import getFooterHtml from "./javascript/getFooterHtml.js";

const indexMoreEl = document.getElementById('index-more-el')
const modalEl = document.getElementById('modal-el')
const indexProjectsEl = document.getElementById('index-projects-el')
const firstsProjects = getFirstsProjectsHtml(projectsArray)

document.addEventListener('click', e => {
  if (e.target.dataset.details) {
    modalProject(projectsArray, e.target.dataset.details)
  }
  e.target.id === 'modal-close-btn' ? modalEl.style.display="none" : ''
})

indexMoreEl.addEventListener('click', function(){
  indexProjectsEl.innerHTML = getProjectsHtml(projectsArray)
  indexMoreEl.style.display="none"
})

getNavBarHtml()
getFooterHtml()
indexProjectsEl.innerHTML = getProjectsHtml(firstsProjects)
