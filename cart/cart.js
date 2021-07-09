import { findById, toUSD, renderTableRow, getTotal } from '../utils.js';
import mushrooms from '../data/mushrooms.js';
// import cart from '../data/cart.js'; // replace this with getting the data from localstorage
import { getCart, clearCart } from '../storage-utils.js';

const tableBody = document.getElementById('table-body');

// loop through each item in cart
// find its associated mushrooms using findById
// get its <tr> using renderTableRow
// append <tr> to the tableBody element


function renderCart(){
    const cart = getCart();
    console.log("cart inside renderCart", cart);
    for (let item of cart) {
        const mushroom = findById(mushrooms, item.id);
        const tr = renderTableRow(mushroom, item);
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

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {
    clearCart();
    location.reload();
    // renderCart();
});