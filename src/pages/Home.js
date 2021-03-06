import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRandomPic } from '../reducers/picReducer';
import HomeDiv from '../components/HomeDiv';
import Schedule from '../components/Schedule'


class Home extends Component {


    render(){
        if(this.props.pic === undefined) return <Schedule />
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

const mapStateToProps = (state) => {
    return {
        pic: getRandomPic(state)
    }
}

export default connect(mapStateToProps, {getRandomPic})(Home)