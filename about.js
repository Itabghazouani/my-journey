import projectsArray from "./javascript/data.js";
import { getProjectsHtml, getFirstsProjectsHtml } from "./javascript/getProjectsHtml.js";
import getNavBarHtml from "./javascript/getNavBarHtml.js";
import getFooterHtml from "./javascript/getFooterHtml.js";

const aboutMoreEl = document.getElementById('about-more-el')
const aboutProjectsEl = document.getElementById('about-projects-el')
const firstsProjects = getFirstsProjectsHtml(projectsArray)

aboutMoreEl.addEventListener('click', function(){
  aboutProjectsEl.innerHTML = getProjectsHtml(projectsArray)
  aboutMoreEl.style.display="none"
})
getNavBarHtml()
getFooterHtml()
aboutProjectsEl.innerHTML = getProjectsHtml(firstsProjects)
