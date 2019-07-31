export const fetchSchedule = () => dispatch => {
    fetch("https://cors-anywhere.herokuapp.com/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=aa224864-8131-4464-aab9-49aaf1288834")
    .then(resp => resp.json())
    .then(trains =>{
        let maxWait = Math.max(...trains.map(item => item.WAITING_SECONDS))
        dispatch({
            type: 'FETCH_SCHEDULE',
            payload: trains
        })
        dispatch({
            type: 'WAIT',
            payload: maxWait
        })}
    );
}

export const filterTrains = (trains, state) => dispatch => {
    let {
        line, destination, station, waiting_seconds
    } = state
// all the trains
    let tempTrains = [...trains]
//filter by LINE
    if(line !== "all"){
        tempTrains = tempTrains.filter(train => train.LINE === line)
    }

//filter by DESTINATION
if(destination !=="all"){
tempTrains = tempTrains.filter(train => train.DESTINATION === destination)
}

//filter by CURRENT STATION
if(station !=="all"){
    tempTrains = tempTrains.filter(train => train.STATION === station.toUpperCase())
}

// //filter by waiting seconds
if(waiting_seconds){
    tempTrains = tempTrains.filter(train => train.WAITING_SECONDS <= waiting_seconds)
}

//finally change state
    dispatch({
        type: 'SORT_TRAINS',
        payload: tempTrains
    })
}