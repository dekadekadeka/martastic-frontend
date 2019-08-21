const initialState = {
    comments: []
}


export default function(state = initialState, action){
    switch(action.type){
        case 'FETCH_COMMENTS':
            return {
                ...state,
                comments: action.payload
            }
        case 'NEW_COMMENT':
            return {
                ...state,
                comments: [...state.comments,
                    action.payload]
            }
        default:
            return state
    }
}
