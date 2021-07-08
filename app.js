// import functions and grab DOM elements
import mushrooms from './data/mushrooms.js';
import { renderMushroom } from './render-mushroom.js';

const mushroomsUl = document.getElementById('mushrooms');

for (let mushroom of mushrooms) {
    const mushroomLi = renderMushroom(mushroom);
    mushroomsUl.appendChild(mushroomLi);
}

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


  // add event listener to each button with class "add"
const addButtons = document.querySelectorAll('.add');
for (let button of addButtons) {
    button.addEventListener('click', (e) => {
        // console.log("i am clicking button", e.target.value);
        // console.log(typeof(e.target.value));
        // e.target.value is a string, we need our IDs to be numbers
        // addItemtoCart(Number(e.target.value));
    });
}