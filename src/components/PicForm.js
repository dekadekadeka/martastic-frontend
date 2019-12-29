import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPic } from '../actions/picActions'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

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
        // const pic = new FormData(e.target)
        const pic = {
            user_id: this.props.currentUser.id,
            station_id: this.state.station_id,
            pic_url: this.state.pic_url,
            likes: 0
        }
        this.props.createPic(pic)
    }

    stations = [
        {
        value: '1',
        label: 'Five Points'
        },
        {
        value: '2',
        label: 'Airport'
        },
        {
        value: '3',
        label: 'College Park'
        },
        {
        value: '4',
        label: 'Lindbergh Center'
        },
        {
        value: '5',
        label: 'Peachtree Center'
        },
        {
        value: '6',
        label: 'H. E. Holmes'
        },
        {
        value: '7',
        label: 'Kensington'
        },
        {
        value: '8',
        label: 'West End'
        },
        {
        value: '9',
        label: 'Arts Center'
        },
        {
        value: '10',
        label: 'North Springs'
        },
        {
        value: '11',
        label: 'North Avenue'
        },
        {
        value: '12',
        label: 'Indian Creek'
        },
        {
        value: '13',
        label: 'Midtown'
        },
        {
        value: '14',
        label: 'Avondale'
        },
        {
        value: '15',
        label: 'Doraville'
        },
        {
        value: '16',
        label: 'East Point'
        },
        {
        value: '17',
        label: 'Oakland City'
        },
        {
        value: '18',
        label: 'Georgia State'
        },
        {
        value: '19',
        label: 'Decatur'
        },
        {
        value: '20',
        label: 'Chamblee'
        },
        {
        value: '21',
        label: 'Lenox'
        },
        {
        value: '22',
        label: 'Dunwoody'
        },
        {
        value: '23',
        label: 'Inman Park/Reynoldstown'
        },
        {
        value: '24',
        label: 'Civic Center'
        },
        {
        value: '25',
        label: 'Brookhaven/Oglethorpe University'
        },
        {
        value: '26',
        label: 'Sandy Springs'
        },
        {
        value: '27',
        label: 'West Lake'
        },
        {
        value: '28',
        label: 'Buckhead'
        },
        {
        value: '29',
        label: 'Dome/GWCC/Philips/CNN'
        },
        {
        value: '30',
        label: 'Ashby'
        },
        {
        value: '31',
        label: 'Lakewood/Ft. McPherson'
        },
        {
        value: '32',
        label: 'Bankhead'
        },
        {
        value: '33',
        label: 'King Memorial'
        },
        {
        value: '34',
        label: 'Garnett'
        },
        {
        value: '35',
        label: 'Medical Center'
        },
        {
        value: '36',
        label: 'Vine City'
        },
        {
        value: '37',
        label: 'Edgewood/Candler Park'
        },
        {
        value: '38',
        label: 'East Lake'
        }
    ]


    render() {
        return (
            <div className="pic-form">
            <form onSubmit={this.onSubmit}>
            <Grid container spacing={5}>
                {!this.props.error? 
                (<Grid item xs={12} md={6}>
                <TextField label="Pic URL" 
                name='pic_url'
                value={this.state.pic_url}
                onChange={this.handleChange}
                fullWidth
                margin="normal"/>
                </Grid>)
                :(<Grid item xs={12} md={6}>
                <TextField label="Pic URL" 
                error
                helperText={this.props.error}
                name='pic_url'
                value={this.state.pic_url}
                onChange={this.handleChange}
                fullWidth
                margin="normal"/>
                </Grid>)
                }
                {/* <Grid item xs={12} md={4} align="center">
                    <br/>
                    <br/>
                    <input
                    accept="image/*"
                    name='pic_url'
                    onChange={this.handleChange}
                    type="file"/>
                </Grid> */}
                <Grid item xs={12} md={6}>
                    <TextField
                    select
                    label="Station"
                    name="station_id"
                    value={this.state.station_id}
                    onChange={this.handleChange}
                    fullWidth
                    margin="normal">
                    {this.stations.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                    ))}
                </TextField>
                    </Grid>
                <Grid container justify="center">
                    <button type="submit" className="ui blue basic button">
                    <i className="iconify icon:emojione-monotone:up-right-arrow icon-inline:false"></i> Add Pic
                    </button>
                </Grid>
                </Grid>
            </form>
            <br/>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser.currentUser,
    error: state.pics.error
})

export default connect(mapStateToProps, { createPic })(PicForm);