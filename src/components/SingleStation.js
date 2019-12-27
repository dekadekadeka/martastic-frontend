import React, { Component } from 'react'
import { connect } from 'react-redux';
import defaultImg from '../images/404.jpg';
import { fetchStations, editLikes } from '../actions/stationActions';
import Comments from './Comments'
import CommentForm from '../components/CommentForm'
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md"

class SingleStation extends Component {

    componentDidMount(){
        this.props.fetchStations()
    }

    state = {
        liked: false,
        pending: true
    }

    addLikes = () => {
        this.props.editLikes(this.props.station)
        this.setState({liked: !this.state.liked, pending: false})
    }
    
    render() {
        console.log(this.props)
        return (
            <div className="single-station">
            <h1>{this.props.station.name}</h1>
            <img className="big-pic" src={{...this.props.station.pics[0]}.pic_url ? {...this.props.station.pics[0]}.pic_url : defaultImg } alt=""/>
            <div className="likes">
                <div className="heart" onClick={this.state.pending ? this.addLikes : null}>
                {this.state.liked ? <MdFavorite/> : <MdFavoriteBorder/>}
                </div>
            <h3>Likes: {this.props.station.likes}</h3>
            </div>
            <div className="ui comments">
            <h3 className="ui dividing header">Comments</h3>

            <Comments comments = {this.props.comments}/>

            <CommentForm item={this.props.station} type={"Station"} id={this.props.station.id}/>
            </div>
            </div>
        )
    }
}
function mapStateToProps(state, ownProps){
    let station = {id:'', name:'', slug:'', likes:'', address: '', coords: '', description: '', pics:[], users: [], comments:[]};
    const slug = ownProps.match.params.slug;
    if(state.stations.stations.length > 0){
        station = Object.assign({}, state.stations.stations.find(station => station.slug === slug))
    }
    return {station,
            comments: station.comments}
}

const mapDispatchToProps = dispatch => ({
    fetchStations: () => dispatch(fetchStations()),
    editLikes: (station) => dispatch(editLikes(station))
})

// const mapDispatchToProps = { fetchStations, editLikes }


export default connect(mapStateToProps, mapDispatchToProps)(SingleStation)