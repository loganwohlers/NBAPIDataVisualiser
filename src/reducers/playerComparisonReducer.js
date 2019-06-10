export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_COMPARISON':
            return { ...state, playerSeasons: action.payload }
        case 'FETCH_COMPARISON':
            return { ...state, players: action.payload }
        default:
            return state
    }
}