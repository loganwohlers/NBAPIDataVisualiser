export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_PLAYER':
            return action.payload
        case 'FETCH_PLAYER':
            return { ...state, data: action.payload }

        default:
            return state
    }
}