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

