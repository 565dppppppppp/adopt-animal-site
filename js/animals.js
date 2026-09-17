document.addEventListener('DOMContentLoaded', () => {
  const animalGrid = document.querySelector('#animal-grid');
  if (animalGrid) {
    const search = document.querySelector('#animal-search');
    const type = document.querySelector('#type-filter');
    const gender = document.querySelector('#gender-filter');
    const update = () => {
      const term = (search.value || '').toLowerCase().trim();
      const filtered = animals.filter(animal => (!term || [animal.name, animal.breed, animal.type].some(value => value.toLowerCase().includes(term))) && (!type.value || animal.type === type.value) && (!gender.value || animal.gender === gender.value));
      renderAnimals(animalGrid, filtered);
    };
    [search, type, gender].forEach(control => control.addEventListener('input', update));
    update();
  }

  const detail = document.querySelector('#animal-detail');
  if (detail) {
    const id = new URLSearchParams(window.location.search).get('id');
    const animal = animals.find(item => String(item.id) === id) || animals[0];
    detail.innerHTML = `<div class="detail-grid"><img class="detail-image" src="${animalImage(animal.image)}" alt="${animal.name}" onerror="this.onerror=null;this.src='images/placeholder.svg'"><div><span class="tag">${animal.status}</span><h1>${animal.name}</h1><p class="lead">${animal.description}</p><dl class="detail-list"><div><dt>Type</dt><dd>${animal.type}</dd></div><div><dt>Breed</dt><dd>${animal.breed}</dd></div><div><dt>Age</dt><dd>${animal.age}</dd></div><div><dt>Gender</dt><dd>${animal.gender}</dd></div><div><dt>Size</dt><dd>${animal.size}</dd></div><div><dt>Color</dt><dd>${animal.color}</dd></div><div><dt>Vaccinated</dt><dd>${animal.vaccinated}</dd></div><div><dt>Health</dt><dd>${animal.health}</dd></div><div><dt>Good with children</dt><dd>${animal.goodWithChildren}</dd></div><div><dt>Good with animals</dt><dd>${animal.goodWithAnimals}</dd></div></dl><h3>Personality</h3><p>${animal.personality}</p><h3>Likes</h3><p>${animal.likes}</p><a class="button" href="adoption.html?animal=${animal.id}">Apply to Adopt</a></div></div>`;
  }

  const featured = document.querySelector('#featured-animals');
  if (featured) renderAnimals(featured, animals.slice(0, 3));
});
