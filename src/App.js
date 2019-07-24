import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchPics} from './actions/picActions'

import { Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Users from './pages/Users'
import Schedule from './components/Schedule'
import Stations from './pages/Stations'
import SingleStation from './components/SingleStation'
import Pics from './pages/Pics'
import SinglePic from './components/SinglePic'
import Login from './pages/Login'
import Error from './pages/Error'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import About from './pages/About'

import "./App.css"

class App extends Component {

componentDidMount(){
    this.props.fetchPics()
}

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
        <Route exact path="/pics/:id" component={SinglePic} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/profile" component={Profile} />
        <Route component={Error} />
        </Switch>
    </div>
    )
  }
}

export default connect(null, {fetchPics})(App);