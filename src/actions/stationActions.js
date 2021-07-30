import { config } from '../constants';

const url = config.url.apiUrl;

export const fetchStations = () => dispatch => {
  fetch(`${url}/stations`)
  .then(resp => resp.json())
  .then(stations => dispatch({
      type: 'FETCH_STATIONS',
      payload: stations
    })
  );
}

export const fetchSingleStation = (stationId) => {
  return dispatch => {
    return fetch(`${url}/stations/${stationId}`)
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: 'FETCH_SINGLE_STATION',
          payload: data
        })
    })
  }
}

export const editLikes = (station) => {
  return dispatch => {
    return fetch(`${url}/stations/${station.id}`, {
      method: "PATCH",
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
      body: JSON.stringify({likes: ++station.likes})
      })
      .then(resp => resp.json())
      .then(data => {
      if (data.message) {
        dispatch({
          type: 'LIKE_FAIL',
          payload: data.error
        })
      }
    })
  }
}
