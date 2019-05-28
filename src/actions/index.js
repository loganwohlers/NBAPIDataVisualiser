import railsData from '../apis/railsData'

export const setSeason = (year) => {
    return (
        {
            type: 'SET_SEASON',
            payload: year
        }
    )
}

export const setPlayer = (player) => {
    return (
        {
            type: 'SET_PLAYER',
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
        let yr = getState().currSeason.year
        dispatch(requestPlayerSeasons(yr))
        const response = await railsData.get('/seasons/' + yr + '?stats=true')
        dispatch(receivedPlayerSeasons(response.data))
    }
}

export const fetchSeasonGames = () => {
    return async (dispatch, getState) => {
        let yr = getState().currSeason.year
        dispatch(requestSeasonGames())
        const response = await railsData.get('/seasons/' + yr + '?games=true')
        dispatch(receivedSeasonGames(response.data))
    }
}

const shouldFetchData = (state) => {
    const ps1 = state.currSeason.playerSeasons.data[0]
    const sg1 = state.currSeason.seasonGames.data[0]
    const year = state.currSeason.year
    if (!ps1 || !sg1) {
        return true
    }
    return !(ps1.season.year === year || sg1.season.year === year)
}

export const fetchAllSeasonDataIfNeeded = () => {
    return async (dispatch, getState) => {
        if (shouldFetchData(getState())) {
            await dispatch(fetchAllPlayerSeasons())
            await dispatch(fetchSeasonGames())

        }
    }
}

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


export const fetchPlayer = () => {
    return async (dispatch, getState) => {
        let id = getState().currPlayer.id
        const response = await railsData.get('/players/' + id)
        dispatch({ type: 'FETCH_PLAYER', payload: response.data })
    }
}

export const fetchGameBoxScore = () => {
    return async (dispatch, getState) => {
        let id = getState().currGame.id
        const response = await railsData.get('/games/' + id)
        dispatch({ type: 'FETCH_GAME_BOX_SCORE', payload: response.data })
    }
}


