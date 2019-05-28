import { combineReducers } from 'redux'

import allSeasonsReducer from './allSeasonsReducer'
import currentSeasonReducer from './currentSeasonReducer'
import currentPlayerSeasonReducer from './currentPlayerSeasonReducer'
import currentGameReducer from './currentGameReducer'

export default combineReducers({
    allSeasons: allSeasonsReducer,
    currSeason: currentSeasonReducer,
    currPlayerSeason: currentPlayerSeasonReducer,
    currGame: currentGameReducer
})