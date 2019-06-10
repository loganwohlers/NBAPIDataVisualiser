export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_COMPARISON':
            return { ...state, results: action.payload }
        default:
            return state
    }
}