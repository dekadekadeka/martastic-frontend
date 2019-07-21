import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createUser} from '../actions/authActions';

class Signup extends Component {
  state = {
    name: "",
    username: "",
    password: "",
    profile_pic_url: "",
    home_station: "",
    location: "",
    bio: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchUser(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up For An Account</h1>

        <label>Name</label>
        <input
          name='name'
          placeholder='Name'
          value={this.state.name}
          onChange={this.handleChange}
          /><br/>

        <label>Username</label>
        <input
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}
          /><br/>

        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
          /><br/>

        <label>Profile Pic</label>
          <input
            name='profile_pic_url'
            placeholder='Profile Pic URL'
            value={this.state.profile_pic_url}
            onChange={this.handleChange}
            /><br/>

        <label>Home Station</label>
          <input
            name='home_station'
            placeholder='Home Station'
            value={this.state.home_station}
            onChange={this.handleChange}
            /><br/>

        <label>Neighborhood</label>
        <input
          name='location'
          placeholder='Neighborhood'
          value={this.state.location}
          onChange={this.handleChange}
          /><br/>

          <label>Bio</label>
          <textarea
            name='bio'
            placeholder='Short Bio'
            value={this.state.bio}
            onChange={this.handleChange}
            /><br/>

        <input type='submit'/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: userInfo => dispatch(createUser(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);