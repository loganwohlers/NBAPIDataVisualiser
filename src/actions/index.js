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

// we want to use getState to get our currSeason and then send it in fetch for stats
export const fetchAllPlayerSeasons = () => {
    return async (dispatch, getState) => {
        let yr = getState().currSeason
        const response = await railsData.get('/seasons/' + yr + '?stats=true')
        dispatch({ type: 'FETCH_PLAYER_SEASONS', payload: response.data })
    }
}

//this can just be the ID since we'll have fetched their season by this point?
export const fetchOnePlayerSeason = () => {

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


