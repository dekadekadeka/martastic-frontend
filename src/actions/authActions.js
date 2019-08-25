export const createUser = (user, history) => {
    return async dispatch => {
    const resp = await fetch("https://martastic.herokuapp.com/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ user })
        });
        const data = await resp.json();
        if (data.message) {
            // Here you should have logic to handle invalid creation of a user.
            // This assumes your Rails API will return a JSON object with a key of
            // 'message' if there is an error with creating the user, i.e. invalid username
        }
        else {
            localStorage.setItem("token", data.jwt);
            dispatch(loginUser(data.user));
            history.push("/profile")
        }
    }
}

export function userLoginFetch(user, history){
    return dispatch => {
    return fetch("https://martastic.herokuapp.com/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ user })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.message) {
              // Here you should have logic to handle invalid login credentials.
              // This assumes your Rails API will return a JSON object with a key of
              // 'message' if there is an error
            } else {
            localStorage.setItem("token", data.jwt);
            dispatch(loginUser(data.user));
            history.push("/profile")
            }
        })
    }
}

export const initState = ()=> {
    return async dispatch => {

        const resp = await fetch("https://martastic.herokuapp.com/init-state", {
            headers: { Authorization: `Bearer ${localStorage.token}` }
        })
        const data = await resp.json();
        if (data.message) {
            // Here you should have logic to handle invalid creation of a user.
            // This assumes your Rails API will return a JSON object with a key of
            // 'message' if there is an error with creating the user, i.e. invalid username
        }
        else {
            dispatch(loginUser(data.user));
        }
    }
}

    export const getProfileFetch = () => {
    return async dispatch => {
        const token = localStorage.token;
        if (token) {
        const resp = await fetch("https://martastic.herokuapp.com/profile", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await resp.json();
        if (data.message) {
              // An error will occur if the token is invalid.
              // If this happens, you may want to remove the invalid token.
            localStorage.removeItem("token");
        }
        else {
            dispatch(loginUser(data.user));
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
//             method: "DELETE"
//         });
//         const data = await resp.json();
//         if (data.message) {
//               // An error will occur if the token is invalid.
//               // If this happens, you may want to remove the invalid token.
//             console.log(data.message)
//             localStorage.removeItem("token")
//             history.push("/")
//         }
//         else {
//             dispatch(logoutUser(data.user))
//             console.log("removed")
//             history.push("/")
//             localStorage.removeItem("token")
//     }
//     }
// }
// }

//function works as intended but will not change state.
//User must still log out manually.
export const deleteUser = (userHash, history) => dispatch => {
    const token = localStorage.token;
    fetch(`https://martastic.herokuapp.com/${userHash.id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(resp => resp.json())
    .then(
        user => dispatch({
            type: 'DELETE_USER'
        }),
    console.log("user deleted"),
    localStorage.removeItem("token"),
    history.push("/"))
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
})