export default (state = 0, action) => {
    switch (action.type) {
        case 'SET_SEASON':
            return action.payload
        default:
            return state
    }
}



        // case 'REQUEST_PLAYER_SEASONS':
        //     return {
        //         ...state,
        //         [action.year]: {
        //             ...state[action.year],
        //             isFetching: true
        //         }
        //     }

