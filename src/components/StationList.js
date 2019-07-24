import React from 'react'
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import defaultImg from '../images/404.jpg'

const StationList = ({stations}) => {
    return (
        <>
        {stations.map(station => (
    <article className="pic">
        <div className="img-container">
            <Link to={`/stations/${station.slug}`}>
            <img src={{...station.pics[0]}.pic_url || defaultImg} 
            alt={station.name} key={station.id}/>
            </Link>
        </div>
    </article>
    ))}
        </>
    )
}

// StationList.propTypes = {
//     stations: PropTypes.object.isRequired
// }

export default StationList