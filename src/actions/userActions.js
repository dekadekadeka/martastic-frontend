export const editUser = (userHash) => {
    console.log(userHash)
    return async dispatch => {
        const token = localStorage.token;
        if (token) {
        const resp = await fetch(`http://localhost:3000/users/${userHash.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
                body: JSON.stringify({ user: userHash })
        });
        const user = await resp.json();
        if (user.message) {
              // An error will occur if the token is invalid.
              // If this happens, you may want to remove the invalid token.
        }
        else {
            dispatch({
                type: 'EDIT_USER',
                payload: user
            });
        }
    }
    }
}

// export const deleteUser = (userHash, history) => {
//     console.log(userHash)
//     return async dispatch => {
//         const token = localStorage.token;
//         if (token) {
//         const resp = await fetch(`http://localhost:3000/users/${userHash.id}`, {
//             method: "DELETE",
//             // headers: {
//                 // 'Content-Type': 'application/json',
//                 // Accept: 'application/json',
//                 // 'Authorization': `Bearer ${token}`
//             // }
//         });
//         const user = await resp.json();
//         if (user.message) {
//               // An error will occur if the token is invalid.
//               // If this happens, you may want to remove the invalid token.
//             localStorage.removeItem("token")
//             history.push("/")
//         }
//         else {
//             dispatch({
//                 type: 'DELETE_USER',
//                 payload: user
//             });
//             localStorage.removeItem("token")
//             history.push("/")
//     }
//     }
// }
// }