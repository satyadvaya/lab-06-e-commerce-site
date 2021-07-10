import { findById } from './utils.js';

export const CART = 'BIG-BAD-CART';

export function getCart() {
    // get the cart from localstorage
    // parse it
    // return it
    let stringCart = localStorage.getItem(CART) || '[]';
    // let stringCart = localStorage.getItem('CART');
    // if (localStorage.getItem('CART') === null) {
    //     stringCart = '[]';
    // }
    const cart = JSON.parse(stringCart); // turn JSON string into JS object
    return cart;
}

export function setCart(cart) {
    localStorage.setItem(CART, JSON.stringify(cart));
}

export function addItemtoCart(itemId){
    // get the cart from localstorage
    const cart = getCart();
    const item = findById(cart, itemId);
    console.log(item);
    
    if (item) {
        // if the item already exists
        //    increment the qty
        item.qty += 1; // item.qty = item.qty + 1;
    } else {
        // else
        //    add the item to the array with qty 1  
        const lineItem = { id: itemId, qty: 1 };
        cart.push(lineItem);
    }    
    console.log(cart);
    // set cart back to localstorage
    setCart(cart);
}

export function clearCart(){
    localStorage.removeItem(CART);
}