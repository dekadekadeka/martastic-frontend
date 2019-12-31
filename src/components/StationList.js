import React from 'react'
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import defaultImg from '../images/404.jpg'

const StationList = ({stations}) => {
    return (
        <>
        {stations.map(station => (
    <article className="station-pic">
        <div className="img-container-stations">
            <img src={{...station.pics[0]}.pic_url || defaultImg} 
            alt={station.name} key={station.id}/>
            <Link to={`/stations/${station.slug}`}>
            <h1 className="station-text">{station.name}</h1>
            </Link>
        </div>
    </article>
    ))}
        </>
    )
}

export default StationList