import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterTrains} from '../actions/scheduleActions';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
class ScheduleFilter extends Component{

    state={
        line: '',
        direction: '',
        destination: '',
        station: '',
        waiting_time: ''
    }

    handleChange = e => {
        const target = e.target
        const value = target.value
        const name =  e.target.name
        this.setState({
            [name]:value
        }, this.props.filterTrains(this.state)
        )
        console.log(this.state)
    }

    render() {
        console.log(this.props)
    //get unique lines
    let lines = getUnique(this.props.trains, "LINE")
    
    //add all
    lines = ["all", ...lines]
    //map to jsx
    lines = lines.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    //direction getUnique
    let direction = getUnique(this.props.trains, "DIRECTION")
    direction = ["all", ...direction]
    direction = direction.map((item, index) =>{
        return <option key={index} value={item}>{item}</option>
    })

    //destination getUnique
    let destination = getUnique(this.props.trains, "DESTINATION")
    destination = ["all", ...destination]
    destination = destination.map((item, index) =>{
        return <option key={index} value={item}>{item}</option>
    })
    //current station getUnique
    let station = getUnique(this.props.trains, "STATION")
    station = ["all", ...station]
    station = station.map((item, index) =>{
        return <option key={index} value={item}>{item}</option>
    })
        const {DESTINATION, DIRECTION, LINE, STATION,
            WAITING_SECONDS} = this.props.trains
    return (
        <div>
            <form className="ui form">
                <div className="fields">
                {/* lines */}
                <div className="field">
                <label htmlFor="line">Line</label>
                <select name="line" 
                id="line" 
                value={LINE}
                className="form-control"
                onChange={this.handleChange}>
                    {lines}
                </select>
                </div>
                {/* end lines */}
                {/* direction */}
                <div className="field">
                <label htmlFor="direction">Direction</label>
                <select name="direction" 
                id="direction" 
                value={DIRECTION}
                className="form-control"
                onChange={this.handleChange}>
                    {direction}
                </select>
                </div>
                {/* end direction */}
                {/* destination */}
                <div className="field">
                <label htmlFor="destination">Destination</label>
                <select name="destination" 
                id="destination" 
                value={DESTINATION}
                className="form-control"
                onChange={this.handleChange}>
                    {destination}
                </select>
                </div>
                {/* end destination */}
                {/* current station */}
                <div className="field">
                <label htmlFor="station">Current Station</label>
                <select name="station" 
                id="station" 
                value={STATION}
                className="form-control"
                onChange={this.handleChange}>
                    {station}
                </select>
                </div>
                {/* end current station */}
                {/* waiting seconds */}
                <div className="field">
                <label htmlFor="waiting_seconds">
                    Max Waiting Time {this.props.time} seconds
                    <input type="range" name="waiting_seconds"
                    min={this.props.minWait} max={this.props.maxWait} id="waiting_time"
                    value={WAITING_SECONDS}
                    onChange={this.handleChange}
                    className="form-control" />
                </label>
                </div>
                {/* end waiting seconds */}
                </div>
                </form>
        </div>
    )
    }
}

export default connect(null, { filterTrains })(ScheduleFilter)