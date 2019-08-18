import React, { Component } from 'react'
import Signup from './Signup'
import {connect} from 'react-redux';
import {userLoginFetch} from '../actions/authActions';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

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
        <div className="flexGrow: 1">
        <h1>Login</h1>
        {this.props.redirect}
      <form onSubmit={this.handleSubmit}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
            <TextField label="Username" 
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
            fullWidth
            margin="normal"/>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Password" 
            name='password'
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            fullWidth
            margin="normal"/>
          </Grid>
          <Grid container justify="center">
            <input type='submit' className="ui submit button"/>
          </Grid>
      </Grid>
      </form>
      <br />
      <br />
      <hr />
      <Signup history={this.props.history}/>
      </div>
      </div>
    )
  }
}
//yay!
const mapDispatchToProps = dispatch => ({
  userLoginFetch: (userInfo, history) => dispatch(userLoginFetch(userInfo, history))
});

export default connect(null, mapDispatchToProps)(Login);