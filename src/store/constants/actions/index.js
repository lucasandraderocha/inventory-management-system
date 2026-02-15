import { BUY_ITEM, SELL_ITEM } from "../variables";

export const buyItemAction = (payload) => ({ type: BUY_ITEM, payload});
export const sellItemAction = (payload) => ({type: SELL_ITEM, payload});