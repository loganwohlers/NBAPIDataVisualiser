import { combineReducers } from 'redux'
import allSeasonsReducer from './allSeasonsReducer'
import currentSeasonReducer from './currentSeasonReducer'
import allPlayerSeasonsReducer from './allPlayerSeasonsReducer'

export default combineReducers({
    allSeasons: allSeasonsReducer,
    currSeason: currentSeasonReducer,
    playerSeasons: allPlayerSeasonsReducer
})