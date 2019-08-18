import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createUser} from '../actions/authActions';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

class Signup extends Component {
  state = {
    name: "",
    username: "",
    password: "",
    home_station: "",
    location: "",
    bio: "",
    profile_pic_url: "http://localhost:3000/generic_profile.jpg"
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchUser(this.state, this.props.history)
  }

  stations = [
    {
      value: 'Five Points',
      label: 'Five Points'
    },
    {
      value: 'Airport',
      label: 'Airport'
    },
    {
      value: 'College Park',
      label: 'College Park'
    },
    {
      value: 'Lindbergh Center',
      label: 'Lindbergh Center'
    },
    {
      value: 'Peachtree Center',
      label: 'Peachtree Center'
    },
    {
      value: 'H. E. Holmes',
      label: 'H. E. Holmes'
    },
    {
      value: 'Kensington',
      label: 'Kensington'
    },
    {
      value: 'West End',
      label: 'West End'
    },
    {
      value: 'Arts Center',
      label: 'Arts Center'
    },
    {
      value: 'North Springs',
      label: 'North Springs'
    },
    {
      value: 'North Avenue',
      label: 'North Avenue'
    },
    {
      value: 'Indian Creek',
      label: 'Indian Creek'
    },
    {
      value: 'Midtown',
      label: 'Midtown'
    },
    {
      value: 'Avondale',
      label: 'Avondale'
    },
    {
      value: 'Doraville',
      label: 'Doraville'
    },
    {
      value: 'East Point',
      label: 'East Point'
    },
    {
      value: 'Oakland City',
      label: 'Oakland City'
    },
    {
      value: 'Georgia State',
      label: 'Georgia State'
    },
    {
      value: 'Decatur',
      label: 'Decatur'
    },
    {
      value: 'Chamblee',
      label: 'Chamblee'
    },
    {
      value: 'Lenox',
      label: 'Lenox'
    },
    {
      value: 'Dunwoody',
      label: 'Dunwoody'
    },
    {
      value: 'Inman Park/Reynoldstown',
      label: 'Inman Park/Reynoldstown'
    },
    {
      value: 'Civic Center',
      label: 'Civic Center'
    },
    {
      value: 'Brookhaven/Oglethorpe University',
      label: 'Brookhaven/Oglethorpe University'
    },
    {
      value: 'Sandy Springs',
      label: 'Sandy Springs'
    },
    {
      value: 'West Lake',
      label: 'West Lake'
    },
    {
      value: 'Buckhead',
      label: 'Buckhead'
    },
    {
      value: 'Dome/GWCC/Philips/CNN',
      label: 'Dome/GWCC/Philips/CNN'
    },
    {
      value: 'Ashby',
      label: 'Ashby'
    },
    {
      value: 'Lakewood/Ft. McPherson',
      label: 'Lakewood/Ft. McPherson'
    },
    {
      value: 'Bankhead',
      label: 'Bankhead'
    },
    {
      value: 'King Memorial',
      label: 'King Memorial'
    },
    {
      value: 'Garnett',
      label: 'Garnett'
    },
    {
      value: 'Medical Center',
      label: 'Medical Center'
    },
    {
      value: 'Vine City',
      label: 'Vine City'
    },
    {
      value: 'Edgewood/Candler Park',
      label: 'Edgewood/Candler Park'
    },
    {
      value: 'East Lake',
      label: 'East Lake'
    }
  ]

  render() {
    return (
      <div className="flexGrow: 1">
      <h1>Sign Up For An Account</h1>
        <form onSubmit={this.handleSubmit}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <TextField label="Name" 
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
          fullWidth
          margin="normal"/>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField label="Username" 
          name='username'
          value={this.state.username}
          onChange={this.handleChange}
          fullWidth
          margin="normal"/>
        </Grid>
        <Grid item xs={12} md={4}>
        <TextField label="Password" 
          name='password'
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          fullWidth
          margin="normal"/>
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField
        select
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
      </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Neighborhood" 
          name='location'
          value={this.state.location}
          onChange={this.handleChange}
          fullWidth
          margin="normal"/>
        </Grid>
        <Grid item xs={12}>
          <TextField
          name='bio'
          label="Short Bio"
          multiline
          rowsMax="4"
          value={this.state.bio}
          onChange={this.handleChange}
          fullWidth
          margin="normal"/>
        </Grid>
            <br/>
            <br/>
        <Grid container justify="center">
          <input type='submit' className="ui submit button"/>
        </Grid>
    </Grid>
      </form>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: (userInfo, history) => dispatch(createUser(userInfo, history))
})

export default connect(null, mapDispatchToProps)(Signup);