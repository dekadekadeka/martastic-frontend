import React, { Component } from 'react'
import Signup from './Signup'
import {connect} from 'react-redux';
import {userLoginFetch} from '../actions/authActions';

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userLoginFetch(this.state, this.props.history)
  }

  render() {
    return (
        <div className="log-in">
        <h1>Login</h1>
        {this.props.redirect}
      <form onSubmit={this.handleSubmit}
      className="ui large form">
        <div className="two fields">
        <div className="field">
        <label>Username</label>
        <input
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}/>
          </div>
          <div className="field">
        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}/>
          </div>
        </div>
        <input type='submit' className="ui submit button"/>
      </form>
      <hr />
      <Signup history={this.props.history}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: (userInfo, history) => dispatch(userLoginFetch(userInfo, history))
});

export default connect(null, mapDispatchToProps)(Login);