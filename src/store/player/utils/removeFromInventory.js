/**
 * 

 * @param {object[]} inventory
 * @param {object} payload
 * @param {number} payload.id
 * @param {number} payload.quantity
 * @returns {object}
 */
export default function removeFromInventory(inventory, payload) {
    const itemQuantity = inventory.find(item => item.id === payload.id).quantity;

    if (payload.quantity > itemQuantity) {
        throw new Error("[ERROR] The payload's quantity exceed player's item quantity. Try again.");

    }

    if (itemQuantity <= payload.quantity) {
        return inventory.filter(item => item.id !== payload.id)
    }
    return inventory.map(item => item.id === payload.id ? {
        ...item,
        quantity: item.quantity - payload.quantity
    } : item)

}