const initialState = {
    trains: [],
    sortedTrains: [],
    time: 0,
    minWait: 0,
    maxWait: 0
}

export default function(state = initialState, action){
    switch(action.type){
        case 'FETCH_SCHEDULE':
            return {
                ...state,
                trains: action.payload
            }
        case 'WAIT':
                return{
                    ...state,
                    time: action.payload,
                    maxWait: action.payload
                }
        case 'SORT_TRAINS':
            return{
                ...state,
                sortedTrains: action.payload
            }
        default:
            return state
    }
}