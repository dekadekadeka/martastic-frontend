import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initState } from './actions/authActions'

import { Redirect, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'

import Schedule from './components/Schedule'
import Stations from './pages/Stations'
import Cobb from './pages/Cobb'
import Pics from './pages/Pics'
import Login from './pages/Login'
import Error from './pages/Error'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import About from './pages/About'

import "./App.css"

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initState());
  }, [dispatch]);

  console.log ("Made with 💙💛🧡 by Deka");
  console.log ("https://github.com/dekadekadeka/");
  console.log ("Have a MARTASTIC day!! 🚇");
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Schedule} />
        <Route exact path="/schedule/" component={Schedule} />
        <Route exact path="/stations/" component={Stations} />
        <Route exact path="/pics/" component={Pics} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/cobb" component={Cobb} />
        <Redirect from="/cobbme" to="/cobb" />
        <Route component={Error} />
      </Switch>
    </div>
  );
};

export default App;
