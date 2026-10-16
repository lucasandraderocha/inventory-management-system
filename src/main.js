import { combineReducers, createStore } from "redux"
import { actionShopBuy, actionShopSell, SHOP_BUY, SHOP_SELL, shopReducer } from "./store/shop"
import { actionPlayerBuy, PLAYER_BUY, playerReducer } from "./store/player";

function main() {
    const reducer = combineReducers({ shopReducer, playerReducer })

    const { getState, dispatch, subscribe } = createStore(reducer);

    const render = () => {
        const state = getState()
        state.playerReducer
        state.shopReducer
        console.log(state.shopReducer)
    }
    subscribe(render)

    dispatch(actionShopBuy(SHOP_BUY, {
        name: "Phoenix Feather",
        type: ["material", "rare"],
        price: 300,
        weight: 3,
        icon: "🪶",
        quantity: 12
    }))

    dispatch(actionShopSell(SHOP_SELL, 1))
    dispatch(actionPlayerBuy(PLAYER_BUY, {
        name: "Phoenix Feather",
        type: ["material", "rare"],
        price: 300,
        weight: 1,
        icon: "🪶",
        quantity: 1
    }))

}



main();