import React, { Component } from 'react';
import { connect } from 'react-redux';
import { randomPic } from '../actions/picActions';
import HomeDiv from '../components/HomeDiv'


class Home extends Component {
    componentDidMount(){
        this.props.randomPic()
    }

    render() {
        return (
            <HomeDiv img={this.props.pic.pic_url}>
                <div className="pic-info">
                    <h1>{{...this.props.pic.station}.name}</h1>
                    <h3>Photo by {{...this.props.pic.user}.name}</h3>
                </div>
            </HomeDiv>
        )
    }
} 

const mapStateToProps = state => ({
    pic: state.pics.pic
})

export default connect(mapStateToProps, {randomPic})(Home)