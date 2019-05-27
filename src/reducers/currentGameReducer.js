export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_GAME':
            return action.payload
        case 'FETCH_GAME_BOX_SCORE':
            return { ...state, boxscore: action.payload }

        default:
            return state
    }
}