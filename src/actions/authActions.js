export const createUser = (user, history) => {
    return dispatch => {
    return fetch("https://martastic.herokuapp.com/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ user })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.error) {
                dispatch({
                    type: 'SIGNUP_FAIL',
                    payload: data.error
                })
                localStorage.removeItem("token");
            } else {
            localStorage.setItem("token", data.jwt);
            dispatch(loginUser(data.user));
            history.push("/profile")
            }
        })
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
                dispatch({
                    type: 'LOGIN_FAIL',
                    payload: data.message
                })
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
            console.log(data.message)
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
            localStorage.removeItem("token");
        }
        else {
            dispatch(loginUser(data.user));
        }
    }
    }
}

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