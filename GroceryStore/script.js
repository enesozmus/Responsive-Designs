/*
    ⭕️ document.querySelector() behaves similarly to the jQuery.(document).ready() method. When the DOM is ready, the selector returns the object.
    I would suggest you call all JS script bottom of the page.
*/


const searchForm = document.querySelector('.search-form');
const shoppingCard = document.querySelector('.shopping-card');
const loginForm = document.querySelector('.login-form');
const navbar = document.querySelector('nav');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  shoppingCard.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

document.querySelector('#card-btn').onclick = () => {
  shoppingCard.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCard.classList.remove('active');
  navbar.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCard.classList.remove('active');
  loginForm.classList.remove('active');
}


window.onscroll = () => {
  searchForm.classList.remove('active');
  shoppingCard.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}


// swiper 1
var swiper = new Swiper(".products-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1020: {
      slidesPerView: 3
    },
  },
});

// swiper 2
var swiper = new Swiper(".reviews-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1020: {
      slidesPerView: 3
    },
  },
});