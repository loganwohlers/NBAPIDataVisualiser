export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PLAYER_SEASONS':
            return action.payload
        default:
            return state
    }
}