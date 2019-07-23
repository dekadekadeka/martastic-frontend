import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getProfileFetch} from '../actions/authActions';
import genericProfile from '../images/generic_profile.jpg'

class Profile extends Component {

componentDidMount = () => {
    this.props.getProfileFetch()
}

    render() {
        console.log(this.props.currentUser)
        return (
            <div className="profile">
                <h1>My Profile</h1>
                    {/* <Item.Group>
                    <Item>
                    <Item.Image size='medium' src={this.props.currentUser.profile_pic_url? 
                        this.props.currentUser.profile_pic_url : genericProfile} />
                    <Item.Content>
                        <Item.Header>{this.props.currentUser.name}</Item.Header>
                        <Item.Meta>About Me</Item.Meta>
                        <Item.Description>
                        <p class="bio">{this.props.currentUser.bio}</p>
                        <p>Location: {this.props.currentUser.location}</p>
                        <p>Home Station: {this.props.currentUser.home_station}</p>
                        </Item.Description>
                    </Item.Content>
                    </Item>
            </Item.Group> */}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    currentUser: state.currentUser.currentUser
})

export default connect(mapStateToProps, {getProfileFetch})(Profile);