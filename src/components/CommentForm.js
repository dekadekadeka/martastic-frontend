import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createComment  } from '../actions/commentActions'


class CommentForm extends Component {

    // componentDidMount(){
    //     this.props.fetchComments()
    // }
    state = {
        content: '',
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
        const comment = {
            user_id: this.props.currentUser.id,
            commentable_type: this.props.type,
            content: this.state.content,
            commentable_id: this.props.id
        }
        this.props.createComment(comment)
        e.target.reset();
    }
    render() {
        return (
            <form className="ui reply form" onSubmit={this.handleSubmit}>
                <div className="field">
                <textarea type="content" name="content" className="form-control"
                value={this.state.content} onChange={this.handleChange}/>
                </div>
                <button type='submit' 
                className="ui blue labeled submit icon button">
                <i className="icon edit"></i>Add Comment</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser.currentUser
})

export default connect(mapStateToProps, { createComment })(CommentForm);