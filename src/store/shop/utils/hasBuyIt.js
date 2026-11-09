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
export default function hasBuyIt(state, payload) {
    if (state.some(item => item.name === payload.name))
        return state.map(item => item.name === payload.name ? {
            ...item,
            quantity: ++item.quantity
        } : item)

    return [...state, {
        id: ++state.length,
        ...payload
    }]
}