const btnDropdown = document.querySelector('.btnDropdown');
const listMinistries = document.querySelector('.listMinistries');
const btnBurger = document.querySelector('.btnBurger');
const nav = document.querySelector('nav');
// const section = document.querySelectorAll('section').style.zIndex;

btnDropdown.addEventListener('click', () => {
  if (!listMinistries.classList.contains('dropdown')) {
    listMinistries.classList.add('dropdown');
  } else {
    listMinistries.classList.remove('dropdown');
  }
});

btnBurger.addEventListener('click', () => {
  // section.style.zIndex = '1';
  if (!nav.classList.contains('d-block')) {
    nav.classList.add('d-block');
  } else {
    nav.classList.remove('d-block');
  }
});
