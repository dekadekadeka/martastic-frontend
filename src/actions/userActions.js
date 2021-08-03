import { config } from '../constants';

const url = config.url.apiUrl;

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

export const addFriend = (friend) => dispatch => {
  const token = localStorage.token;
  fetch(`${url}/friendships`, {
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
    if (data.friend_id) {
      dispatch({
        type: 'ADD_FRIEND',
        // payload: data
      })
    } else if (data.error) {
      dispatch({
        type: 'ADD_FRIEND_FAIL',
        payload: data.error
      })
    }
  });
}

export const deleteFriend = (user, friend) => dispatch => {
  const token = localStorage.token;
  fetch(`${url}/friendships`)
  .then(resp => resp.json())
  .then(data => {
    let toBeDeleted = (
      data.find(friendObj => friendObj.user_id === user && friendObj.friend_id === friend)
    )
    fetch(`${url}/friendships/${toBeDeleted.id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(dispatch({
      type: 'DELETE_FRIEND'
    }))
  })
}
