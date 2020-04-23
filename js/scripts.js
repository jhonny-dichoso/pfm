const btnDropdown = document.querySelector('.btnDropdown');
const listMinistries = document.querySelector('.listMinistries');

btnDropdown.addEventListener('click', () => {
  if (!listMinistries.classList.contains('dropdown')) {
    listMinistries.classList.add('dropdown');
  } else {
    listMinistries.classList.remove('dropdown');
  }
});
