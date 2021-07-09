// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { CART, getCart, addItemtoCart, clearCart } from '../storage-utils.js';

const test = QUnit.test;

test('getCart should return the cart from localStorage as an object', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const sampleCart = [
        { id: 1, qty: 2 },
        { id: 3, qty: 4 },
    ];
    const sampleCartString = JSON.stringify(sampleCart);
    localStorage.setItem(CART, sampleCartString);

    //Act 
    // Call the function you're testing and set the result to a const
    const cart = getCart();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(cart, sampleCart);
});

test('getCart should return an empty array if the cart is empty', (expect) => {
    //Arrange
    // Set up your arguments and expectation
    localStorage.removeItem(CART);

    //Act 
    // Call the function you're testing and set the result to a const
    const cart = getCart();

    //Expect
    // Make assertions about what is expected versus the actual result
    const expected = [];

    expect.deepEqual(cart, expected);
});

test('addItemtoCart should add items to cart if not already there', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const sampleCart = [
        { id: 2, qty: 3 },
        { id: 4, qty: 5 },
    ];
    const sampleCartString = JSON.stringify(sampleCart);
    localStorage.setItem(CART, sampleCartString);

    //Act 
    // Call the function you're testing and set the result to a const
    addItemtoCart(4);
    
    const newCart = getCart();

    //Expect
    // Make assertions about what is expected versus the actual result
    const expected = [
        { id: 2, qty: 3 },
        { id: 4, qty: 6 },
    ];

    expect.deepEqual(newCart, expected);
});

test('addItemtoCart should update quantity if item already in cart', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const sampleCart = [
        { id: 3, qty: 4 },
        { id: 5, qty: 6 },
    ];
    const sampleCartString = JSON.stringify(sampleCart);
    localStorage.setItem(CART, sampleCartString);

    //Act 
    // Call the function you're testing and set the result to a const
    addItemtoCart(3);
    
    const newCart = getCart();

    //Expect
    // Make assertions about what is expected versus the actual result
    const expected = [
        { id: 3, qty: 5 },
        { id: 5, qty: 6 },
    ];

    expect.deepEqual(newCart, expected);
});

test('clearCart should delete the cart from localStorage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const sampleCart = [
        { id: 4, qty: 5 },
        { id: 6, qty: 1 },
    ];
    const sampleCartString = JSON.stringify(sampleCart);
    localStorage.setItem(CART, sampleCartString);

    //Act 
    // Call the function you're testing and set the result to a const
    clearCart();

    //Expect
    // Make assertions about what is expected versus the actual result
    const expected = [];
    const cart = getCart();
    
    expect.deepEqual(cart, expected);
});

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});