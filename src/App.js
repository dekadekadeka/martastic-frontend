import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Users from './pages/Users'
import Schedule from './components/Schedule'
import Stations from './pages/Stations'
import SingleStation from './pages/SingleStation'
import Pics from './pages/Pics'
import Login from './pages/Login'
import Error from './pages/Error'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import About from './pages/About'

import "./App.css"

export default class App extends Component {
  render() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users/" component={Users} />
        <Route exact path="/schedule/" component={Schedule} />
        <Route exact path="/stations/" component={Stations} />
        <Route exact path="/stations/:slug" component={SingleStation} />
        <Route exact path="/pics/" component={Pics} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signup" component={Signup} />

        {/* <Route exact path="/profile"
        render={() => (loggedIn ? <Profile /> : <Redirect to="/login" />)} /> */}
        <Route component={Error} />
        </Switch>
    </div>
    )
  }
}
