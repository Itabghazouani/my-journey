function getNavBarHtml(){
  document.getElementById('navbar-el').innerHTML = `
  <div class="logo-container">
    <div class="logo-container-icon-box">
      <img src="assets/favicon.ico" alt="Icon of the Learning Journal" class="icon">
    </div>
    <p class="project-name">My Coding Journey</p>
  </div>
  <nav>
    <ul>
      <li><a href="index.html" class="navbar-link">Home</a></li>
      <li><a href="about-me.html" class="navbar-link">About me</a></li>
    </ul>
  </nav>`
}

export default getNavBarHtml
