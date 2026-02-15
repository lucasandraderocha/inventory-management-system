export default function setError (state, payload)  {
    return {
        ...state,
        type: payload.type,
        message: payload.message
    }
}