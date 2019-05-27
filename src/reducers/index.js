import { combineReducers } from 'redux'

import allSeasonsReducer from './allSeasonsReducer'
import currentSeasonReducer from './currentSeasonReducer'
import allPlayerSeasonsReducer from './allPlayerSeasonsReducer'
import seasonGamesReducer from './seasonGamesReducer'
import currentPlayerStats from './currentPlayerStats'

export default combineReducers({
    allSeasons: allSeasonsReducer,
    currSeason: currentSeasonReducer,
    playerSeasons: allPlayerSeasonsReducer,
    seasonGames: seasonGamesReducer,
    currPlayerSeason: currentPlayerStats
})