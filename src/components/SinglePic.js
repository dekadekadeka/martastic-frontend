import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import Tooltip from "@material-ui/core/Tooltip";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { fetchSinglePic, editLikes } from "../actions/picActions";
import { addFriend } from "../actions/authActions";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SinglePic = ({ open, setOpen, picId }) => {
  const [liked, setLiked] = useState(false);

  const dispatch = useDispatch();

  const comment = useSelector(state => state.comment);
  const pic = useSelector(state => state.pics.pic);
  const currentUser = useSelector(state => state.currentUser.currentUser);

  useEffect(() => {
    dispatch(fetchSinglePic(picId));
  }, [picId, dispatch, comment]);

  if (!pic || pic.status === 404 || !picId) {
    return null;
  }

  const addLikes = () => {
    setLiked(true);
    dispatch(editLikes(pic));
  }

  const makeFriend = () => {
    const friend = {
      friend_id: pic.user.id
    };
    dispatch(addFriend(friend));
  }

  const handleClose = () => {
    setOpen(false);
    setLiked(false);
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
        </Toolbar>
      </AppBar>
      <div className="single-pic">
        <img className="big-pic" src={pic.pic_url} alt={pic.station} />
        <div className="likes">
          <div className="pics-heart" onClick={liked ? null : addLikes}>
            {liked ? <MdFavorite/> : <MdFavoriteBorder/>}
            <h3>Likes: {pic.likes}</h3>
          </div>
          <Tooltip
            title={
              <React.Fragment>
                <CardHeader
                  titleTypographyProps={{variant: 'h5'}}
                  subheaderTypographyProps={{variant: 'body1', color: '#fff'}}
                  avatar={<Avatar
                      style={{width: '7rem', height: '7rem',borderRadius: '4px'}}
                      src={pic.user.profile_pic_url}
                    />}
                  title={pic.user.name}
                  subheader={pic.user.bio}
                />
                <h4 style={{margin: '0px 0px 0px 10px'}}>Home Station: {pic.user.home_station}</h4>
                <h4 style={{margin: '0px 0px 10px 10px'}}>Neighborhood: {pic.user.location}</h4>
                {currentUser && (
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem'}}>
                    {!currentUser.friends.some(friend => friend.id === pic.user.id)?
                      <Button variant="outlined" color="primary" onClick={makeFriend}>Add Friend</Button>
                      : <Button variant="contained" disabled>We're already friends</Button>}
                  </div>
                )}
              </React.Fragment>
            }
            interactive
          >
            <h3>Picture by {pic.user.name}</h3>
          </Tooltip>
        </div>
        <div className="ui comments">
          {pic.comments && (
            <React.Fragment>
              <h3 className="ui dividing header">Comments</h3>
              <Comments comments={pic.comments} loading={comment.loading} />
            </React.Fragment>
          )}
          {currentUser && currentUser.username && (
            <CommentForm type="Pic" id={pic.id} error={comment.error} />
          )}
        </div>
      </div>
    </Dialog>
  );
}

export default SinglePic;
