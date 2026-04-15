import buyItem from "./buy";
import sellItem from "./sell";

const handlerHead = {
    BUY_ITEM: (state, payload = null) => buyItem(state, payload = null),
    SELL_ITEM: (state, payload = null) => sellItem(state, payload)
}

export default handlerHead