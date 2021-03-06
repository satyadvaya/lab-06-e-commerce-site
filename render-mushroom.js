export function renderMushroom(mushroom) {
    const mushroomLi = document.createElement('li');

    const mushroomH3 = document.createElement('h3');
    mushroomH3.textContent = mushroom.name;

    const mushroomImg = document.createElement('img');
    mushroomImg.src = `./assets/${mushroom.image}`;
    mushroomImg.alt = mushroom.name;

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = mushroom.id;
    button.classList.add('add');

    const mushroomSpan = document.createElement('span');
    mushroomSpan.textContent = `$${mushroom.price}`;

    mushroomLi.appendChild(mushroomH3);
    mushroomLi.appendChild(mushroomImg);
    mushroomLi.appendChild(mushroomSpan);
    mushroomLi.appendChild(button);

    return mushroomLi;
}