export default function sellItem (state, payload) {
    return state.filter(item => item.id === payload)
}