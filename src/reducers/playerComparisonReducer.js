export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_COMPARISON':
            return { ...state, players: action.payload }
        // case 'FETCH_PLAYER':
        //     return [...state, data: action.payload]

        default:
            return state
    }
}