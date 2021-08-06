import { config } from '../constants';

const url = config.url.apiUrl;

export const getProfileFetch = () => {
  return async dispatch => {
    const token = localStorage.token;
    if (token) {
      const resp = await fetch(`${url}/profile`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await resp.json();
      if (data.message) {
        localStorage.removeItem('token');
      } else {
        dispatch(loginUser(data.user));
      }
    }
  }
}

export const createUser = (user, history) => {
  return dispatch => {
  return fetch(`${url}/users`, {
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
        localStorage.removeItem('token');
      } else {
        localStorage.setItem('token', data.jwt);
        dispatch(loginUser(data.user));
        history.push('/profile')
      }
    })
  }
}

export const editUser = (userObj) => {
  return async dispatch => {
    const token = localStorage.token;
    if (token) {
      const resp = await fetch(`${url}/users/${userObj.id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({user: userObj})
      });
      const user = await resp.json();
      if (user.error) {
        dispatch({
          type: 'EDIT_USER_ERROR',
          payload: user
        });
      } else {
        dispatch({
          type: 'EDIT_USER',
          payload: user
        });
      }
    }
  }
}

export function userLoginFetch(user, history) {
  return dispatch => {
  return fetch(`${url}/login`, {
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
    });
  };
}

export const initState = () => {
  return dispatch => {
    return fetch(`${url}/init-state`, {
      headers: { Authorization: `Bearer ${localStorage.token}` }
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.message) {
        console.log(data.message);
      } else {
        dispatch(loginUser(data.user));
      }
    });
  };
};

export const deleteUser = (userObj, history) => dispatch => {
  const token = localStorage.token;
  fetch(`${url}/users/${userObj.id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(resp => resp.json())
  .then(dispatch({
      type: 'DELETE_USER'
    }),
    console.log('user deleted'),
    localStorage.removeItem('token'),
    history.push("/")
  );
};

export const addFriend = friend => dispatch => {
  const token = localStorage.token;
  fetch(`${url}/add-friend`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization': `Bearer ${ token }`
    },
    body: JSON.stringify(friend)
  })
    .then(resp => resp.json())
    .then(data => {
      dispatch({
        type: 'FRIEND_LOAD',
      })
      if (data.user) {
        dispatch({
          type: 'ADD_FRIEND',
          payload: data.user
        })
      } else if (data.error) {
        dispatch({
          type: 'ADD_FRIEND_ERROR',
          payload: data.error
        })
      }
    });
}

export const deleteFriend = friend => dispatch => {
  const token = localStorage.token;
  fetch(`${url}/delete-friend`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization': `Bearer ${ token }`
    },
    body: JSON.stringify({ friend_id: friend })
  })
    .then(resp => resp.json())
    .then(data => {
      if (data.user) {
        dispatch({
          type: 'DELETE_FRIEND',
          payload: data.user
        })
      } else if (data.error) {
        dispatch({
          type: 'DELETE_FRIEND_ERROR',
          payload: data.error
        })
      }
    });
}

const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
});
