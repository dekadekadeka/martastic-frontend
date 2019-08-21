import React, { Component } from 'react'
import { connect } from 'react-redux';
import Comments from './Comments'
import CommentForm from './CommentForm'


class SinglePic extends Component {
  render() {
        return (
            <div className="single-pic">
              <img className="big-pic" src={this.props.pic.pic_url} alt=""/>
            <div className="ui comments">
            <h3>Likes: {this.props.pic.likes}</h3>
            <h3 className="ui dividing header">Comments</h3>

            <Comments comments = {this.props.pic.comments}/>

            <CommentForm item={this.props.pic} type={"Pic"} id={this.props.pic.id}/>
            </div>
        </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    let pic = {id:'', user_id:'', station_id:'', pic_url:'', rating:'', user:{}, station: {}, comments:[]};
    const picId = ownProps.match.params.id;
    if(state.pics.pics.length > 0){
        pic = Object.assign({}, state.pics.pics.find(pic => pic.id === parseInt(picId)))
    }
    return {pic: pic}
}

export default connect(mapStateToProps)(SinglePic)