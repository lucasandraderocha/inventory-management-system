/**
 * 
 * @param {object} state 
 * @param {number} state.gold
 * @param {number} state.capacity
 * @param {object[]} state.inventory
 * @param {object} payload
 * @param {number} payload.price
 * @returns {object[]}
 */
export default function insertToInventory(state, payload) {
    if (state.gold < payload.price || state.capacity <= 0) {
        return state.inventory;
    }

    return [...state.inventory, payload];
}