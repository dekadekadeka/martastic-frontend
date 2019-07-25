import React, { Component } from 'react'
import { connect } from 'react-redux';

class SinglePic extends Component {
    render() {
        const allComments = this.props.pic.comments.map(comment => (
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
            <div className="single-pic">
                <img className="big-pic" src={this.props.pic.pic_url} alt=""/>
            
            <div className="ui comments">
            <h3 className="ui dividing header">Comments</h3>

            {allComments}

            <form className="ui reply form">
                <div className="field">
                <textarea></textarea>
                </div>
                <div className="ui blue labeled submit icon button">
                <i className="icon edit"></i> Add Reply
                </div>
            </form>
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