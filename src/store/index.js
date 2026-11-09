import { combineReducers } from "redux";
import config from "./shop/config"
import shopReducer from "./shop/reducer"
import { playerReducer } from "./player/reducer";

const reducer = combineReducers({ shopReducer, playerReducer })
const { dispatch, subscribe, getState } = config(reducer);
export const store = {
    publish: action => dispatch(action),
    get state() {
        return getState()
    },
    subscribe: dispatch => subscribe(dispatch)
}
