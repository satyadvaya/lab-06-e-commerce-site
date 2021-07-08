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