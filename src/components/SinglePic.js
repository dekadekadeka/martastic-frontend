import React, { Component } from 'react'
import { connect } from 'react-redux';
import { editLikes, addFriend } from '../actions/picActions';
import Comments from './Comments'
import CommentForm from './CommentForm'
import Tooltip from '@material-ui/core/Tooltip';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
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

    addFriend = () => {
        const friend = {user_id: this.props.currentUser.id,
            friend_id: this.props.pic.user.id}
        this.props.addFriend(friend)
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
                <Tooltip
                title={
                    <>
                    <CardHeader
                        titleTypographyProps={{variant: 'h5'}}
                        subheaderTypographyProps={{variant: 'body1', color: '#fff'}}
                        avatar={
                        <Avatar 
                        style={{width: '7rem', height: '7rem',borderRadius: '4px'}} 
                        src={this.props.pic.user.profile_pic_url}/>
                        }
                        title={this.props.pic.user.name}
                        subheader={this.props.pic.user.bio}
                    />
                    <h4 style={{margin: '0px 0px 0px 10px'}}>Home Station: {this.props.pic.user.home_station}</h4>
                    <h4 style={{margin: '0px 0px 10px 10px'}}>Neighborhood: {this.props.pic.user.location}</h4>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem'}}>
                        <Button variant="outlined" 
                        color="primary" 
                        onClick={this.addFriend}>Add Friend
                        </Button>
                    </div>
                    </>
                }
                interactive
                >
                    <h3>Picture by {this.props.pic.user.name}</h3>
                </Tooltip>
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
    return {pic: pic,
        currentUser: state.currentUser.currentUser}
}

const mapDispatchToProps = dispatch => ({
    editLikes: (pic) => dispatch(editLikes(pic)),
    addFriend: (friend) => dispatch(addFriend(friend))
})

export default connect(mapStateToProps, mapDispatchToProps)(SinglePic)