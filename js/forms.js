document.addEventListener('DOMContentLoaded', () => {
  const adoptionAnimal = document.querySelector('#adoption-animal');
  if (adoptionAnimal && typeof animals !== 'undefined') {
    animals.forEach(animal => adoptionAnimal.insertAdjacentHTML('beforeend', `<option value="${animal.name}">${animal.name} - ${animal.type}</option>`));
    const selectedId = new URLSearchParams(window.location.search).get('animal');
    const selected = animals.find(animal => String(animal.id) === selectedId);
    if (selected) adoptionAnimal.value = selected.name;
  }
  document.querySelectorAll('form[data-storage-key]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const values = Object.fromEntries(new FormData(form).entries());
      const key = form.dataset.storageKey;
      const saved = JSON.parse(localStorage.getItem(key) || '[]');
      saved.push({ ...values, submittedAt: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(saved));
      form.reset();
      const message = form.querySelector('.success-message');
      if (message) { message.classList.add('show'); message.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
    });
  });
  document.querySelectorAll('[data-donation]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('[data-donation]').forEach(item => item.classList.remove('selected')); button.classList.add('selected'); document.querySelector('#donation-amount').value = button.dataset.donation; }));
});
