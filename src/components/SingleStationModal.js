import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import StationMap from "./StationMap";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

import { fetchSingleStation, editLikes } from "../actions/stationActions";
import { AppBar } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SingleStationModal = ({ open, setOpen, stationId }) => {
  const [liked, setLiked] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleStation(stationId));
  }, [stationId, dispatch]);

  const station = useSelector(state => state.stations.station);
  const currentUser = useSelector(state => state.currentUser.currentUser);

  if (!station || station.status === 404 || !stationId) {
    return null;
  }

  const addLikes = () => {
    setLiked(true);
    dispatch(editLikes(station));
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar position="sticky" style={{ backgroundImage: 'linear-gradient(135deg, #0092D0, #FDBE43, #FF7500)' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h2" style={{ fontSize: '3rem', marginLeft: '16px', flex: 1 }}>
            {station.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="single-station">
        <img className="big-pic" src={station.first_pic_url} alt={station.name} />
        <div className="likes">
          <div className="heart" onClick={liked ? null : addLikes}>
            {liked ? <MdFavorite/> : <MdFavoriteBorder/>}
            <h3>Likes: {station.likes}</h3>
          </div>
          <h3>{station.address}</h3>
        </div>
        <h3 className="ui dividing header">Location</h3>
        <div className="location">
          {station.coords === "" ?
            <h1>Loading....</h1>
            : <StationMap coords={station.coords}/>}
        </div>
        <div className="ui comments">
          {station.comments && (
            <React.Fragment>
              <h3 className="ui dividing header">Comments</h3>
              <Comments comments={station.comments} />
            </React.Fragment>
          )}
          {currentUser && (
            <CommentForm type="Station" id={station.id} />
          )}
        </div>
      </div>
    </Dialog>
  );
}

export default SingleStationModal;
