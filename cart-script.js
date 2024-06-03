document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsElement = document.getElementById('cart-items');
    const cartCounterElement = document.getElementById('cart-counter');
    const checkoutBtn = document.getElementById('checkout-btn');
    const dialogBox = document.getElementById('dialog-box');
    const closeDialogBtn = document.getElementById('close-dialog');

    cartCounterElement.textContent = cartItems.length;

    cartItems.forEach((item, index) => {
        const cartItemElement = document.createElement('li');

        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            </div>
            <button class="remove-item" data-index="${index}">Remove</button>
        `;

        cartItemsElement.appendChild(cartItemElement);
    });

    cartItemsElement.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const index = event.target.dataset.index;
            cartItems.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            localStorage.setItem('cartCounter', cartItems.length);
            location.reload();
        }
    });

    checkoutBtn.addEventListener('click', () => {
        dialogBox.style.display = 'block';
    });

    closeDialogBtn.addEventListener('click', () => {
        dialogBox.style.display = 'none';
        clearCartAndReload();
    });

    function clearCartAndReload() {
        // Clear cart items and reload the page
        localStorage.setItem('cartItems', JSON.stringify([]));
        localStorage.setItem('cartCounter', 0);
        location.reload();
    }
});
