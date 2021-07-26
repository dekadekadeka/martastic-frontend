import React from 'react'
import { Link } from 'react-router-dom';
import defaultImg from '../images/404.jpg'

const PicList = ({ pics }) => {
  return (
    <React.Fragment>
      {pics.map(pic => (
        <article className="pic" key={pic.id}>
          <div className="img-container">
            <Link to={`/pics/${pic.id}`}>
              <img src={pic.pic_url || defaultImg}
                alt={{...pic}.station.name}
              />
            </Link>
          </div>
        </article>
      ))}
    </React.Fragment>
  );
};

export default PicList;
