import getNavBarHtml from "./javascript/getNavBarHtml.js";
import getFooterHtml from "./javascript/getFooterHtml.js";

const moreEl = document.getElementById('more-el')



moreEl.addEventListener('click', function(){
  // projectsEl.innerHTML = getProjectsHtml(projectsArray)
  moreEl.style.display="none"
})

getNavBarHtml()
getFooterHtml()
