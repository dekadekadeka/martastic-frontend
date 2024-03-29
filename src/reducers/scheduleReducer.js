const initialState = {
    trains: [],
    sortedTrains: [],
    time: 0,
    minWait: 0,
    maxWait: 0,
    loading: true
}

export default function scheduleReducer(state = initialState, action){
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
                sortedTrains: action.payload,
                loading: false
            }
        default:
            return state
    }
}
