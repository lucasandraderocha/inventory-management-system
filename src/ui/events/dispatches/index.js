import storeFacade from "../../../store";
import actionHead from "../../../store/constants";
import { buyItemAction } from "../../../store/constants/actions";
import { BUY_ITEM } from "../../../store/constants/variables";

export default function testDispatch (payload) {
    storeFacade.publish(buyItemAction(BUY_ITEM, payload))
}