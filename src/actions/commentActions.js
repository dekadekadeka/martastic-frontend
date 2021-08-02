import { config } from '../constants';

const url = config.url.apiUrl;

export const createCommentBegin = () => ({
  type: 'FETCH_PRODUCTS_BEGIN'
});

export const createComment = (commentData) => dispatch => {
  const token = localStorage.token;
  fetch(`${url}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({comment: commentData})
  })
  .then(resp => resp.json())
  .then(data => {
    dispatch({
      type: 'COMMENT_LOAD',
    })
    if (data.content) {
      dispatch({
       type: 'COMMENT_SUCCESS',
       payload: data
     });
    } else if (data.error) {
      dispatch({
        type: 'COMMENT_ERROR',
        payload: data.error
      });
    }
  });
};
