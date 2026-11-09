import { initialPlayer } from "../data/index.js"
import { handler } from "./handler.js";


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
    const head = handler();

    return head[type] ? head[type](state,payload) : state;
}

