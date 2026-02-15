export default function clearFilter (state) {
    return {
        ...state,
        tag: null,
        total: null
    }
}