export default (
    state = {
        data: [],
        isFetching: false
    },
    action
) => {
    switch (action.type) {
        case 'REQUEST_PLAYER_SEASONS':
            console.log('requesting?')
            return Object.assign({}, state, {
                isFetching: true,
            })
        case 'RECEIVED_PLAYER_SEASONS':
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload
            })
        default:
            return state
    }
}