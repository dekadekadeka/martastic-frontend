import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchStations } from '../actions/stationActions'
import defaultImg from '../images/home-default.jpg'
import { Link } from 'react-router-dom'

class Stations extends Component {
    componentDidMount(){
        this.props.fetchStations()
    }

    render() {
        if(this.props.stations === undefined) return null
        const allStations = this.props.stations.map(station => (
            <article className="pic">
                <div className="img-container">
                    <Link to={`/stations/${station.slug}`}>
                    <img src={{...station.pics[0]}.pic_url || defaultImg} 
                    alt={station.name} key={station.id}/>
                    </Link>
                </div>
            </article>
        ))
        return (
            <div className="stations">
                <section className="picslist">
                    <div className="picslist-center">
                {allStations}
                </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    stations: state.stations.stations
})

export default connect(mapStateToProps, { fetchStations })(Stations)