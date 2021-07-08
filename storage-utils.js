import { findById } from './utils.js';

export const CART = 'BIG-BAD-CART';

export function getCart(){
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