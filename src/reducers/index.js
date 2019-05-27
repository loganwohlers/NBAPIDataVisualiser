import { combineReducers } from 'redux'
import allSeasonsReducer from './allSeasonsReducer'
import currentSeasonReducer from './currentSeasonReducer'

export default combineReducers({
    seasons: allSeasonsReducer,
    season: currentSeasonReducer
})