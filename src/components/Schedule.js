import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSchedule } from '../actions/scheduleActions'

class Schedule extends Component {
    componentDidMount(){
        this.props.fetchSchedule()
    }

    render() {
        const allTrains = this.props.trains.map(train => (
            <div>
                <h3>Destination: {train.DESTINATION}</h3>
                <p>{train.LINE} Line </p>
                <p>Current station: {train.STATION}</p>
                <p>Waiting Time: {train.WAITING_TIME}</p>
            </div>
        ))
        console.log(this.props.trains)
        return (
            <div className="schedule">
                {allTrains}
            </div>
        )
    }
}

Schedule.propTypes = {
    fetchSchedule: PropTypes.func.isRequired,
    trains: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    trains: state.schedule.trains
})

export default connect(mapStateToProps, { fetchSchedule })(Schedule)