import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getProfileFetch} from '../actions/authActions';
import UserEditForm from '../components/UserEditForm'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {deleteUser} from '../actions/authActions'
import {deleteFriend} from '../actions/userActions'
import { Link } from 'react-router-dom';

class Profile extends Component {

  removeFriend = (deletedFriend) => {
    this.props.deleteFriend(this.props.currentUser.id, deletedFriend)
  }
  
  render() {
    return (
      <div className="profile">
        <h1>My Profile</h1>
          <div className="ui items">
            <div className="item">
            <div className="image">
              <img src={this.props.currentUser.profile_pic_url} 
              alt="profile pic"/>
            </div>
            <div className="content">
              <span className="header">{this.props.currentUser.name}</span>
                <div className="meta">
                  <span>About Me</span>
                </div>
                <div className="description">
                  <p>{this.props.currentUser.bio}</p>
                </div>
                <div className="extra">
                  <ul>
                    <li>Location: {this.props.currentUser.location}</li>
                    <li>Home Station:  {this.props.currentUser.home_station}</li>
                  </ul>
                </div>
            </div>
            </div>
          </div>
            <h1>My Friends</h1>
              <div className="picslist-center">
                {this.props.currentUser.friends.length === 0 ? <h2>You don't have any friends yet! :(</h2> :
                this.props.currentUser.friends.map(friend => (
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
                      <Button size="small" color="primary" 
                      style={{color: 'red'}} onClick={() => this.removeFriend(friend.id)}>
                        Remove Friend
                      </Button>
                    </CardActions>
                  </Card>
                  )
                  )}
              </div>
            <h1>My Pics</h1>
              <div className="picslist-center">
                {this.props.currentUser.pics.length === 0 ? "You don't have any pics yet! :(" : 
                this.props.currentUser.pics.map(pic => (
                  <article className="pic" key={pic.id}>
                    <div className="img-container">
                      <Link to={`/pics/${pic.id}`}>
                        <img src={pic.pic_url} alt=""/>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            <UserEditForm user={this.props.currentUser}/>
            <div className="danger-box">
              <div className="danger-text"><h1>Danger Zone</h1></div>
              This is an irreversible action. Please make sure you actually 
              want to delete your profile before proceeding.
                <div id="butt">
                <button className="ui red button"
                onClick={deleteUser(this.props.currentUser, this.props.history)}>Delete Me!</button>
              </div>
            </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  currentUser: state.currentUser.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  deleteUser: (user, history) => dispatch(deleteUser(user, history)),
  deleteFriend: (user, friend) => dispatch(deleteFriend(user, friend))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);