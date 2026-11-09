/**
 * 
 * @param {object[]} state
 * @param {number} state[].id
 * @param {string} state[].name
 * @param {string[]} state[].type
 * @param {number} state[].price
 * @param {number} state[].weight
 * @param {number} state[].quantity
 * @param {number} payload
 * @returns {object[]}
 */
export default function hasSellIt(state, payload) {
    if (!payload) return new Error("ERROR! You must be sent a payload atleast!")

    if (state.some(item => item.id === payload && item.quantity === 1))
        return state.filter(item => item.id !== payload)

    return state.map(item => item.id === payload ? {
        ...item,
        quantity: item.quantity > 0 ? --item.quantity : 0
    } : item)
}
