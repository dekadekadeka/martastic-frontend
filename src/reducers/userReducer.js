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
        default:
            return state
    }
}