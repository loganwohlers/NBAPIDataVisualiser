export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_ALL_SEASONS':
            return action.payload
        case 'REQUEST_PLAYER_SEASONS':
            return {
                ...state,
                [action.year]: {
                    ...state[action.year],
                    isFetching: true
                }
            }
        default:
            return state
    }
}
