document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));

  document.querySelectorAll('img').forEach(image => {
    image.addEventListener('error', () => { image.src = 'images/placeholder.svg'; image.alt = 'Animal placeholder'; }, { once: true });
  });

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
  const centerName = document.querySelectorAll('[data-center-name]');
  if (typeof centerInfo !== 'undefined') {
    centerName.forEach(element => element.textContent = centerInfo.name);
    document.querySelectorAll('[data-center-description]').forEach(element => element.textContent = centerInfo.description);
    document.querySelectorAll('[data-center-phone]').forEach(element => element.textContent = centerInfo.phone);
    document.querySelectorAll('[data-center-email]').forEach(element => { element.textContent = centerInfo.email; element.href = `mailto:${centerInfo.email}`; });
    document.querySelectorAll('[data-center-address]').forEach(element => element.textContent = centerInfo.address);
    document.querySelectorAll('[data-center-hours]').forEach(element => element.textContent = centerInfo.hours);
  }

  const topButton = document.querySelector('.back-top');
  if (topButton) { window.addEventListener('scroll', () => topButton.classList.toggle('show', window.scrollY > 350)); topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' })); }
});

function animalImage(imagePath) { return imagePath || 'images/placeholder.svg'; }
function animalCard(animal) {
  return `<article class="card animal-card"><img src="${animalImage(animal.image)}" alt="${animal.name}" onerror="this.onerror=null;this.src='images/placeholder.svg'"><div class="card-body"><span class="tag">${animal.status}</span><h3>${animal.name}</h3><div class="meta"><span>${animal.type}</span><span>${animal.breed}</span><span>${animal.age}</span><span>${animal.gender}</span></div><p>${animal.description}</p><div class="card-actions"><a class="button outline" href="animal-details.html?id=${animal.id}">View Details</a><a class="button" href="adoption.html?animal=${animal.id}">Adopt Me</a></div></div></article>`;
}
function renderAnimals(target, list) { if (target) target.innerHTML = list.length ? list.map(animalCard).join('') : '<p class="notice">No animals found.</p>'; }
