import { combineReducers, createStore } from "redux"

function main() {

    const PLAYER_BUY = "IMS//PLAYER_BUY"
    const PLAYER_SELL = "IMS//PLAYER_SELL"

    const actionPlayerBuy = (type, payload) => ({ type, payload })
    const actionPlayerSell = (type, payload) => ({ type, payload })

    const initialPlayer = {
        gold: 500,
        capacity: 20, // Kg
        inventory: []
    }

    /**
     * 
     * @param {object} state 
     * @param {number} state.gold
     * @param {number} state.capacity
     * @param {object[]} state.inventory
     * @param {function} action 
     * @returns {object | object[]}
     */
    function playerReducer(state = initialPlayer, { type, payload }) {
        switch (type) {
            case PLAYER_BUY:
                return {
                    ...state,
                    gold: state.gold > payload.price ? state.gold - payload.price : new Error('Cê não tem dinheiro, meu chapa'),
                    capacity: state.capacity > payload.weight ? state.capacity - payload.weight : new Error('Cê ta cheio ed bagulho ai meu. Vende algo'),
                    inventory: state.gold > payload.price && state.capacity >= 0 ? [...state.inventory, payload] : state.inventory
                };
            case PLAYER_SELL:
                return state;
            default:
                return state;
        }
    }


    const SHOP_BUY = "IMS//BUY";
    const SHOP_SELL = "IMS//SELL";

    const actionShopBuy = (type = SHOP_BUY, payload) => ({ type, payload })
    const actionShopSell = (type = SHOP_SELL, payload) => ({ type, payload })

    const initialShop = [
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


    function shopReducer(state = initialShop, { type, payload }) {
        switch (type) {
            case SHOP_BUY:
                return [
                    ...state, {
                        id: ++state.length,
                        ...payload,
                    }
                ];
            case SHOP_SELL:
                return state.map(item => item.id === payload ? {
                            ...item,
                            quantity: --item.quantity
                        }: item);
            default:
                return state;
        }
    }

    const reducer = combineReducers({ shopReducer, playerReducer })

    const { getState, dispatch, subscribe } = createStore(reducer);

    const render = () => {
        const state = getState()
        
        // console.table(state.playerReducer);
        console.table(state.shopReducer)
    }
    subscribe(render)
    render()

    // dispatch(actionShopBuy(SHOP_BUY, {
    //     name: "Phoenix Feather",
    //     type: ["material", "rare"],
    //     price: 300,
    //     weight: 3,
    //     icon: "🪶",
    //     quantity: 1
    // }))
    dispatch(actionShopSell(SHOP_SELL, 2))
    dispatch(actionPlayerBuy(PLAYER_BUY,{
        name: "Phoenix Feather",
        type: ["material", "rare"],
        price: 300,
        weight: 1,
        icon: "🪶",
        quantity: 1
    }))
}



main();