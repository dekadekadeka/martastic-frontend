import { sample } from 'lodash';

const initialState = {
    pics: []
}
export default function(state = initialState, action){
    switch(action.type){
        case 'FETCH_PICS':
            return {
                ...state,
                pics: action.payload
            }
        default:
            return state
        }
}
export const getRandomPic = (state) => {
    return sample(state.pics.pics)
}