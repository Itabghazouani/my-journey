function getFooterHtml() {
  document.getElementById('footer-el').innerHTML = `
  <p class="footer-title">My learning journal</p>
  <p class="copyright">Copyright © <span id="current-year"></span></p>`
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").innerText = currentYear;
}

export default getFooterHtml
