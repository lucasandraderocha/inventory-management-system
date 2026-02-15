function createReducer (initialState, handler) {
    return function (state = initialState, {type, payload}) {
        return handler[type] ? handler[type](state, payload) : state;
    }
}

export default createReducer