function modalProject(projectsArr, projectId) {
  const targetProjectObj = projectsArr.filter( project => {
    return project.id === Number(projectId)
  })[0]
  document.getElementById('modal-el').innerHTML = `
  <header>
    <div class="container"">
      <div class="logo-container">
        <div class="logo-container-icon-box">
          <img src="assets/favicon.ico" alt="Icon of the Learning Journal" class="icon">
        </div>
        <p class="project-name">My Coding Journey</p>
      </div>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about-me.html">About me</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <article class="project-card">
    <div class="close-modal-btn-container">
      <button class="modal-close-btn" id="modal-close-btn">X</button>
    </div>
    <img src="${targetProjectObj.image}" alt="project ${targetProjectObj.image}" class="project-img">
    <span class="project-date">${targetProjectObj.date}</span>
    <h2 class="project-title">${targetProjectObj.title}</h2>
    <p class="project-languages">Languages used in the project: ${targetProjectObj.languages}</p>
    <p class="project-description">${targetProjectObj.description}</p>
    <div class="project-links">
      <a href="${targetProjectObj.link}" class="project-link" target="_blank">Visit Website</a>
      <a href="${targetProjectObj.githubRepository}" class="project-link" target="_blank">Github Repository</a>
    </div>
  </article>
  <footer>
    <p class="footer-title">My learning journal</p>
    <p class="copyright">Copyright © <span id="current-year"></span></p>
  </footer>`
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").innerText = currentYear;
  document.getElementById('modal-el').style.display = "block"
}

export default modalProject
