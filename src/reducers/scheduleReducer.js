const initialState = {
    trains: []
}

export default function(state = initialState, action){
    switch(action.type){
        case 'FETCH_SCHEDULE':
            return {
                ...state,
                trains: action.payload
            }
        default:
            return state
    }
}