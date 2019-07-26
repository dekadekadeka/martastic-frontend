import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPic } from '../actions/picActions'

class PicForm extends Component {
    state = {
        station_id: '',
        pic_url: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        const pic = {
            user_id: this.props.currentUser.id,
            station_id: this.state.station_id,
            pic_url: this.state.pic_url,
            rating: 1
        }
        this.props.createPic(pic)
        console.log("submit", pic)
    }
    render() {
        return (
            <form className="ui equal width form" onSubmit={this.onSubmit}>
                <div className="fields">
                <div className="field">
                    <label>Pic URL</label>
                    <input
                    name='pic_url'
                    placeholder='Pic URL (be nice please)'
                    value={this.state.pic_url}
                    onChange={this.handleChange}/>
                </div>
                {/* station dropdown */}
            <div className="field">
            <label>Station</label>
            <select className="ui fluid search selection dropdown"
            name="station_id"
            value={this.state.station_id}
            onChange={this.handleChange}>
            <option value="1">Five Points</option>
            <option value="2">Airport</option>
            <option value="3">College Park</option>
            <option value="4">Lindbergh Center</option>
            <option value="5">Peachtree Center</option>
            <option value="6">H. E. Holmes</option>
            <option value="7">Kensington</option>
            <option value="8">West End</option>
            <option value="9">Arts Center</option>
            <option value="10">North Springs</option>
            <option value="11">North Avenue</option>
            <option value="12">Indian Creek</option>
            <option value="13">Midtown</option>
            <option value="14">Avondale</option>
            <option value="15">Doraville</option>
            <option value="16">East Point</option>
            <option value="17">Oakland City</option>
            <option value="18">Georgia State</option>
            <option value="19">Decatur</option>
            <option value="20">Chamblee</option>
            <option value="21">Lenox</option>
            <option value="22">Dunwoody</option>
            <option value="23">Inman Park/Reynoldstown</option>
            <option value="24">Civic Center</option>
            <option value="25">Brookhaven/Oglethorpe University</option>
            <option value="26">Sandy Springs</option>
            <option value="27">West Lake</option>
            <option value="28">Buckhead</option>
            <option value="29">Dome/GWCC/Philips/CNN</option>
            <option value="30">Ashby</option>
            <option value="31">Lakewood/Ft. McPherson</option>
            <option value="32">Bankhead</option>
            <option value="33">King Memorial</option>
            <option value="34">Garnett</option>
            <option value="35">Medical Center</option>
            <option value="36">Vine City</option>
            <option value="37">Edgewood/Candler Park</option>
            <option value="38">East Lake</option>
            </select>
            </div>
            {/* end station dropdown */}
            </div>
                <button type="submit" className="ui blue labeled submit icon button">
                <i className="icon edit"></i> Add Pic
                </button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser.currentUser
})

export default connect(mapStateToProps, { createPic })(PicForm);