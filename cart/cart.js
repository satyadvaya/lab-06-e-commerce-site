import { findById, toUSD, renderTableRow, getTotal, calcItemTotal } from '../utils.js';
import mushrooms from '../data/mushrooms.js';
// import cart from '../data/cart.js'; // replace this with getting the data from localstorage
import { getCart, clearCart, CART } from '../storage-utils.js';

const tableBody = document.getElementById('table-body');

function renderCart() {
    const cart = getCart();
    // console.log("cart inside renderCart", cart);
    // loop through each item in cart
    for (let item of cart) {
        // find its associated mushrooms using findById
        const mushroom = findById(mushrooms, item.id);
        // get its <tr> using renderTableRow
        const tr = renderTableRow(mushroom, item);
        // append <tr> to the tableBody element
        tableBody.appendChild(tr);
    }
    if (cart.length === 0) {
        tableBody.innerHTML = '';
    }
    const totalDom = document.getElementById('order-total');
    const total = getTotal(mushrooms, cart);
    totalDom.textContent = toUSD(total);
}
renderCart();

const orderButton = document.getElementById('order-button');
orderButton.addEventListener('click', () => {
    const cart = getCart();
    const cartString = JSON.stringify(cart, true, 2);
    const total = calcItemTotal(mushrooms, cart);
    const USD = toUSD(total);

    if (cart.length) {
        alert(`You have ordered ${cartString} and your order total is: ${USD}`);
        localStorage.removeItem(CART);
        window.location = '../';
    } else {
        orderButton.disabled = true;
    }
});

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {
    clearCart();
    location.reload();
    // renderCart();
});