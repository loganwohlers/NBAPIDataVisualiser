export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_SEASONS':
            return action.payload
        default:
            return state
    }
}