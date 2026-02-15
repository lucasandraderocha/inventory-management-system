import createReducer from "../../utils/create-reducer";
import handlerHead from "./handler";
import * as initial from "./initial"

const shopReducer = createReducer(initial, handlerHead)
export default shopReducer;