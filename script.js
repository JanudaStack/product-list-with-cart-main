const addToCartBtn = document.querySelector('.add-to-cart-btn');
const dessertTitle = document.querySelector('.dessert-title');
const priceTag = document.querySelector('.price-tag');

document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const card = event.target.closest('.recipe-card'); // Assuming each button is inside a card element
        const dessertTitle = card.querySelector('.dessert-title').textContent;
        const priceTag = card.querySelector('.price-tag').textContent;

        const cartArea = document.querySelector('.cart-area'); // Assuming you have a cart section in your HTML
        const cartItem = document.createElement('div'); // Create a new div for the cart item
        cartItem.classList.add('cart-item'); // Add a class for styling if needed

        // Add dessert title and price to the cart item
        cartItem.innerHTML = `
        <p class="cart-dessert-title">${dessertTitle}</p>
        <p class="cart-price-tag">${priceTag}</p>
      `;

        // Append the cart item to the cart section
        cartArea.appendChild(cartItem);
    });
});
