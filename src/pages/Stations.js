import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchStations } from '../actions/stationActions'
import { Link } from 'react-router-dom'

class Stations extends Component {
    componentDidMount(){
        this.props.fetchStations()
    }

    render() {
        console.log(this.props.stations)
        return (
            <div className="stations">
                All Stations
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    stations: state.stations.stations
})

export default connect(mapStateToProps, { fetchStations })(Stations)