import createReducer from "../../utils/create-reducer"
import handlerHead from "./handler"
import * as initial from "./initial"

const screenReducer = createReducer(initial, handlerHead)
export default screenReducer;