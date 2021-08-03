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
        currentUser: action.payload
      }
    case 'LOGOUT_USER':
      return {
        ...state,
        currentUser: {}
      }
    case 'LOGIN_FAIL':
      return {
        ...state,
        message: action.payload
      }
    case 'SIGNUP_FAIL':
      return {
        ...state,
        error: action.payload
      }
    case 'DELETE_USER':
      return {
        ...state,
        currentUser: {}
      }
    default:
      return state;
  }
};
