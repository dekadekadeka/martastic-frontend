import React, { useState } from 'react'
import SingleStation from "./SingleStation";

const StationList = ({ stations }) => {
  const [open, setOpen] = useState(false);
  const [stationId, setStationId] = useState(null);

  return (
    <React.Fragment>
      {stations.map(station => (
        <article
          className="station-pic"
          onClick={() => {
            setOpen(true);
            setStationId(station.id);
          }}>
          <div className="img-container-stations">
            <img
              src={station.first_pic_url}
              alt={station.name} key={station.id}
            />
            <h1 className="station-text">{station.name}</h1>
          </div>
        </article>
      ))}
      <SingleStation
        open={open}
        setOpen={setOpen}
        stationId={stationId}
      />
    </React.Fragment>
  );
};

export default StationList;
