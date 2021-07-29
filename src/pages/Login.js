import React, { useState } from 'react'
import Signup from './Signup'
import { useDispatch, useSelector } from 'react-redux';
import { userLoginFetch } from '../actions/authActions';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });

  const message = useSelector(state => state.currentUser.message);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = event => {
    setLoginUser({
      ...loginUser,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(userLoginFetch(loginUser, history));
  }

  return (
    <div className="log-in">
      <div className="flexGrow: 1">
      <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <TextField label="Username"
                error={message}
                helperText={message}
                name='username'
                value={loginUser.username}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Password"
              error={message}
              name='password'
              type="password"
              value={loginUser.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid container justify="center">
            <Button
              type="submit"
              variant="outlined"
              style={{color: '#0092D0', borderColor: '#0092D0'}}
            >
              Come on In!
            </Button>
          </Grid>
        </Grid>
      </form>
      <br />
      <br />
      <hr />
      <Signup history={history}/>
      </div>
    </div>
  );
};
// yay!

export default Login;
