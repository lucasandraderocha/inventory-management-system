function createReducer (initialState, handler) {
    return (state = initialState, {type, payload}) => handler[type] ? handler[type](state, payload) : state
}

export default createReducer