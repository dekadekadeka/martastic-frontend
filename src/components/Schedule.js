import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSchedule } from '../actions/scheduleActions'
import ScheduleList from './ScheduleList'
import ScheduleFilter from './ScheduleFilter'

class Schedule extends Component {
    componentDidMount(){
        this.props.fetchSchedule()
    }

    render() {
        return (
            <div className="schedule">
                <div className="filter">
                <ScheduleFilter trains={this.props.trains} 
                time={this.props.time}
                minWait={this.props.minWait}
                maxWait={this.props.maxWait}/>
                </div>
                <ScheduleList trains={this.props.sortedTrains} loading={this.props.loading}/>
            </div>
        )
    }
}

// Schedule.propTypes = {
//     fetchSchedule: PropTypes.func.isRequired,
//     trains: PropTypes.array.isRequired
// }

const mapStateToProps = state => ({
    trains: state.schedule.trains,
    time: state.schedule.time,
    minWait: state.schedule.minWait,
    maxWait: state.schedule.maxWait,
    sortedTrains: state.schedule.sortedTrains,
    loading: state.schedule.loading
})

export default connect(mapStateToProps, { fetchSchedule })(Schedule)