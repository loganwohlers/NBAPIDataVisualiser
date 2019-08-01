import railsData from '../apis/railsData'

//sends selected state to current season reducer
export const setSeason = (year) => {
    return (
        {
            type: 'SET_SEASON',
            payload: year
        }
    )
}

//sends selected player to current player reducer
export const setPlayer = (player) => {
    return (
        {
            type: 'SET_PLAYER',
            payload: player
        }
    )
}

//takes an array of selected players
export const setComparison = (playersArr) => {
    let results = {}
    results.playerSeasons = playersArr

    let multi = playersArr.map(ps => {
        return ps[0].player.id
    })

    return async (dispatch, getState) => {
        let data = await Promise.all(multi.map(async (id) => {
            const response = await railsData.get('/players/' + id)
            return response.data
        }))
        results.data = data
        dispatch({ type: 'SET_COMPARISON', payload: results })
    }
}


//sends selected game to current player reducer
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

//checking if a season's data HAS been selected OR if the season selected is the same as the currently selected season. if data has already been loaded return false, else true
const shouldFetchData = (state) => {
    const ps1 = state.currSeason.playerSeasons.data[0]
    const sg1 = state.currSeason.seasonGames.data[0]
    const year = state.currSeason.year
    if (!ps1 || !sg1) {
        return true
    }
    return !(ps1.team_season.year === year || sg1.season.year === year)
}

//using the result of the above check-- dispatches methods to fetch all the data for a given season(player averages + games)
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

//uses the current seleted players id and fetches their data
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


