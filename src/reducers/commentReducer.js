const initialState = {
    comments: []
}

export default function commentReducer (state = initialState, action){
    switch(action.type){
        case 'FETCH_COMMENTS':
            return {
                ...state,
                comments: action.payload
            }
        case 'COMMENT_FAIL':
            return {
                ...state,
                comments: action.payload
            }
        case 'NEW_COMMENT':
            return {
                ...state,
                comments: action.payload
            }
        default:
            return state
    }
}
