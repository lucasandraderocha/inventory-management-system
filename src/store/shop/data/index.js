/**
 * 
 * @param {object[]} state
 * @param {number} state[].id
 * @param {string} state[].name
 * @param {string[]} state[].type
 * @param {number} state[].price
 * @param {number} state[].weight
 * @param {number} state[].quantity
 */

export const initialShop = [
    {
        id: 1,
        name: "Iron Sword",
        type: ["weapon"],
        price: 50,
        weight: 15,
        icon: "⚔️",
        quantity: 1
    },
    {
        id: 2,
        name: "Corwell Shield",
        type: ["weapon", "armor"],
        price: 75,
        weight: 5,
        icon: "🛡️",
        quantity: 1
    },
    {
        id: 3,
        name: "Health Potion",
        type: ["consumable"],
        price: 20,
        weight: 1,
        icon: "🧪",
        quantity: 5
    },
    {
        id: 4,
        name: "Magic Staff",
        type: ["weapon", "magic"],
        price: 120,
        weight: 8,
        icon: "🪄",
        quantity: 1
    },
    {
        id: 5,
        name: "Leather Armor",
        type: ["armor"],
        price: 60,
        weight: 10,
        icon: "🥋",
        quantity: 1
    },
    {
        id: 6,
        name: "Fire Scroll",
        type: ["magic", "consumable"],
        price: 35,
        weight: 1,
        icon: "📜",
        quantity: 3
    },
    {
        id: 7,
        name: "Hunter Bow",
        type: ["weapon"],
        price: 90,
        weight: 6,
        icon: "🏹",
        quantity: 1
    },
    {
        id: 8,
        name: "Silver Ring",
        type: ["accessory"],
        price: 45,
        weight: 1,
        icon: "💍",
        quantity: 2
    },
    {
        id: 9,
        name: "Steel Helmet",
        type: ["armor"],
        price: 40,
        weight: 4,
        icon: "⛑️",
        quantity: 1
    },
    {
        id: 10,
        name: "Mana Potion",
        type: ["consumable"],
        price: 25,
        weight: 1,
        icon: "🔵",
        quantity: 4
    }
];