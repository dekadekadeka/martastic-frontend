import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editUser} from '../actions/userActions';

class EditForm extends Component {
  state = {
    id: this.props.user.id,
    name: this.props.user.name,
    username: this.props.user.username,
    profile_pic_url: "",
    home_station: this.props.user.home_station,
    location: this.props.user.location,
    bio: this.props.user.bio
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.editUser(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}
      className="ui equal width large form">
        <h1>Edit Your Info</h1>
        <div className="fields">
          <div className="field">
        <label>Name</label>
        <input
          name='name'
          placeholder='Name'
          value={this.state.name}
          onChange={this.handleChange}/>
          </div>
          <div className="field">
        <label>Username</label>
        <input
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}/>
          </div>
          </div>
          <div className="fields">
          <div className="field">
        <label>Profile Pic</label>
          <input
            name='profile_pic_url'
            placeholder='Profile Pic URL (optional)'
            value={this.state.profile_pic_url}
            onChange={this.handleChange}/>
            </div>
            {/* station dropdown */}
            <div className="field">
            <label>Home Station</label>
            <select className="ui fluid search selection dropdown"
            name="home_station"
            value={this.state.home_station}
            onChange={this.handleChange}>
            <option value="">Home Station</option>
            <option value="Five Points">Five Points</option>
            <option value="Airport">Airport</option>
            <option value="College Park">College Park</option>
            <option value="Lindbergh Center">Lindbergh Center</option>
            <option value="Peachtree Center">Peachtree Center</option>
            <option value="H. E. Holmes">H. E. Holmes</option>
            <option value="Kensington">Kensington</option>
            <option value="West End">West End</option>
            <option value="Arts Center">Arts Center</option>
            <option value="North Springs">North Springs</option>
            <option value="North Avenue">North Avenue</option>
            <option value="Indian Creek">Indian Creek</option>
            <option value="Midtown">Midtown</option>
            <option value="Avondale">Avondale</option>
            <option value="Doraville">Doraville</option>
            <option value="East Point">East Point</option>
            <option value="Oakland City">Oakland City</option>
            <option value="Georgia State">Georgia State</option>
            <option value="Decatur">Decatur</option>
            <option value="Chamblee">Chamblee</option>
            <option value="Lenox">Lenox</option>
            <option value="Dunwoody">Dunwoody</option>
            <option value="Inman Park/Reynoldstown">Inman Park/Reynoldstown</option>
            <option value="Civic Center">Civic Center</option>
            <option value="Brookhaven/Oglethorpe University">Brookhaven/Oglethorpe University</option>
            <option value="Sandy Springs">Sandy Springs</option>
            <option value="West Lake">West Lake</option>
            <option value="Buckhead">Buckhead</option>
            <option value="Dome/GWCC/Philips/CNN">Dome/GWCC/Philips/CNN</option>
            <option value="Ashby">Ashby</option>
            <option value="Lakewood/Ft. McPherson">Lakewood/Ft. McPherson</option>
            <option value="Bankhead">Bankhead</option>
            <option value="King Memorial">King Memorial</option>
            <option value="Garnett">Garnett</option>
            <option value="Medical Center">Medical Center</option>
            <option value="Vine City">Vine City</option>
            <option value="Edgewood/Candler Park">Edgewood/Candler Park</option>
            <option value="East Lake">East Lake</option>
            </select>
            </div>
            {/* end station dropdown */}
            <div className="field">
        <label>Neighborhood</label>
        <input
          name='location'
          placeholder='Neighborhood'
          value={this.state.location}
          onChange={this.handleChange}/>
          </div>
          </div>
          <label>Bio</label>
          <textarea
            name='bio'
            placeholder='Short Bio'
            value={this.state.bio}
            onChange={this.handleChange}/>
            <br/>
            <br/>
        <input type='submit' className="ui submit button"/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  editUser: (userInfo) => dispatch(editUser(userInfo))
})

export default connect(null, mapDispatchToProps)(EditForm);