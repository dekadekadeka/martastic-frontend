import React from 'react'

const ScheduleList = ({trains, loading}) => {

    if(loading){
        return (
            <div className="empty-search">
                <h3>Please wait for the schedule to load...</h3>
            </div>
        )
    }
    
    if(trains.length === 0){
        return (
            <div className="empty-search">
                <h3>Unfortunately, no trains matched your search parameters</h3>
            </div>
        )
    }

const color_key ={
    BLUE: '#0b75b3',
    GREEN: '#07a550',
    GOLD: '#d7aa31',
    RED: '#cc2329'
}


    return (
        <div className="picslist-center">
        {trains.map(train => (
            <div className="ui raised link card">
            <div className="content">
            <div style={{ color: color_key[train.LINE] }}className="header">Destination: {train.DESTINATION}</div>
            <div className="meta">
                <span className="category">{train.LINE} Line </span>
                <span className="category">{train.DIRECTION}</span>
            </div>
            <div className="description">
                <p>Next arrival: {train.NEXT_ARR}</p>
                <p>Current station: {train.STATION}</p>
                <p>Waiting Time: {train.WAITING_TIME}</p>
            </div>
            </div>
        </div>
        ))}  
        </div>
    )
}

export default ScheduleList
