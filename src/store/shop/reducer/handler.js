import hasBuyIt from "../utils/hasBuyIt"
import hasSellIt from "../utils/hasSellIt";

export function sell(state, payload) {
    return hasSellIt(state, payload);
}

export function buy(state, payload) {
    return hasBuyIt(state, payload)
}


export function handler() {
    return {
        SELL: sell,
        BUY: buy
    }
}