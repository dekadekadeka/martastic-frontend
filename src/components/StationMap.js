import React from 'react';

const StationMap = ({ coords }) => (
  <div className="station-map">
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title="Station Map"
          id="gmap_canvas"
          src={`https://maps.google.com/maps?q=${coords}&t=k&z=16&ie=UTF8&iwloc=&output=embed`}
          frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
        </iframe>
      </div>
    </div>
  </div>
);

export default StationMap;
