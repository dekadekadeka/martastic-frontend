import {FETCH_STATIONS} from './types';

export const fetchStations = () => dispatch => {
    fetch("http://localhost:3000/stations")
    .then(resp => resp.json())
    .then(stations =>
        dispatch({
            type: FETCH_STATIONS,
            payload: stations
        })
    );
}