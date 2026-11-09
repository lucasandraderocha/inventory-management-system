import { initialShop } from "../data";
import { handler } from "./handler.js";
/**
 * 
 * @param {object[]} state
 * @param {number} state[].id
 * @param {string} state[].name
 * @param {string[]} state[].type
 * @param {number} state[].price
 * @param {number} state[].weight
 * @param {number} state[].quantity
 * @param {object} action
 * @param {string} action.type
 * @param {string | object} action.payload
 * @returns {object[]}
 */
export default function shopReducer(state = initialShop, { type, payload }) {
    const head = handler();

    return head[type] ? head[type](state, payload) : state;
}