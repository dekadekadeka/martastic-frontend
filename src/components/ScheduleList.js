import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
            <Card>
                <CardContent>
                <Typography variant="h6" style={{ color: color_key[train.LINE], fontWeight: "bold"}}>
                    Destination: {train.DESTINATION}
                </Typography>
                <Typography color="textSecondary">
                    {train.LINE} Line {train.DIRECTION}
                </Typography>
                <Typography variant="body1" component="p">
                    Next arrival: {train.NEXT_ARR}
                    <br />
                    Current station: {train.STATION}
                    <br />
                    Waiting Time: {train.WAITING_TIME}
                </Typography>
                </CardContent>
            </Card>
        ))}  
        </div>
    )
}

export default ScheduleList
