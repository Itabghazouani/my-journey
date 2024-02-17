function getNavBarHtml(){
  document.getElementById('navbar-el').innerHTML = `
  <div class="logo-container">
    <img class="logo" src="assets/favicon.ico" alt="logo">
    <p class="project-name">My Coding Journey</p>
  </div>
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about-me.html">About me</a></li>
    </ul>
  </nav>`
}

export default getNavBarHtml
