import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {logoutUser} from '../actions/authActions';
import {FaArrowAltCircleDown} from 'react-icons/fa'

class Navbar extends Component {

    state={
        isOpen: false
    }

    handleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleClick = event => {
        event.preventDefault()
        // Remove the token from localStorage
        localStorage.removeItem("token")
        // Remove the user object from the Redux store
        this.props.logoutUser()
    }

    render() {
        console.log("Made with 💙💛🧡 by Deka")
        console.log("https://github.com/dekadekadeka/")
        console.log("Have a MARTASTIC day!! 🚇")
        return (
            <div className="navbar">
                    <div className="nav-header">
                    <button type="button" className="nav-btn"
                    onClick={this.handleOpen}>
                    <FaArrowAltCircleDown className="nav-icon"/>
                    </button>
                    </div>
                <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                    {this.props.currentUser.username ? 
                    <Link to="/profile" className="profile-nav">My Profile</Link>
                    : null }
                    <span className="blue"><Link to="/">Home</Link></span>
                    <span className="blue"><Link to="/schedule">Schedule</Link></span>
                    <span className="gold"><Link to="/stations">Stations</Link></span>
                    <span className="gold"><Link to="/pics">All Pictures</Link></span>
                    {this.props.currentUser.username ? 
                    <span className="orange" onClick={this.handleClick}>
                        <Link to="/">Log Out</Link></span>
                    : <span className="orange"><Link to="/login">Log In</Link></span>
                    }
                    <span className="orange"><Link to="/about">About</Link></span>
                </ul> 
            </div>
        )
    }
}
const mapStateToProps = state => ({
    currentUser: state.currentUser.currentUser
})

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);