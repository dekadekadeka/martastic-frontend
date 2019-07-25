const initialState = {
    comment: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case "NEW_COMMENT":
            return{
                ...state,
                comment: action.payload
            }
        default:
            return state;
    }
}
