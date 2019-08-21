import React, { Component } from 'react'
import { connect } from 'react-redux';
import defaultImg from '../images/404.jpg';
import { fetchStations } from '../actions/stationActions';
import Comments from './Comments'
import CommentForm from '../components/CommentForm'

class SingleStation extends Component {
  
    componentDidMount(){
      this.props.fetchStations()
    }
    
    render() {
        return (
            <div className="single-station">
                <h1>{this.props.station.name}</h1>
                <img className="big-pic" src={{...this.props.station.pics[0]}.pic_url ? {...this.props.station.pics[0]}.pic_url : defaultImg } alt=""/>
            
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
    let station = {id:'', name:'', slug:'', rating:'', pics:[], users: [], comments:[]};
    const slug = ownProps.match.params.slug;
    if(state.stations.stations.length > 0){
        station = Object.assign({}, state.stations.stations.find(station => station.slug === slug))
    }
    return {station: station,
            comments: station.comments}
}



export default connect(mapStateToProps, { fetchStations })(SingleStation)