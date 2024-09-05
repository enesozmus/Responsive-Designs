/*
    ⭕️ document.querySelector() behaves similarly to the jQuery.(document).ready() method. When the DOM is ready, the selector returns the object.
    I would suggest you call all JS script bottom of the page.
*/

const navbar = document.querySelector('.navbar');
const cardItem = document.querySelector('.card-items-container');
const searchForm = document.querySelector('.search-form');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    cardItem.classList.remove('active');
    searchForm.classList.remove('active');
}

document.querySelector('#card-btn').onclick = () => {
    cardItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cardItem.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    cardItem.classList.remove('active');
    searchForm.classList.remove('active');
}