import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul className="nav-links">
                <span className="blue"><Link to="/">Home</Link></span>
                <span className="blue"><Link to="/schedule">Schedule</Link></span>
                <span className="gold"><Link to="/stations">Stations</Link></span>
                <span className="gold"><Link to="/pics">All Pictures</Link></span>
                <span className="orange"><Link to="/login">Log In</Link></span>
                <span className="orange"><Link to="/about">About</Link></span>
                </ul> 
            </div>
        )
    }
}
