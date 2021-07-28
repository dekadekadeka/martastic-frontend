import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../actions/authActions';
import { config } from '../constants';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { stations } from "../components/StationArray";

const url = config.url.apiUrl;

const Signup = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    password: "",
    home_station: "",
    location: "",
    bio: "",
    profile_pic_url: `${url}/generic_profile.jpg`
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const error = useSelector(state => state.currentUser.error);

  const handleChange = event => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(createUser(newUser, history));
  };

  return (
    <div>
      <h1>Sign Up For An Account</h1>
      <h3>If you sign up, you can add pics, add comments, and make friends.</h3>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <TextField label="Name"
              error={error}
              name='name'
              value={newUser.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Username"
              error={error}
              name='username'
              value={newUser.username}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Password"
              error={error}
              name='password'
              type="password"
              value={newUser.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              select
              error={error}
              label="Home Station"
              name="home_station"
              value={newUser.home_station}
              onChange={handleChange}
              fullWidth
              margin="normal">
              {stations.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Neighborhood"
              error={error}
              name='location'
              value={newUser.location}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name='bio'
              label="Short Bio"
              error={error}
              helperText={error}
              multiline
              rowsMax="4"
              value={newUser.bio}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <br/>
          <br/>
          <Grid container justify="center">
            <Button type="submit"
              variant="outlined"
              style={{ color: '#FF7500', borderColor: '#FF7500' }}
            >
              One of Us!
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Signup;
