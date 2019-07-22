import React, { Component } from 'react'


class Profile extends Component {
    render() {
        console.log(this.props.currentUser)
        return (
            <div className="profile">
                Profile
            </div>
        )
    }
}


export default Profile
