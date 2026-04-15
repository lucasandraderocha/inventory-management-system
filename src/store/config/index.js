import { legacy_createStore as createStore } from "redux";

const configStore = (reducer) => {
    const {dispatch, getState, subscribe} = createStore(reducer /* preloadedState, */,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return {
        dispatch, getState, subscribe
    }
}

export default configStore