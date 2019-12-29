import React, { Component } from 'react'

  export default class StationMap extends Component {
        render() {
            return (
            <div className="station-map">
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe 
                        title="Station Map"
                        // width="1100" 
                        // height="500" 
                        id="gmap_canvas" 
                        src={`https://maps.google.com/maps?q=${this.props.coords}&t=k&z=16&ie=UTF8&iwloc=&output=embed`}
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                        </iframe>
                    </div>
                </div>
          </div>
        );
      }
}