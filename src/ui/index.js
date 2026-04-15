import storeFacade from "../store";
import testDispatch from "./events/dispatches";

export default function initUi () {
    storeFacade.subscribe(() => {
        console.log(`[State Atual]: `, storeFacade.state)
    })
    testDispatch({price: 50, weight: 10, name: "[WW] Weak Weapon"})
}
