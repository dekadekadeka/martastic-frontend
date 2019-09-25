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
        case 'NEW_PIC':
            return {
                ...state,
                pics: [...state.pics,
                    action.payload]
            }
        // case 'NEW_COMMENT':
        //     return {
        //         ...state,
        //         pics: [...state.pics.comments,
        //             action.payload]
        //     }
        default:
            return state
        }
}
export const getRandomPic = (state) => {
    return sample(state.pics.pics)
}