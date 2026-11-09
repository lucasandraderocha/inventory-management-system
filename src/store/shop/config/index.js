import { createStore } from "redux"
export default function config(reducer) {
    const { dispatch, subscribe, getState } = createStore(
        reducer /** preloadedState, */,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSIONS__()
    );

    return {
        dispatch,
        subscribe,
        getState
    }

}