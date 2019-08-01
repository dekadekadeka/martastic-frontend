import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchPics} from './actions/picActions'
import {initState} from './actions/authActions'

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
    if (localStorage.token){
      this.props.initState()
    }
}

  render() {
    console.log("Made with 💙💛🧡 by Deka")
    console.log("https://github.com/dekadekadeka/")
    console.log("Have a MARTASTIC day!! 🚇")
  return (
    <div>
      <Navbar />
      {localStorage.token && !this.props.user_id ? null :
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
      }
    </div>
    )
  }
}

let mapStateToProps = state => ({user_id: state.currentUser.currentUser.id })

export default connect(mapStateToProps, {initState, fetchPics})(App);