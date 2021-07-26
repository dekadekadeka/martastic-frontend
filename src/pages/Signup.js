import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createUser} from '../actions/authActions';
import { config }   from '../constants';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { stations } from "../components/StationArray";

const url = config.url.apiUrl;

class Signup extends Component {
  state = {
    name: "",
    username: "",
    password: "",
    home_station: "",
    location: "",
    bio: "",
    profile_pic_url: `${url}/generic_profile.jpg`
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.createUser(this.state, this.props.history)
  };

  render() {
    return (
      <div>
      <h1>Sign Up For An Account</h1>
      <h3>If you sign up, you can add pics, add comments, and make friends.</h3>
        <form onSubmit={this.handleSubmit}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
        {!this.props.error?
          (<TextField label="Name"
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
          fullWidth
          margin="normal"/>)
          :(<TextField label="Name"
          error
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
          fullWidth
          margin="normal"/>)
        }
        </Grid>
        <Grid item xs={12} md={4}>
        {!this.props.error?
          (<TextField label="Username"
          name='username'
          value={this.state.username}
          onChange={this.handleChange}
          fullWidth
          margin="normal"/>)
          :(<TextField label="Username"
          error
          name='username'
          value={this.state.username}
          onChange={this.handleChange}
          fullWidth
          margin="normal"/>)
        }
        </Grid>
        <Grid item xs={12} md={4}>
        {!this.props.error?
        (<TextField label="Password"
          name='password'
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          fullWidth
          margin="normal"/>)
          :(<TextField label="Password"
          error
          name='password'
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          fullWidth
          margin="normal"/>)
        }
        </Grid>
        <Grid item xs={12} md={6}>
        {!this.props.error?
          (<TextField
          select
          label="Home Station"
          name="home_station"
          value={this.state.home_station}
          onChange={this.handleChange}
          fullWidth
          margin="normal">
          {stations.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>)
        :(<TextField
          select
          error
          label="Home Station"
          name="home_station"
          value={this.state.home_station}
          onChange={this.handleChange}
          fullWidth
          margin="normal">
          {this.stations.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>)
        }
        </Grid>
        <Grid item xs={12} md={6}>
        {!this.props.error?
          (<TextField label="Neighborhood"
          name='location'
          value={this.state.location}
          onChange={this.handleChange}
          fullWidth
          margin="normal"/>)
          :(<TextField label="Neighborhood"
          error
          name='location'
          value={this.state.location}
          onChange={this.handleChange}
          fullWidth
          margin="normal"/>)
        }
        </Grid>
        <Grid item xs={12}>
        {!this.props.error?
          (<TextField
          name='bio'
          label="Short Bio"
          multiline
          rowsMax="4"
          value={this.state.bio}
          onChange={this.handleChange}
          fullWidth
          margin="normal"/>)
          :(<TextField
            name='bio'
            label="Short Bio"
            error
            helperText={this.props.error}
            multiline
            rowsMax="4"
            value={this.state.bio}
            onChange={this.handleChange}
            fullWidth
            margin="normal"/>)
          }
        </Grid>
            <br/>
            <br/>
        <Grid container justify="center">
          <Button type="submit"
            variant="outlined"
            style={{color: '#FF7500', borderColor: '#FF7500'}}>
              One of Us!
          </Button>
        </Grid>
    </Grid>
      </form>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createUser: (userInfo, history) => dispatch(createUser(userInfo, history))
})

const mapStateToProps = state => ({
  error: state.currentUser.error
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
