import React, { Component } from 'react'
import { connect } from 'react-redux';
import defaultImg from '../images/404.jpg';
import { fetchStations } from '../actions/stationActions';
import CommentForm from '../components/CommentForm'

class SingleStation extends Component {
  
    componentDidMount(){
        this.props.fetchStations()
    }
    render() {
        const allComments = this.props.station.comments.map(comment => (
            <div className="comment">
    <span className="avatar">
      <img src={{...comment.user}.profile_pic_url} alt="Yay Marta"/>
    </span>
    <div className="content">
      <span className="author">{{...comment.user}.name}</span>
      <div className="metadata">
        <span className="date">{{...comment.user}.home_station}</span>
      </div>
      <div className="text">
        {comment.content}
      </div>
    </div>
  </div>
        ))
        return (
            <div className="single-station">
                <h1>{this.props.station.name}</h1>
                <img className="big-pic" src={{...this.props.station.pics[0]}.pic_url ? {...this.props.station.pics[0]}.pic_url : defaultImg } alt=""/>
            
            <div className="ui comments">
            <h3 className="ui dividing header">Comments</h3>

            {allComments}

            <CommentForm item={this.props.station} type={"Station"} id={this.props.station.id}/>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    let station = {id:'', name:'', slug:'', rating:'', pics:[], users: [], comments:[]};
    const slug = ownProps.match.params.slug;
    if(state.stations.stations.length > 0){
        station = Object.assign({}, state.stations.stations.find(station => station.slug === slug))
    }
    return {station: station}
}

export default connect(mapStateToProps, { fetchStations })(SingleStation)