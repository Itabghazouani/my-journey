export function getProjectsHtml(projectsArr) {
  return projectsArr.map(project => {
    const {
      id,
      title,
      image,
      date,
      description
    } = project
    return `
    <article>
      <img class="article-img" src="${image}" alt="project ${image}">
      <span class="article-info">${date}</span>
      <h2 class="article-title">${title}</h2>
      <p class="article-preview">${description}</p>
      <button id="details-el" class="article-details" data-details="${id}">View More details</button>
    </article>`
  }).join('')
}

export function getFirstsProjectsHtml(projectsArr) {
  const newArr = projectsArr.slice(0, 6);
  return newArr
}
