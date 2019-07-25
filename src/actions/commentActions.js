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
        body: JSON.stringify({commentData})
    })
    .then(resp => resp.json())
    .then(comment => dispatch({
        type: "NEW_COMMENT",
        payload: comment
    }))
}

// export const createComment = (commentData) => {
//     return async dispatch => {
//         const token = localStorage.token;
//         if (token){
//             const resp = await fetch("http://localhost:3000/comments", {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 Accept: 'application/json',
//                 'Authorization': `Bearer ${token}`
//             },
//             body: JSON.stringify({commentData})
//         });
//         const data = await resp.json();
//         if(data.message){
//             console.log(data.message)
//         }
//         else {
//             dispatch(makeComment(data.commentData))
//         }
//         }
//     }
// }

// const makeComment = commentObj => ({
//         type: "NEW_COMMENT",
//         payload: commentObj
// })