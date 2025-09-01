const dessertTitle = document.querySelectorAll('.dessert-title').textContent;
const itemPrice = document.querySelectorAll('.price-tag').textContent;
const products = document.querySelectorAll('recipe-card');

const addToCartBtn = document.querySelectorAll('.add-to-cart-btn');

addToCartBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const itemCard = event.target.closest('.recipe-card');
        const dessertTitle =
            itemCard.querySelector('.dessert-title').textContent;
        const priceTag = itemCard.querySelector('.price-tag').textContent;

        const cartItem = document.querySelector('.cart-items');

        const item = document.createElement('div');
        item.classList.add('item');

        item.innerHTML = `<h3 class="cart-item-title">${dessertTitle}</h3>`;

        const priceContainer = document.createElement('div');
        priceContainer.classList.add('price-container');

        const itemQuantity = 1;

        priceContainer.innerHTML = `
                                <span class="item-quantity">${itemQuantity}</span>
                                <span class="item-price">${priceTag}</span>
                                <span class="quantity-price"></span>
                                <button class="remove-item-btn"><img/></button>`;

        item.appendChild(priceContainer);
        cartItem.appendChild(item);

        console.log('button works', e.target.dessertTitle);
    });
});

const removeItem = document.querySelectorAll('.remove-item-btn');

removeItem.forEach((removeBtn) => {
    removeBtn.addEventListener('click', (e) => {
        const deleteItem = e.target.closest('.item');
        deleteItem.style.display = 'none';
        console.log('hello');
    });
});
