export const fetchSchedule = () => dispatch => {
    window.setInterval(function(){
    fetch("https://cors-anywhere.herokuapp.com/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=aa224864-8131-4464-aab9-49aaf1288834")
    .then(resp => resp.json())
    .then(trains =>
        dispatch({
            type: 'FETCH_SCHEDULE',
            payload: trains
        })
    );
    }, 5000);
}