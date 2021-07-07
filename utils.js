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