export const fetchComments = () => {
    return async dispatch => {
        const resp = await fetch("https://martastic.herokuapp.com/comments");
        const comments = await resp.json();
            dispatch({
                type: 'FETCH_COMMENTS',
                payload: comments
            })
    }
}

export const createComment = (commentData) => dispatch => {
    console.log(commentData)
    const token = localStorage.token;
    fetch("https://martastic.herokuapp.com/comments", {
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