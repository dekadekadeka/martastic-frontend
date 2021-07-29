import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';

import { editUser } from '../actions/userActions';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { stations } from "./StationArray";

const UserEditForm = ({ user }) => {
  const [userEdit, setUserEdit] = useState({
    id: user.id,
    name: user.name,
    profile_pic_url: user.profile_pic_url,
    home_station: user.home_station,
    location: user.location,
    bio: user.bio,
  });

  const dispatch = useDispatch();

  const handleChange = event => {
    setUserEdit({
      ...userEdit,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    // TODO: fix this so it shows as soon as user edits
    // TODO: and so they don't have to refresh
    event.preventDefault();
    dispatch(editUser(userEdit));
  };

  return (
    <div className="user-edit">
      <div>
        <h1>Edit My Info</h1>
        <form onSubmit={handleSubmit}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Name"
              name='name'
              value={userEdit.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              select
              label="Home Station"
              name="home_station"
              value={userEdit.home_station}
              onChange={handleChange}
              fullWidth
              margin="normal"
            >
            {stations.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Neighborhood"
              name='location'
              value={userEdit.location}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Profile Pic URL"
              name='profile_pic_url'
              value={userEdit.profile_pic_url}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name='bio'
              label="Short Bio"
              multiline
              rowsMax="4"
              value={userEdit.bio}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <br/>
          <br/>
          <Grid container justify="center">
            <Button
              type="submit"
              variant="outlined"
              style={{color: '#0092D0', borderColor: '#0092D0'}}
            >
              Edit Me!
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  </div>
  );
};

export default UserEditForm;
