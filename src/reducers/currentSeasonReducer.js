export default (state = {
    year: 2019,
    playerSeasons: {
        data: [],
        isFetching: false
    },
    seasonGames: {
        data: [],
        isFetching: false
    }
}, action) => {
    switch (action.type) {
        case 'SET_SEASON':
            return { ...state, year: action.payload }
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

