/**
 * 
 * @param {number} capacity 
 * @param {number} weight 
 * @returns {number}
 */
export default function hasCapacity(capacity, weight) {
    if (capacity < weight) {
        return capacity
    }

    return capacity - weight
}