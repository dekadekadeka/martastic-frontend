import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getProfileFetch} from '../actions/authActions';
import genericProfile from '../images/generic_profile.jpg'
import UserEditForm from '../components/UserEditForm'

class Profile extends Component {

    render() {
        console.log(this.props.currentUser)
        return (
            <div className="profile">
                <h1>My Profile</h1>
                <div className="ui items">
                <div className="item">
                    <div className="image">
                    <img src={this.props.currentUser.profile_pic_url ? this.props.currentUser.profile_pic_url : genericProfile} 
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
                <UserEditForm user={this.props.currentUser}/>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    currentUser: state.currentUser.currentUser
})

export default connect(mapStateToProps, {getProfileFetch})(Profile);