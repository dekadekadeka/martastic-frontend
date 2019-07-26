import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createComment } from '../actions/commentActions'

class CommentForm extends Component {
    state = {
        content: '',
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        const comment = {
            user_id: this.props.currentUser.id,
            commentable_type: this.props.type,
            content: this.state.content,
            commentable_id: this.props.id
        }
        this.props.createComment(comment)
        console.log("submit", comment)
    }
    render() {
        return (
            <form className="ui reply form" onSubmit={this.onSubmit}>
                <div className="field">
                <textarea type="content" name="content"
                value={this.state.content} onChange={this.onChange}></textarea>
                </div>
                <button type="submit" className="ui blue labeled submit icon button">
                <i className="icon edit"></i> Add Reply
                </button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser.currentUser
})

export default connect(mapStateToProps, { createComment })(CommentForm);