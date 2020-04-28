const btnDropdown = document.querySelector('.btnDropdown');
const listMinistries = document.querySelector('.listMinistries');
const btnBurger = document.querySelector('.btnBurger');
const nav = document.querySelector('nav');

btnDropdown.addEventListener('click', () => {
  if (!listMinistries.classList.contains('dropdown')) {
    listMinistries.classList.add('dropdown');
  } else {
    listMinistries.classList.remove('dropdown');
  }
});

btnBurger.addEventListener('click', () => {
  if (!nav.classList.contains('d-block')) {
    nav.classList.add('d-block');
  } else {
    nav.classList.remove('d-block');
  }
});

window.addEventListener('load', function () {
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slideToScroll: 1,
    resizeLock: true,
    scrollLock: true,
    draggable: true,
    dots: '#dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next',
    },
  });
});
