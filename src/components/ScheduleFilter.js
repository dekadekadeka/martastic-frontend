import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterTrains} from '../actions/scheduleActions';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
class ScheduleFilter extends Component{

    state={
        line: "all",
        destination: 'all',
        station: 'all',
        waiting_seconds: 0
    }

    handleChange = e => {
        const target = e.target
        const value = target.value
        const name =  e.target.name
        this.setState({
            [name]:value
        }, () => {
            this.props.filterTrains(this.props.trains, this.state);
        }
        )
    }

    render() {
    //get unique lines
    let lines = getUnique(this.props.trains, "LINE")
    
    //add all
    lines = ["all", ...lines]
    //map to jsx
    lines = lines.map((item, index) => 
        <MenuItem key={index} value={item}>{item}</MenuItem>)

    //destination getUnique
    let destination = getUnique(this.props.trains, "DESTINATION")
    destination = ["all", ...destination]
    destination = destination.map((item, index) =>
        <MenuItem key={index} value={item}>{item}</MenuItem>)
    //current station getUnique
    let station = getUnique(this.props.trains, "STATION")
    station = ["all", ...station]
    station = station.map((item, index) =>
        <MenuItem key={index} value={item}>{item}</MenuItem>)

        const {WAITING_SECONDS} = this.props.trains
    return (
            <div className="flexGrow: 1">
            <form>
            <Grid container spacing={5}>
                {/* lines */}
                <Grid item xs={12} md={3}>
                    <TextField
                    select
                    label="Line"
                    name="line"
                    value={this.state.line}
                    onChange={this.handleChange}
                    fullWidth
                    margin="normal">
                    {lines}
                    </TextField>
                </Grid>
                {/* end lines */}
                {/* destination */}
                <Grid item xs={12} md={3}>
                    <TextField
                    select
                    label="Destination"
                    name="destination"
                    value={this.state.destination}
                    onChange={this.handleChange}
                    fullWidth
                    margin="normal">
                    {destination}
                    </TextField>
                </Grid>
                {/* end destination */}
                {/* current station */}
                <Grid item xs={12} md={3}>
                    <TextField
                    select
                    label="Current Station"
                    name="station"
                    value={this.state.station}
                    onChange={this.handleChange}
                    fullWidth
                    margin="normal">
                    {station}
                    </TextField>
                </Grid>
                {/* end current station */}
                {/* waiting seconds */}
                <Grid item xs={12} md={3}>
                <label htmlFor="waiting_seconds">
                    Max Waiting Time {Math.floor(this.state.waiting_seconds / 60)} minutes
                    <input type="range" name="waiting_seconds"
                    min={this.props.minWait} max={this.props.maxWait} id="waiting_time"
                    value={WAITING_SECONDS}
                    onChange={this.handleChange}
                    className="form-control" />
                </label>
                </Grid>
                {/* end waiting seconds */}
                </Grid>
                </form>
            </div>
    )
    }
}

const mapStateToProps = state => ({
    sortedTrains: state.schedule.sortedTrains
})

export default connect(mapStateToProps, { filterTrains })(ScheduleFilter)