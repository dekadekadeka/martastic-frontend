import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getProfileFetch} from '../actions/authActions';
import UserEditForm from '../components/UserEditForm'
import {deleteUser} from '../actions/authActions'
import { Link } from 'react-router-dom';

class Profile extends Component {

    render() {
        console.log(this.props.currentUser.pics.length)
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
                {/* <h1>My Friends</h1> */}
                <h1>My Pics</h1>
                <div className="picslist-center">
                {this.props.currentUser.pics.length === 0 ? "You don't have any pics yet! :(" : 
                this.props.currentUser.pics.map(pic => (
                    <article className="pic">
                        <div className="img-container">
                            <Link to={`/pics/${pic.id}`}>
                            <img src={pic.pic_url} 
                            alt="" key={pic.id}/>
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

export default connect(mapStateToProps, {getProfileFetch, deleteUser})(Profile);