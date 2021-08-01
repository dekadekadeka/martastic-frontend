import { config } from '../constants';

const url = config.url.apiUrl;

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
    .then(comment => {
        if (comment.error) {
            dispatch({
                type: 'COMMENT_FAIL',
                payload: comment.error
            })
        } else{
            dispatch({
                type: 'NEW_COMMENT',
                payload: comment
            })
        }
    })
}
