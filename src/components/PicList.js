import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultImg from '../images/404.jpg'

const PicList = ({pics}) => {
    return (
        <>
        {pics.map(pic => (
    <article className="pic" key={pic.id}>
        <div className="img-container">
            <Link to={`/pics/${pic.id}`}>
            <img src={pic.pic_url || defaultImg} 
            alt={{...pic}.station.name}/>
            </Link>
        </div>
        
    </article>
    ))}
        </>
    )
}

PicList.propTypes = {
    pics: PropTypes.array.isRequired
}

export default PicList
