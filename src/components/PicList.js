import React, { useState } from 'react'
import SinglePic from "./SinglePic";

const PicList = ({ pics }) => {
  const [open, setOpen] = useState(false);
  const [picId, setPicId] = useState(null);

  return (
    <React.Fragment>
      {pics.map(pic => (
        <article
          className="pic"
          onClick={() => {
            setPicId(pic.id);
            setOpen(true);
          }}>
          <div className="img-container">
            <img
              src={pic.pic_url}
              alt={pic.station_name} key={pic.id}
            />
          </div>
        </article>
      ))}
      <SinglePic
        open={open}
        setOpen={setOpen}
        picId={picId}
      />
    </React.Fragment>
  );
};

export default PicList;
