import { buyItemAction, sellItemAction } from "./actions";
import { BUY_ITEM, SELL_ITEM } from "./variables";

const actionHead = {
    BUY_ITEM: (payload) => buyItemAction(BUY_ITEM, payload),
    SELL_ITEM: (payload) => sellItemAction(SELL_ITEM, payload)
}
export default  actionHead