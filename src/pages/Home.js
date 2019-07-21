import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPics } from '../actions/picActions';
import HomeDiv from '../components/HomeDiv'


class Home extends Component {
    componentDidMount(){
        this.props.fetchPics()
    }

    render() {
        return (
            <HomeDiv>
                the big div works
            </HomeDiv>
        )
    }
}

const mapStateToProps = state => ({
    pics: state.pics.pics
})

export default connect(mapStateToProps, {fetchPics})(Home)