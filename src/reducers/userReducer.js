const initialState = {
    user: {},
    error: ''
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
        case 'EDIT_USER_ERROR':
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}