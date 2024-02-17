import projectsArray from "./javascript/data.js";
import { getProjectsHtml, getFirstsProjectsHtml } from "./javascript/getProjectsHtml.js";
import getNavBarHtml from "./javascript/getNavBarHtml.js";
import getFooterHtml from "./javascript/getFooterHtml.js";

const homeMoreEl = document.getElementById('home-more-el')
const homeProjectsEl = document.getElementById('home-projects-el')
const firstsProjects = getFirstsProjectsHtml(projectsArray)

homeMoreEl.addEventListener('click', function(){
  homeProjectsEl.innerHTML = getProjectsHtml(projectsArray)
  homeMoreEl.style.display="none"
})

getNavBarHtml()
getFooterHtml()
homeProjectsEl.innerHTML = getProjectsHtml(firstsProjects)
