const btnDropdown = document.querySelector('.btnDropdown');
const listMinistries = document.querySelector('.listMinistries');
const btnBurger = document.querySelector('.btnBurger');
const nav = document.querySelector('nav');

btnDropdown.addEventListener('click', (e) => {
  e.stopPropagation();
  if (!listMinistries.classList.contains('dropdown')) {
    listMinistries.classList.add('dropdown');
  } else {
    listMinistries.classList.remove('dropdown');
  }
});

window.addEventListener('click', () => {
  listMinistries.classList.remove('dropdown');
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

// const categories = document.querySelectorAll('.categories a');
// const btnCategoryDropdown = document.querySelector('#btnCategoryDropdown');
// const categoryItems = document.querySelector('.category-items');

// btnCategoryDropdown.addEventListener('click', () => {
//   btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//     'fa-chevron-right'
//   );
//   btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//     'fa-chevron-down'
//   );
//   categoryItems.classList.toggle('d-block');
// });

// const arrPromise = (array) => {
//   return new Promise((resolve) => {
//     resolve(Array.from(array));
//   });
// };

// async function toggleCategories(array) {
//   const arrPromises = await arrPromise(array);
//   const resource = document.querySelectorAll('.resource');
//   const mpu = document.querySelectorAll('.mpu');
//   const resourceVideos = document.querySelector('#resources-videos');
//   const resourceFrontlineAsia = document.querySelector(
//     '#resources-frontline-asia'
//   );

//   arrPromises.map((item) => {
//     item.addEventListener('click', async (e) => {
//       if (e.target.id === 'btnVideoCategory') {
//         const rsc = await arrPromise(resource);
//         for (const r of rsc) {
//           r.className = 'd-none';
//         }
//         resourceVideos.classList.add('d-none');
//         resourceVideos.classList.add('d-block');
//         if (!e.target.classList.contains('btn-active')) {
//           for (const cat of arrPromises) {
//             cat.classList.remove('btn-active');
//           }
//           e.target.classList.add('btn-active');
//           categoryItems.classList.toggle('d-block');
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-down'
//           );
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-right'
//           );
//         } else {
//           categoryItems.classList.toggle('d-block');
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-down'
//           );
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-right'
//           );
//         }
//       }
//       if (e.target.id === 'btnFrontlineAsiaCategory') {
//         const rsc = await arrPromise(resource);
//         for (r of rsc) {
//           r.className = 'd-none';
//         }
//         resourceFrontlineAsia.classList.add('d-none');
//         resourceFrontlineAsia.classList.add('d-block');
//         if (!e.target.classList.contains('btn-active')) {
//           for (const cat of arrPromises) {
//             cat.classList.remove('btn-active');
//           }
//           e.target.classList.add('btn-active');
//           categoryItems.classList.toggle('d-block');
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-down'
//           );
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-right'
//           );
//         } else {
//           categoryItems.classList.toggle('d-block');
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-down'
//           );
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-right'
//           );
//         }
//       }
//       if (e.target.name === 'mpu2020') {
//         const mp = await arrPromise(mpu);
//         for (m of mp) {
//           m.className = 'd-none';
//         }
//         document.querySelector(`#${e.target.name}`).classList.toggle('d-none');
//         document.querySelector(`#${e.target.name}`).classList.toggle('d-block');
//         if (!e.target.classList.contains('btn-active')) {
//           for (const cat of arrPromises) {
//             cat.classList.remove('btn-active');
//           }
//           e.target.classList.add('btn-active');
//           categoryItems.classList.toggle('d-block');
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-down'
//           );
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-right'
//           );
//         } else {
//           categoryItems.classList.toggle('d-block');
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-down'
//           );
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-right'
//           );
//         }
//       }
//       if (e.target.name === 'mpu2019') {
//         const mp = await arrPromise(mpu);
//         for (m of mp) {
//           m.className = 'd-none';
//         }
//         document.querySelector(`#${e.target.name}`).classList.toggle('d-none');
//         document.querySelector(`#${e.target.name}`).classList.toggle('d-block');
//         if (!e.target.classList.contains('btn-active')) {
//           for (const cat of arrPromises) {
//             cat.classList.remove('btn-active');
//           }
//           e.target.classList.add('btn-active');
//           categoryItems.classList.toggle('d-block');
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-down'
//           );
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-right'
//           );
//         } else {
//           categoryItems.classList.toggle('d-block');
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-down'
//           );
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-right'
//           );
//         }
//       }
//       if (e.target.name === 'mpu2018') {
//         const mp = await arrPromise(mpu);
//         for (m of mp) {
//           m.className = 'd-none';
//         }
//         document.querySelector(`#${e.target.name}`).classList.toggle('d-none');
//         document.querySelector(`#${e.target.name}`).classList.toggle('d-block');
//         if (!e.target.classList.contains('btn-active')) {
//           for (const cat of arrPromises) {
//             cat.classList.remove('btn-active');
//           }
//           e.target.classList.add('btn-active');
//           categoryItems.classList.toggle('d-block');
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-down'
//           );
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-right'
//           );
//         } else {
//           categoryItems.classList.toggle('d-block');
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-down'
//           );
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-right'
//           );
//         }
//       }
//       if (e.target.name === 'mpu2017') {
//         const mp = await arrPromise(mpu);
//         for (m of mp) {
//           m.className = 'd-none';
//         }
//         document.querySelector(`#${e.target.name}`).classList.toggle('d-none');
//         document.querySelector(`#${e.target.name}`).classList.toggle('d-block');
//         if (!e.target.classList.contains('btn-active')) {
//           for (const cat of arrPromises) {
//             cat.classList.remove('btn-active');
//           }
//           e.target.classList.add('btn-active');
//           categoryItems.classList.toggle('d-block');
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-down'
//           );
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-right'
//           );
//         } else {
//           categoryItems.classList.toggle('d-block');
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-down'
//           );
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-right'
//           );
//         }
//       }
//       if (e.target.name === 'mpu2016') {
//         const mp = await arrPromise(mpu);
//         for (m of mp) {
//           m.className = 'd-none';
//         }
//         document.querySelector(`#${e.target.name}`).classList.toggle('d-none');
//         document.querySelector(`#${e.target.name}`).classList.toggle('d-block');
//         if (!e.target.classList.contains('btn-active')) {
//           for (const cat of arrPromises) {
//             cat.classList.remove('btn-active');
//           }
//           e.target.classList.add('btn-active');
//           categoryItems.classList.toggle('d-block');
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-down'
//           );
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-right'
//           );
//         } else {
//           categoryItems.classList.toggle('d-block');
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-down'
//           );
//           btnCategoryDropdown.firstElementChild.firstElementChild.classList.toggle(
//             'fa-chevron-right'
//           );
//         }
//       }
//     });
//   });
// }

// toggleCategories(categories);

const tabs = Array.from(document.querySelectorAll('.tab-item'));
const tabContent = Array.from(document.querySelectorAll('.tab'));

function addActive() {
  removeActive();
  removeDisplay();
  this.classList.add('btn-active');
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('d-block');
  // console.log(tabContentItem);
}

function removeActive() {
  tabs.forEach((tab) => tab.classList.remove('btn-active'));
}

function removeDisplay() {
  tabContent.forEach((content) => content.classList.remove('d-block'));
}

for (tab of tabs) {
  tab.addEventListener('click', addActive);
}
