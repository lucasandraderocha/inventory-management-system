export default function clear (state) {
    return {
        ...state,
        type: null,
        message: null
    }
}