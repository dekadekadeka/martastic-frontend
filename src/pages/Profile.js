import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserEditForm from '../components/UserEditForm'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { deleteUser, getProfileFetch } from '../actions/authActions'
import { deleteFriend } from '../actions/userActions'
import { Link, useHistory } from 'react-router-dom';

const Profile = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser.currentUser);
  useEffect(() => {
    if (!currentUser) {
      dispatch(getProfileFetch());
    }
  }, [dispatch, currentUser])
  const history = useHistory();

  const removeFriend = (deletedFriend) => {
    dispatch(deleteFriend(currentUser.id, deletedFriend))
  };

  if (!currentUser) {
    return <p>Loading....</p>
  }

  return (
    <div className="profile">
      <h1>My Profile</h1>
        <div className="ui items">
          <div className="item">
          <div className="image">
            <img src={currentUser.profile_pic_url}
            alt="profile pic"/>
          </div>
          <div className="content">
            <span className="header">{currentUser.name}</span>
              <div className="meta">
                <span>About Me</span>
              </div>
              <div className="description">
                <p>{currentUser.bio}</p>
              </div>
              <div className="extra">
                <ul>
                  <li>Location: {currentUser.location}</li>
                  <li>Home Station: {currentUser.home_station}</li>
                </ul>
              </div>
          </div>
          </div>
        </div>
          <h1>My Friends</h1>
            {currentUser.friends.length === 0 ?
              <h2>You don't have any friends yet! :( </h2> :
                <div className="pics-station-list">
                {currentUser.friends.map(friend => (
                  <Card key={friend.id}>
                    <CardActionArea>
                      <CardMedia
                      component="img"
                      image={friend.profile_pic_url}
                      height="100"
                      title={friend.name}
                      />
                      <CardContent>
                        <h2>{friend.name}</h2>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        style={{ color: 'red' }}
                        onClick={() => removeFriend(friend.id)}
                      >
                        Remove Friend
                      </Button>
                    </CardActions>
                  </Card>
                ))}
              </div>
            }
          <h1>My Pics</h1>
          {currentUser.pics.length === 0 ? <h2>You don't have any pics yet! :(</h2> :
            <div className="pics-station-list">
              {currentUser.pics.map(pic => (
                <React.Fragment>
                  <article className="pic" key={pic.id}>
                    <div className="img-container">
                      <Link to={`/pics/${ pic.id}`}>
                        <img src={pic.pic_url} alt=""/>
                      </Link>
                    </div>
                  </article>
                </React.Fragment>
              ))}
            </div>
          }
          <UserEditForm user={currentUser}/>
          <div className="danger-box">
            <div className="danger-text">
              <h1>Danger Zone</h1>
            </div>
            This is an irreversible action. Please make sure you actually
            want to delete your profile before proceeding.
            <div id="butt">
              <Button
                style={{color: '#fff', backgroundColor: 'red'}}
                onClick={() => dispatch(deleteUser(currentUser, history))}
              >
                Delete Me!
              </Button>
            </div>
          </div>
    </div>
  );
};

export default Profile;
