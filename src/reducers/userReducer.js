const initialState = {
    user: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case 'EDIT_USER':
            return {
                ...state,
                user: action.payload
            }
        // case 'DELETE_USER':
        //     return {
        //         ...state,
        //         user: {}
        //     }
        default:
            return state
    }
}