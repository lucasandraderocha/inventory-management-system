import {createStore} from "redux"

function main() {
    const ADD = "ADD"
    const SUB = "SUB"
    const add = (type = ADD) => {return {type}}
    const sub = (type = SUB) => {return {type}}
    function reducer (state = 0, {type}) {
        switch(type) {
            case "SUB":
                return --state;
            case "ADD":
                return ++state;
            default:
                return state;
        }
    }

    const {getState, dispatch, subscribe} = createStore(reducer);

    subscribe(() => {
        const state = getState();

        console.log(state)
    })

    dispatch(add())
    dispatch(add())
    dispatch(sub())
}

main()