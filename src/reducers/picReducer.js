import { sample } from 'lodash';

const initialState = {
    pics: [],
    selected: {}
}
export default function(state = initialState, action){
    switch(action.type){
        case 'FETCH_PICS':
            return {
                ...state,
                pics: action.payload
            }
        case 'SINGLE_PIC':
            const selected = state.pics.find((pic) => 
                pic.id === action.data.id)
            return {
                ...state,
                selected: selected
            }
        default:
            return state
        }
}
export const getRandomPic = (state) => {
    return sample(state.pics.pics)
}