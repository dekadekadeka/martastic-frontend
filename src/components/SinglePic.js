import React, { Component } from 'react'
import { connect } from 'react-redux';
import CommentForm from './CommentForm'
import { FaRegFrown } from "react-icons/fa";

class SinglePic extends Component {
    render() {
        const allComments = this.props.pic.comments.map(comment => (
            <div className="comment">
    <span className="avatar">
    {{...comment.user}.profile_pic_url === undefined ? <span className="sad"><FaRegFrown /></span>
      : <img src={{...comment.user}.profile_pic_url} alt="Yay Marta"/>}
    </span>
    <div className="content">
    {{...comment.user}.name === undefined? "[user deleted]" : 
    <span className="author">{{...comment.user}.name}</span>}
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
            <div className="single-pic">
              <img className="big-pic" src={this.props.pic.pic_url} alt=""/>
            <div className="ui comments">
            <h3>Likes: {this.props.pic.likes}</h3>
            <h3 className="ui dividing header">Comments</h3>

            {allComments}

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