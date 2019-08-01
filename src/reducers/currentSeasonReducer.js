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

        //all this is doing is toggling the isfetching attr to t
        case 'REQUEST_PLAYER_SEASONS':
            return {
                ...state,
                playerSeasons: {
                    ...state.playerSeasons,
                    isFetching: true,
                }
            }

        //once the data has been recieved we then update our data arr
        case 'RECEIVED_PLAYER_SEASONS':
            return {
                ...state,
                playerSeasons: {
                    ...state.playerSeasons,
                    isFetching: false,
                    data: action.payload
                }
            }
        case 'REQUEST_SEASON_GAMES':
            return {
                ...state,
                seasonGames: {
                    ...state.seasonGames,
                    isFetching: true,
                }
            }
        case 'RECEIVED_SEASON_GAMES':
            return {
                ...state,
                seasonGames: {
                    ...state.seasonGames,
                    isFetching: false,
                    data: action.payload
                }
            }
        default:
            return state

    }
}

