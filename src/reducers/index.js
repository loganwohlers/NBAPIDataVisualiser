import { combineReducers } from 'redux'

import allSeasonsReducer from './allSeasonsReducer'
import currentSeasonReducer from './currentSeasonReducer'
import currentPlayerReducer from './currentPlayerReducer'
import currentGameReducer from './currentGameReducer'
import playerComparisonReducer from './playerComparisonReducer'

export default combineReducers({
    allSeasons: allSeasonsReducer,
    currSeason: currentSeasonReducer,
    currPlayer: currentPlayerReducer,
    currGame: currentGameReducer,
    playerComparison: playerComparisonReducer
})