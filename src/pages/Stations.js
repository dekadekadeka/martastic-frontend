import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchStations } from '../actions/stationActions'
import StationList from '../components/StationList'

const Stations = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStations());
  }, [dispatch]);

  const stations = useSelector(state => state.stations.stations);

  return (
    <div className="pics-station-list">
      <StationList stations={stations}/>
    </div>
  );
};

export default Stations;
