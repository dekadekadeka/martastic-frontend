import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchStations } from '../actions/stationActions'
import StationList from '../components/StationList'

class Stations extends Component {
    componentDidMount(){
        this.props.fetchStations()
    }

    render() {
        return (
            <div className="stations">
                <section className="picslist">
                    <div className="picslist-center">
                    <StationList stations={this.props.stations}/>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    stations: state.stations.stations
})

export default connect(mapStateToProps, {fetchStations})(Stations)