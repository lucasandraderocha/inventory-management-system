import createReducer from "../../utils/create-reducer";
import handlerHead from "./handler";
import * as initial from "./initial"
const playerReducer = createReducer(initial, handlerHead)
console.log(playerReducer);

export default playerReducer;