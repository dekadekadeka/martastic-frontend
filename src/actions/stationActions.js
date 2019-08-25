export const fetchStations = () => dispatch => {
    fetch("https://martastic.herokuapp.com/stations")
    .then(resp => resp.json())
    .then(stations =>
        dispatch({
            type: 'FETCH_STATIONS',
            payload: stations
        })
    );
}