export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ONE_PLAYER_SEASON':
            return action.payload
        default:
            return state
    }
}