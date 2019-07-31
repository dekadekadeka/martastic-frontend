const initialState = {
    comments: []
}


export default function(state = initialState, action){
    switch(action.type){
        case 'ALL_COMMENTS':
            return{
                ...state,
                comments: action.payload
            }
        case 'NEW_COMMENT':
            return {
                ...state,
                comment: action.payload
            }
        default:
            return state;
    }
}
