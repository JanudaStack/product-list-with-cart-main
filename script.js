const addToCartBtn = document.querySelectorAll('.add-to-cart-btn');
const cartItems = document.querySelector('.cart-items');

addToCartBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const itemCard = event.target.closest('.recipe-card');
        const itemTitle = itemCard.querySelector('.dessert-title').textContent;
        const itemPrice = itemCard.querySelector('.price-tag').textContent;

        const item = document.createElement('div');
        item.classList.add('item');

        const cartImg = document.querySelector('.empty-cart-img');
        const cartMsg = document.querySelector('.cart-message');
        if ((cartImg, cartMsg)) {
            cartImg.style.display = 'none';
            cartMsg.style.display = 'none';
        }

        item.innerHTML = `
        <h3 class="cart-item-title">${itemTitle}</h3>
        <div class="price-container">
            <span class="item-quantity">1x</span>
            <span class="item-price">@${itemPrice}</span>
            <span class="quantity-price"></span>
            <button class="remove-item-btn"></button>
        </div>`;

        cartItems.appendChild(item);
    });
});

cartItems.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-item-btn')) {
        const itemToRemove = event.target.closest('.item');
        itemToRemove.remove();
    }
});
