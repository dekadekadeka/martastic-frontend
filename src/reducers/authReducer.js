const initialState = {
  currentUser: null,
  message: '',
  error: ''
};

export default function authReducer (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        currentUser: action.payload,
      }
    case 'LOGOUT_USER':
      return {
        ...state,
        currentUser: null,
      }
    case 'LOGIN_FAIL':
      return {
        ...state,
        message: action.payload,
      }
    case 'SIGNUP_FAIL':
      return {
        ...state,
        error: action.payload,
      }
    case 'DELETE_USER':
      return {
        ...state,
        currentUser: null,
      }
    case 'EDIT_USER':
      return {
        ...state,
        currentUser: action.payload,
      }
    case 'EDIT_USER_ERROR':
      return{
        ...state,
        error: action.payload,
      }
    case 'ADD_FRIEND':
      return {
        ...state,
        currentUser: action.payload,
      }
    case 'ADD_FRIEND_ERROR':
      return {
        ...state,
        error: action.payload,
      }
    case 'DELETE_FRIEND':
      return {
        ...state,
        currentUser: action.payload,
      }
    default:
      return state;
  }
};
