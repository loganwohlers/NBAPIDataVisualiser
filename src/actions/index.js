import railsData from '../apis/railsData'

export const fetchSeasons = () => {
    return async (dispatch, getState) => {
        let response = await railsData.get('/seasons')
        dispatch({ type: 'FETCH_ALL_SEASONS', payload: response.data })
        debugger
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

// export const fetchAllPlayerSeasons = () => {
//     return async (dispatch, getState) => {
//         const response = await RailsData.get('/seasons/' + id + '?stats=true')
//         dispatch({ type: 'FETCH_PLAYER_SEASONS', payload: response.data })
//     }
// }

export const fetchPlayerSeason = () => {

}

export const fetchSeasonGames = () => {

}

export const fetchGameBox = () => {

}


