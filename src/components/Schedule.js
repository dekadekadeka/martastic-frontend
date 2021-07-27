import React,{ useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchSchedule } from '../actions/scheduleActions';
import ScheduleList from './ScheduleList';
import ScheduleFilter from './ScheduleFilter';

const Schedule = () => {
  const dispatch = useDispatch();
  const schedule = useSelector(state => state.schedule);

  useEffect(() => {
    dispatch(fetchSchedule());
  }, [dispatch]);

  return (
    <div className="schedule">
      <div className="filter">
        <ScheduleFilter
          trains={schedule.trains}
          time={schedule.time}
          minWait={schedule.minWait}
          maxWait={schedule.maxWait}
        />
      </div>
      <ScheduleList trains={schedule.sortedTrains} loading={schedule.loading}/>
    </div>
  );
};

export default Schedule;
