function createReducer (initialState, head) {
    const handler = head
    return (state = initialState, {type, payload}) => handler[type] ? handler[type](state, payload) : state
}

export default createReducer