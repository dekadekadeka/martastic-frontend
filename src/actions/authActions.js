import { LOGIN_USER, LOGOUT_USER } from './types';

export const createUser = user => {
    return async dispatch => {
    const resp = await fetch("http://localhost:3000/users", {
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
        }
    }
}

export const userLoginFetch = user => {
    return async dispatch => {
      const resp = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ user })
        });
        const data = await resp.json();
        if (data.message) {
            // Here you should have logic to handle invalid login credentials.
            // This assumes your Rails API will return a JSON object with a key of
            // 'message' if there is an error
        }
        else {
            localStorage.setItem("token", data.jwt);
            dispatch(loginUser(data.user));
        }
    }
  }

  export const getProfileFetch = () => {
    return async dispatch => {
      const token = localStorage.token;
      if (token) {
        const resp = await fetch("http://localhost:3000/profile", {
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

const loginUser = userObj => ({
    type: LOGIN_USER,
    payload: userObj
})

export const logoutUser = () => ({
    type: LOGOUT_USER
  })