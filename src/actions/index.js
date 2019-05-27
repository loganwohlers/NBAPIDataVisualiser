import railsData from '../apis/railsData'

export const fetchSeasons = () => {
    return async (dispatch, getState) => {
        let response = await railsData.get('/seasons')
        dispatch({ type: 'FETCH_ALL_SEASONS', payload: response.data })
    }
}

export const setSeason = (year) => {
    return (
        {
            type: 'SET_SEASON',
            payload: year
        }
    )
}

export const requestPlayerSeasons = () => {
    return {
        type: 'REQUEST_PLAYER_SEASONS'
    }
}

//use this to feed into reducer
export const receivedPlayerSeasons = (data) => {
    return {
        type: 'RECEIVED_PLAYER_SEASONS',
        payload: data
    }
}


// we want to use getState to get our currSeason and then send it in fetch for stats
export const fetchAllPlayerSeasons = () => {
    return async (dispatch, getState) => {
        console.log('about to fetch')
        dispatch(requestPlayerSeasons())
        let yr = getState().currSeason
        const response = await railsData.get('/seasons/' + yr + '?stats=true')
        console.log('fetched')
        dispatch(receivedPlayerSeasons(response.data))
    }
}

export const fetchOnePlayerSeason = () => {
    return async (dispatch, getState) => {
        let id = getState().currPlayer.id
        const response = await railsData.get('/player_seasons/' + id)
        dispatch({ type: 'FETCH_ONE_PLAYER_SEASON', payload: response.data })
    }

}

export const fetchSeasonGames = () => {
    return async (dispatch, getState) => {
        let yr = getState().currSeason
        const response = await railsData.get('/seasons/' + yr + '?games=true')
        dispatch({ type: 'FETCH_SEASON_GAMES', payload: response.data })
    }

}

export const fetchGameBoxScore = () => {

}


