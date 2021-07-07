// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById, calcItemTotal } from '../utils.js';
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


test('calcItemTotal should return the total amount in the cart', expect => {
    //Arrange
    // Set up your arguments and expectations
    const data = [{
        id: 4,
        price: 24
    },
    {
        id: 6,
        price: 33
    }];
    const cart = [
        { id: 4, qty: 5 },
        { id: 6, qty: 7 }
    ];

    //Act 
    // Call the function you're testing and set the result to a const
    const expected = 351;
    const actual = calcItemTotal(data, cart);
    expect.equal(expected, actual);
});