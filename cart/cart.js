import { findById, calcItemTotal, toUSD, renderTableRow } from '../utils.js';
import mushrooms from '../data/mushrooms.js';
import cart from '../data/cart.js';

const tableBody = document.getElementById('table-body');

// loop through each item in cart
// find its associated fruit using findById
// get its <tr> using renderTableRow
// append <tr> to the tableBody element

for (let item of cart) {
    const mushroom = findById(mushrooms, item.id);
    const tr = renderTableRow(mushroom, item);
    tableBody.appendChild(tr);
}

const totalDom = document.getElementById('order-total');
const total = calcItemTotal(mushrooms, cart);
totalDom.textContent = toUSD(total);