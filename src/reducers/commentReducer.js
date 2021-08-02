const initialState = {
  comment: null,
  loading: false,
  error: null,
};

export default function commentReducer (state = initialState, action){
  switch(action.type){
    case 'COMMENT_LOAD':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'COMMENT_SUCCESS':
      return {
        ...state,
        comment: action.payload,
        loading: false,
      };
    case 'COMMENT_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
        comment: null,
      };
    default:
      return state;
  }
};
