import railsData from '../apis/railsData'

export const setSeason = (year) => {
    return (
        {
            type: 'SET_SEASON',
            payload: year
        }
    )
}

export const setPlayerSeason = (player) => {
    return (
        {
            type: 'SET_PLAYER_SEASON',
            payload: player
        }
    )
}

export const setGame = (game) => {
    return (
        {
            type: 'SET_GAME',
            payload: game
        }
    )
}

export const requestPlayerSeasons = (year) => {
    return {
        type: 'REQUEST_PLAYER_SEASONS',
        year
    }
}

export const receivedPlayerSeasons = (data) => {
    return {
        type: 'RECEIVED_PLAYER_SEASONS',
        payload: data
    }
}

export const fetchAllPlayerSeasons = () => {
    return async (dispatch, getState) => {
        let yr = getState().currSeason
        dispatch(requestPlayerSeasons(yr))
        const response = await railsData.get('/seasons/' + yr + '?stats=true')
        dispatch(receivedPlayerSeasons(response.data))
    }
}

//something like-- check if the yr of the currently loaded data is equal to the state selected season-- if NOT fetch- otherwise false
// const shouldFetchData = (state) => {
//really want state.currentSeason.games here-- checking first one
//     const game = state.seasonGames[0]
//     if (!games) {
//         return true
//     } else if (games[0].season.year === state.season) {
//         return false
//     } else {
//         return true
//     }
// }

//start of nested set-up

// let initial = {}
// for (let i = 0; i < response.data.length; i++) {
//     initial[response.data[i].year] = {
//         id: response.data[i].id,
//         seasonFetched: false,
//         isFetching: false,
//         seasonGames: [],
//         playerSeasons: []
//     }
// }

//one fn to that incorporates shouldFetch 
// export const fetchAllSeasonData = () => {
//     return async (dispatch, getState) => {
//         dispatch(requestPlayerSeasons())
//         let yr = getState().currSeason
//         const response = await railsData.get('/seasons/' + yr + '?stats=true')
//         dispatch(receivedPlayerSeasons(response.data))
//     }
// }

export const requestSeasonGames = () => {
    return {
        type: 'REQUEST_SEASON_GAMES'
    }
}

export const receivedSeasonGames = (data) => {
    return {
        type: 'RECEIVED_SEASON_GAMES',
        payload: data
    }
}

export const fetchSeasonGames = () => {
    return async (dispatch, getState) => {
        dispatch(requestSeasonGames())
        let yr = getState().currSeason
        const response = await railsData.get('/seasons/' + yr + '?games=true')
        dispatch(receivedSeasonGames(response.data))
    }
}

export const fetchOnePlayerSeason = () => {
    return async (dispatch, getState) => {
        let id = getState().currPlayerSeason.id
        const response = await railsData.get('/player_seasons/' + id)
        dispatch({ type: 'FETCH_ONE_PLAYER_SEASON', payload: response.data })
    }
}

export const fetchGameBoxScore = () => {
    return async (dispatch, getState) => {
        let id = getState().currGame.id
        const response = await railsData.get('/games/' + id)
        dispatch({ type: 'FETCH_GAME_BOX_SCORE', payload: response.data })
    }
}


