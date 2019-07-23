const initialState ={
    stations: [],
    selected: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case 'FETCH_STATIONS':
            return {
                ...state,
                stations: action.payload
            }
        case 'SINGLE_STATION':
            const selected = state.stations.find(station =>
                station.slug === action.data.slug)
            return {
                ...state,
                selected: selected
            }
        default:
            return state
    }
}