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

export const editLikes = (station) => {
    return dispatch => {
    return fetch(`https://martastic.herokuapp.com/stations/${station.id}`, {
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