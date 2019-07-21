import { FETCH_PICS } from '../actions/types'

const initialState = {
    pics: []
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_PICS:
            return {
                ...state,
                pics: action.payload
            }
        default:
            return state
    }
}