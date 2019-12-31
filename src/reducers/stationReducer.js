const initialState ={
    stations: [],
    error: ''
}

export default function(state = initialState, action){
    switch(action.type){
        case 'FETCH_STATIONS':
            return {
                ...state,
                stations: action.payload
            }
        case 'LIKE_FAIL':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}