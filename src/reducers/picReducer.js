import { FETCH_PICS, RANDOM_PIC } from '../actions/types'

const initialState = {
    pics: [],
    pic: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_PICS:
            return {
                ...state,
                pics: action.payload
            }
        case RANDOM_PIC:
            return {
                ...state,
                pic: action.payload
            }
        default:
            return state
    }
}