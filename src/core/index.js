import render from "./render";

import queryElement from "./utils/queryElements";

// TODOs
// Importo as dependências necessárias para que o player possa adquirir um item
// Orquestro todo o fluxo de subscrição em um renderer e faço o log
// Crio todos os componentes
export default function core(store) {

    // HTMLElements

    const render = () => {
        const state = store.state;
        let products = state.shopReducer;
        render(products)
    }
}
