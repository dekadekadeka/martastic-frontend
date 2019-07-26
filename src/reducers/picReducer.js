import { sample } from 'lodash';

const initialState = {
    pics: [],
    newPic: {}
}
export default function(state = initialState, action){
    switch(action.type){
        case 'FETCH_PICS':
            return {
                ...state,
                pics: action.payload
            }
        case 'NEW_PIC':
            return {
                ...state,
                newPic: action.payload
            }
        default:
            return state
        }
}
export const getRandomPic = (state) => {
    return sample(state.pics.pics)
}