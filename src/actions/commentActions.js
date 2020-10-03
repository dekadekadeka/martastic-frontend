import { config } from '../../src/constants';

const url = config.url.apiUrl;

export const fetchComments = () => dispatch => {
    fetch(`${url}/comments`)
    .then(resp => resp.json())
    .then(comments => dispatch({
        type: 'FETCH_COMMENTS',
        payload: comments
    }))
}

export const createComment = (commentData) => dispatch => {
    console.log(commentData)
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
