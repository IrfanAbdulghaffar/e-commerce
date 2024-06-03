// script.js

document.addEventListener('DOMContentLoaded', () => {
    let cartCounter = localStorage.getItem('cartCounter') || 0;
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const cartCounterElement = document.getElementById('cart-counter');
    cartCounterElement.textContent = cartCounter;

    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            cartCounter++;
            cartCounterElement.textContent = cartCounter;
            localStorage.setItem('cartCounter', cartCounter);

            const product = button.parentElement;
            const productName = product.querySelector('h2').textContent;
            const productPrice = product.querySelector('p').textContent;
            const productImage = product.querySelector('img').src;

            const cartItem = {
                name: productName,
                price: productPrice,
                image: productImage
            };

            cartItems.push(cartItem);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        });
    });
});
