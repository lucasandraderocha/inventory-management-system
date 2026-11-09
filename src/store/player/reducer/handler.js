import hasGold from "../utils/hasGold.js"
import hasCapacity from "../utils/hasCapacity.js"
import insertToInventory from "../utils/insertToInventory.js"
import removeFromInventory from "../utils/removeFromInventory.js"

/**
 * 
 * @param {object} state 
 * @param {number} state.gold
 * @param {number} state.capacity
 * @param {object[]} state.inventory
 * @param {object} payload
 * @param {number} payload.id
 * @param {number} payload.name
 * @param {string[]} payload.type
 * @param {number} payload.price
 * @param {number} payload.weight
 * @param {string} payload.icon
 * @param {number} payload.quantity
 * @returns {object}
 */
export function buy(state, payload) {
    return {
        ...state,
        gold: hasGold(state.gold, payload.price),
        capacity: hasCapacity(state.capacity, payload.weight),
        inventory: insertToInventory(state, payload)
    }
}

/**
 * 
 * @param {object} state 
 * @param {number} state.gold
 * @param {number} state.capacity
 * @param {object[]} state.inventory
 * @param {object} payload
 * @param {number} payload.id
 * @param {number} payload.name
 * @param {string[]} payload.type
 * @param {number} payload.price
 * @param {number} payload.weight
 * @param {string} payload.icon
 * @param {number} payload.quantity
 * @returns {object}
 */
export function sell(state, payload ){
                return {
                ...state,
                gold: state.gold + payload.price,
                capacity: state.capacity + payload.weight,
                inventory: removeFromInventory(state.inventory, payload)
            };
}

export function handler () {
    return {
        PLAYER_BUY: buy,
        PLAYER_SELL:  sell
    }
}