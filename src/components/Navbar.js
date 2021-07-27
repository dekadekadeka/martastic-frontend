import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser.currentUser);

  const handleOpen = () => {
    setOpen(!open);
  }

  const handleClick = event => {
    event.preventDefault()
    // Remove the token from localStorage
    localStorage.removeItem("token");
    // Remove the user object from the Redux store
    dispatch(logoutUser());
  }

  return (
    <div className="navbar">
      <div className="nav-header">
        <button
          type="button"
          className="nav-btn"
          onClick={handleOpen}
        >
          {open ? <FaArrowAltCircleUp className="nav-icon"/> : <FaArrowAltCircleDown className="nav-icon"/>}
        </button>
      </div>
      <ul className={open ? "nav-links" : "nav-links show-nav"}>
        {currentUser.username && <Link to="/profile" className="profile-nav">My Profile</Link>}
        <span className="blue"><Link to="/home">Home</Link></span>
        <span className="blue"><Link to="/schedule">Schedule</Link></span>
        <span className="gold"><Link to="/stations">Stations</Link></span>
        <span className="gold"><Link to="/pics">All Pictures</Link></span>
        {currentUser.username ?
          <span className="orange" onClick={handleClick}><Link to="/">Log Out</Link></span> :
          <span className="orange"><Link to="/login">Log In</Link></span>
        }
        <span className="orange"><Link to="/about">About</Link></span>
      </ul>
    </div>
  );
};

export default Navbar;
