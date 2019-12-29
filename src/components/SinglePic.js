import React, { Component } from 'react'
import { connect } from 'react-redux';
import { editLikes } from '../actions/picActions';
import Comments from './Comments'
import CommentForm from './CommentForm'
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md"

class SinglePic extends Component {

    state = {
        liked: false,
        pending: true
    }

    addLikes = () => {
        this.props.editLikes(this.props.pic)
        this.setState({liked: !this.state.liked, pending: false})
    }

  render() {
        return (
            <div className="single-pic">
            <img className="big-pic" src={this.props.pic.pic_url} alt=""/>
            <div className="likes">
                <div className="pics-heart" onClick={this.state.pending ? this.addLikes : null}>
                {this.state.liked ? <MdFavorite/> : <MdFavoriteBorder/>}
                <h3>Likes: {this.props.pic.likes}</h3>
            </div>
            </div>
            <div className="ui comments">
            <h3 className="ui dividing header">Comments</h3>
            <Comments comments = {this.props.pic.comments}/>
            {localStorage.token ? 
            <CommentForm item={this.props.pic} type={"Pic"} id={this.props.pic.id}/>
            : null }
            </div>
        </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    let pic = {id:'', user_id:'', station_id:'', pic_url:'', likes:'', user:{}, station: {}, comments:[]};
    const picId = ownProps.match.params.id;
    if(state.pics.pics.length > 0){
        pic = Object.assign({}, state.pics.pics.find(pic => pic.id === parseInt(picId)))
    }
    return {pic: pic}
}

const mapDispatchToProps = dispatch => ({
    editLikes: (pic) => dispatch(editLikes(pic))
})

export default connect(mapStateToProps, mapDispatchToProps)(SinglePic)