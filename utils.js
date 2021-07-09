export function findById(items, id) {
    // loop through the items
    for (const item of items) {
    // if item's id is equal to the id parameter
        if (item.id === id) {
    //   return the item
            return item;
        }
    }
}

export function calcItemTotal(mushrooms, cart) {
    let orderTotal = 0;
    // loop through the cart items
    for (let item of cart) {
        const mushroom = findById(mushrooms, item.id);
        orderTotal += mushroom.price * item.qty;
    }
    // return the orderTotal
    return orderTotal;
}

export function toUSD(number) {
    return number.toLocaleString(
        'en-US', { style: 'currency', currency: 'USD' });
}

export function renderTableRow(mushroomItem, cartItem) {
 
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = mushroomItem.name;
    tr.appendChild(tdName);
    
    const tdPrice = document.createElement('td');
    tdPrice.textContent = toUSD(mushroomItem.price);
    tr.appendChild(tdPrice);
    
    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;
    tr.appendChild(tdQty);

    const tdTotal = document.createElement('td');
    const total = mushroomItem.price * cartItem.qty;
    tdTotal.textContent = toUSD(total);
    tr.appendChild(tdTotal);

    return tr;
}

export function getTotal(mushrooms, cart) {
    let orderTotal = 0;
    // loop through the cart items
    for (let item of cart) {
        // get the associated mushroom
        const mushroom = findById(mushrooms, item.id);
        // sum up the qty * price
        orderTotal += mushroom.price * item.qty;
    }
    // return the orderTotal
    return orderTotal;
}