import React, { Component } from 'react'
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { createComment } from '../actions/commentActions'


class CommentForm extends Component {

    state = {
        content: '',
    }
    

    handleChange = (e) => {
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
        this.setState({ content: '' })
    }
    
    render() {
        return (
            <form className="ui reply form" onSubmit={this.onSubmit}>
                <div className="field">
                {/* <textarea type="content" name="content"
                value={this.state.content} onChange={this.handleChange}/> */}
                    <TextField 
                    name="content"
                    type="content"
                    value={this.state.content}
                    onChange={this.handleChange}
                    fullWidth
                    margin="normal"/>
                </div>
                {/* <button type="submit" 
                className="ui blue basic button"
                >
                <i className="iconify icon:emojione-monotone:up-right-arrow icon-inline:false"></i>Add Comment</button> */}
                {this.state.content === '' ? 
                <Button variant="outlined" disabled >Write Something First</Button>
                : <Button type="submit" variant="outlined">Add Comment</Button>}
            </form>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser.currentUser
})

export default connect(mapStateToProps, { createComment })(CommentForm);