export const PLAYER_BUY = "IMS//PLAYER_BUY"
export const PLAYER_SELL = "IMS//PLAYER_SELL"

export const actionPlayerBuy = (type, payload) => ({ type, payload })
export const actionPlayerSell = (type, payload) => ({ type, payload })

const initialPlayer = {
    gold: 500,
    capacity: 1, // Kg
    inventory: []
}

/**
 * 
 * @param {number} gold 
 * @param {number} price 
 * @returns {number}
 */
function hasGold(gold, price) {
    if (gold < price) {
        return gold
    }

    return gold - price
}

/**
 * 
 * @param {number} capacity 
 * @param {number} weight 
 * @returns {number}
 */
function hasCapacity(capacity, weight) {
    if (capacity < weight) {
        return capacity
    }

    return capacity - weight
}

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
function insertToInventory(state, payload) {
    if (state.gold < payload.price || state.capacity <= 0) {
        return state.inventory
    }

    return [...state.inventory, payload]
}

/**
 * 
 * @param {object} state 
 * @param {number} state.gold
 * @param {number} state.capacity
 * @param {object[]} state.inventory
 * @param {object} action
 * @param {string} action.type
 * @param {object} action.payload
 * @param {number} action.payload.id
 * @param {number} action.payload.name
 * @param {string[]} action.payload.type
 * @param {number} action.payload.price
 * @param {number} action.payload.weight
 * @param {string} action.payload.icon
 * @param {number} action.payload.quantity
 * @returns {object}
 */
export function playerReducer(state = initialPlayer, { type, payload }) {
    switch (type) {
        case PLAYER_BUY:
            return {
                ...state,
                gold: hasGold(state.gold, payload.price),
                capacity: hasCapacity(state.capacity, payload.weight),
                inventory: insertToInventory(state, payload)
            };
        case PLAYER_SELL:
            return state;
        default:
            return state;
    }
}

