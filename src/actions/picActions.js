import {config} from '../constants';

const url = config.url.apiUrl;

export const fetchPics = () => dispatch => {
  fetch (`${url}/pics`)
    .then (resp => resp.json())
    .then (pics => dispatch({
      type: 'FETCH_PICS',
      payload: pics
    })
  );
}

export const fetchSinglePic = (picId) => {
  return dispatch => {
    return fetch(`${url}/pics/${picId}`)
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: 'FETCH_SINGLE_PIC',
          payload: data
        })
    })
  }
}

export const createPic = (picData) => dispatch => {
  const token = localStorage.token;
  fetch (`${url}/pics`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify ({pic: picData})
  })
    .then (resp => resp.json())
    .then (pic => {
      if (pic.error) {
        dispatch({
          type: 'PIC_FAIL',
          payload: pic.error
        })
      } else {
        dispatch({
          type: "NEW_PIC",
          payload: pic
        })
      }
    }
  );
}

export const editLikes = (pic) => {
  return dispatch => {
    return fetch (`${url}/pics/${pic.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify ({likes: ++ pic.likes})
    })
      .then (resp => resp.json())
      .then (data => {
        if (data.message) {
          dispatch({
            type: 'LIKE_FAIL',
            payload: data.error
          })
        }
      }
    );
  }
}
