import React,{ useEffect }   from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchSchedule }     from '../actions/scheduleActions'
import ScheduleList from './ScheduleList'
import ScheduleFilter from './ScheduleFilter'

const Schedule = ({ trains, time, minWait, maxWait, sortedTrains, loading }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSchedule());
  }, [dispatch]);

  return (
    <div className="schedule">
      <div className="filter">
        <ScheduleFilter
          trains={trains}
          time={time}
          minWait={minWait}
          maxWait={maxWait}
        />
      </div>
      <ScheduleList trains={sortedTrains} loading={loading}/>
    </div>
  );
}

const mapStateToProps = state => ({
    trains: state.schedule.trains,
    time: state.schedule.time,
    minWait: state.schedule.minWait,
    maxWait: state.schedule.maxWait,
    sortedTrains: state.schedule.sortedTrains,
    loading: state.schedule.loading
})

export default connect(mapStateToProps, { fetchSchedule })(Schedule);
