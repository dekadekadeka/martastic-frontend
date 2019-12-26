const initialState ={
    stations: []
}

export default function(state = initialState, action){
    switch(action.type){
        case 'FETCH_STATIONS':
            return {
                ...state,
                stations: action.payload
            }
        case 'ADD_LIKE':
            return {
                ...state,
                stations: action.payload
            }
        case 'LIKE_FAIL':
            return {
                ...state,
                stations: action.payload
            }
        default:
            return state
    }
}