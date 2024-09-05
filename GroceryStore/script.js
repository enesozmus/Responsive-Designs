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