export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SEASON_GAMES':
            return action.payload
        default:
            return state
    }
}