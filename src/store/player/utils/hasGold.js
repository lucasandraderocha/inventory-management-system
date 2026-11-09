/**
 * 
 * @param {number} gold 
 * @param {number} price 
 * @returns {number}
 */
export default function hasGold(gold, price) {
    if (gold < price) {
        return gold
    }

    return gold - price
}