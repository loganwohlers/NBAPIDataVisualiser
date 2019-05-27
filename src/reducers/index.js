import { combineReducers } from 'redux'

import allSeasonsReducer from './allSeasonsReducer'
import currentSeasonReducer from './currentSeasonReducer'
import allPlayerSeasonsReducer from './allPlayerSeasonsReducer'
import seasonGamesReducer from './seasonGamesReducer'
import currentPlayerSeasonReducer from './currentPlayerSeasonReducer'
import currentGameReducer from './currentGameReducer'

export default combineReducers({
    allSeasons: allSeasonsReducer,
    currSeason: currentSeasonReducer,
    playerSeasons: allPlayerSeasonsReducer,
    seasonGames: seasonGamesReducer,
    currPlayerSeason: currentPlayerSeasonReducer,
    currGame: currentGameReducer
})