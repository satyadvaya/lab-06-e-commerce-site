// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById, calcItemTotal, renderTableRow, getTotal } from '../utils.js';
import mushrooms from '../data/mushrooms.js';

const test = QUnit.test;

test('returns mushrooms by id', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 3,
        name: 'Matsutake',
        image: 'matsutake.png',
        description: 'Brownish-yellow',
        category: 'spicy aroma',
        price: 36
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(mushrooms, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('calcItemTotal should return the total amount in the cart', expect => {
    //Arrange
    // Set up your arguments and expectations
    const data = [
        { id: 4, price: 24 },
        { id: 6, price: 33 }];

    const cart = [
        { id: 4, qty: 5 },
        { id: 6, qty: 7 }];

    const expected = 351;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(data, cart);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
});

test('renderTableRow returns a <tr> element', expect => {
    //Arrange
    // Set up your arguments and expectations
    const mushroom = {
        id: 5,
        name: 'Morrel',
        image: 'morrel.png',
        description: 'Brownish-orange',
        category: 'Earthy aroma',
        price: 30
    };
    const cart = {
        id: 5,
        qty: 8
    };

    const expected = `<tr><td>Morrel</td><td>$30.00</td><td>8</td><td>$240.00</td></tr>`;

    //Act 
    // Call the function you're testing and set the result to a const    
    const dom = renderTableRow(mushroom, cart);
    const html = dom.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(html, expected);
});

test('getTotal should return the total amount in the cart', expect => {
    const data = [
        { id: 4, price: 24 },
        { id: 6, price: 33 }];

    const cart = [
        { id: 4, qty: 5 },
        { id: 6, qty: 7 }];

    const expected = 351;
    const actual = getTotal(data, cart);
    expect.equal(expected, actual);
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