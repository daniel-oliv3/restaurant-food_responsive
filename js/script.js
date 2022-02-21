let searchForm = document.querySelector('.search-form-container');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}


let cart = document.querySelector('.shopping-cart-container');

document.querySelector('#cart-btn').onclick = () => {
    cart.classList.toggle('active');
}

let login = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    login.classList.toggle('active');
}