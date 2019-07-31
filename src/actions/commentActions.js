export const fetchComments = () => dispatch => (
    fetch("http://localhost:3000/comments", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(comments => dispatch({
        type: 'ALL_COMMENTS',
        payload: comments
    }))
)

export const createComment = (commentData) => dispatch => {
    console.log(commentData)
    const token = localStorage.token;
    fetch("http://localhost:3000/comments", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({comment: commentData})
    })
    .then(resp => resp.json())
    .then(comment => dispatch({
        type: 'NEW_COMMENT',
        payload: comment
    }))
}