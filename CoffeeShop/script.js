/*
    ⭕️ document.querySelector() behaves similarly to the jQuery.(document).ready() method. When the DOM is ready, the selector returns the object.
    I would suggest you call all JS script bottom of the page.
*/

const navbar = document.querySelector('.navbar');
// const navbar = document.getElementsByClassName('navbar');
const cardItem = document.querySelector('.card-items-container');
// const cardItem = document.getElementsByClassName('card-items-container');
const searchForm = document.querySelector('.search-form');

// console.log(navbar);
// console.log(navbar.classList);
// console.log(navbar[0]);
// console.log(cardItem);
// console.log(cardItem.classList);
// console.log(cardItem[0]);
// console.log(searchForm);


// window.onload = function () {
    document.querySelector('#menu-btn').addEventListener('click', () => {
        // alert('Button was clicked!');
        navbar.classList.toggle('active');
        // navbar[0].classList.toggle('active');
        cardItem.classList.remove('active');
        searchForm.classList.remove('active');
    });
// }


// document.querySelector('#card-btn').addEventListener('click', () => {
//     cardItem.classList.toggle('active');
// });
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