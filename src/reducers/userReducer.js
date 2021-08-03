const initialState = {
  user: null,
  friendAdded: false,
  error: null,
}

export default function userReducer (state = initialState, action){
  switch(action.type){
    case 'EDIT_USER':
      return {
        ...state,
        user: action.payload,
      }
    case 'EDIT_USER_ERROR':
      return{
        ...state,
        error: action.payload,
      }
    case 'ADD_FRIEND':
      return {
        ...state,
        friendAdded: true,
      }
    case 'ADD_FRIEND_ERROR':
      return {
        ...state,
        error: action.payload,
      }
    case 'DELETE_FRIEND':
      return {
        ...state,
        friendAdded: false,
      }
    default:
      return state;
  }
};
