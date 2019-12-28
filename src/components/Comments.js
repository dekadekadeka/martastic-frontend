import React from 'react';
import { FaRegFrown } from "react-icons/fa";

const Comments = ({comments}) => {
    return (
        <>
        {comments.map(comment => (
        <div className="comment"  key={comment.id}>
    <span className="avatar">
      {{...comment.user}.profile_pic_url === undefined ? <span className="sad"><FaRegFrown /></span>
      : <img src={{...comment.user}.profile_pic_url} alt="Yay Marta"/>}
    </span>
    <div className="content">
      {{...comment.user}.name === undefined? "[user deleted]" : <span className="author">{{...comment.user}.name}</span>}
      <div className="metadata">
        <span className="date">{{...comment.user}.home_station}</span>
      </div>
      <div className="text">
        {comment.content}
      </div>
    </div>
  </div>
    ))}
    </>
    )
}

export default Comments;
