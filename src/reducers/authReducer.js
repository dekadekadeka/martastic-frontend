const initialState = {
    currentUser: {},
    message: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_USER':
        return {...state, currentUser: action.payload}
      case 'LOGOUT_USER':
        return {...state, currentUser: {}}
      case 'LOGIN_FAIL':
        return {...state, 
          message: action.payload}
      case 'DELETE_USER':
        return {...state, currentUser: {}}
      default:
        return state;
    }
  }