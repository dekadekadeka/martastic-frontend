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
        case 'DELETE_FRIEND':
            return{
                ...state
            }
        default:
            return state
    }
}