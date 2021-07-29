import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import { filterTrains } from '../actions/scheduleActions';

import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

const FancySlider = withStyles({
  root: {
    background: 'linear-gradient(to right, #0092D0, #FDBE43, #FF7500)',
    backgroundClip: 'content-box',
    color: 'rgba(0, 0, 0, 0.3)',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const ScheduleFilter = ({ trains, maxWait }) => {
  const [schedule, setSchedule] = useState({
    line: "All",
    destination: 'All',
    station: 'All',
    waiting_seconds: 900,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterTrains(trains, schedule));
  }, [dispatch, trains, schedule])

  const handleChange = e => {
    const value = e.target.value;
    const name =  e.target.name;
    setSchedule({ ...schedule, [name]: value })
  }

  const handleSlider = (e, newValue) => {
    setSchedule({ ...schedule, waiting_seconds: newValue })
  }

  // get unique lines
  let lines = getUnique(trains, "LINE")

  // add all
  lines = ["All", ...lines]

  // map to jsx
  lines = lines.map((item, index) =>
    <MenuItem key={index} value={item}>
      <div style={{ textTransform: 'capitalize' }}>
        {item.toLowerCase()}
      </div>
    </MenuItem>
  )

  // destination getUnique
  let destination = getUnique(trains, "DESTINATION")
  destination = ["All", ...destination]
  destination = destination.map((item, index) =>
    <MenuItem key={index} value={item}>{item}</MenuItem>)

  // current station getUnique
  let station = getUnique(trains, "STATION")
  station = ["All", ...station]
  station = station.map((item, index) =>
    <MenuItem key={index} value={item}>
      <div style={{ textTransform: 'capitalize' }}>
        {item.toLowerCase()}
      </div>
    </MenuItem>
  )

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
              value={schedule.line}
              onChange={handleChange}
              fullWidth
              margin="normal"
            >
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
              value={schedule.destination}
              onChange={handleChange}
              fullWidth
              margin="normal"
            >
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
              value={schedule.station}
              onChange={handleChange}
              fullWidth
              margin="normal"
            >
              {station}
            </TextField>
          </Grid>
          {/* end current station */}
          {/* waiting seconds */}
          <Grid item xs={12} md={3}>
            <br/>
            <label htmlFor="waiting_seconds">
              Max Waiting Time {Math.floor(schedule.waiting_seconds / 60)} minutes
            </label>
            <FancySlider
              name="waiting_seconds"
              value={schedule.waiting_seconds}
              max={maxWait}
              onChange={handleSlider}
              valueLabelFormat={() => Math.floor(schedule.waiting_seconds / 60)}
              valueLabelDisplay="auto"
              aria-label="waiting time"
            />
          </Grid>
          {/* end waiting seconds */}
        </Grid>
      </form>
    </div>
  )
}

export default ScheduleFilter;
