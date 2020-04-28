const btnDropdown = document.querySelector('.btnDropdown');
const listMinistries = document.querySelector('.listMinistries');
const btnBurger = document.querySelector('.btnBurger');
const nav = document.querySelector('nav');
// const paymentMethod = document.querySelector('.payment-method');
// const paymentMethods = document.querySelectorAll('.payment-method');

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

// paymentMethod.addEventListener('click', () => {
//   for (i = 0; i < paymentMethods.length; i++) {
//     if (paymentMethods[i].checked) {
//       console.log(paymentMethods.value);

//       break;
//     }
//   }
// });

// paymentMethod.addEventListener('click', () => {
//   Array.from(paymentMethods).forEach((methods) => {
//     console.log(methods.checked);
//   });
// });

// paymentMethod.addEventListener('click', () => {
//   for (i = 0; i < paymentMethod.classList; i++) {
//     if (paymentMethod.id === 'payment-method-1') {
//       console.log('payment-method-1 it is!!!');
//     } else {
//       console.log('payment-method-2 it is!!!');
//     }
//     console.log(paymentMethod);
//   }
// });

new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  slideToScroll: 1,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next',
  },
});
