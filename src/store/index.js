import configStore from "./config"
import reducer from "./reducer";

const {dispatch, getState, subscribe} = configStore(reducer)

const storeFacade = {
    publish: action => dispatch(action),

    get state() {
        return getState()
    },

    subscribe: listener => subscribe(listener)
}


export default storeFacade