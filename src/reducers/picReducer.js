const initialState = {
    pics: [],
    error: ''
}
export default function picReducer(state = initialState, action){
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
        case 'PIC_FAIL':
            return{
                ...state,
                error: action.payload
            }
        case 'LIKE_FAIL':
            return {
                ...state,
                pics: action.payload
            }
        default:
            return state
        }
}
