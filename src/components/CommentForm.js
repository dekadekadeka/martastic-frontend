import React,{ useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { createComment } from '../actions/commentActions'

const CommentForm = ({ type, id, currentUser }) => {
  const [content,setContent] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setContent(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault ();
    const comment = {
      user_id: currentUser.id,
      commentable_type: type,
      content,
      commentable_id: id,
    };
    dispatch(createComment(comment));
    setContent('');
  };

  return (
    <form className="ui reply form" onSubmit={onSubmit}>
      <div className="field">
        <TextField
          name="content"
          label="Add Comment"
          type="content"
          value={content}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </div>
      <Button
        type="submit"
        disabled={!content}
        variant="outlined"
      >
        {content ? 'Add Comment' : 'Write Something First'}
      </Button>
    </form>
  );
};

const mapStateToProps = state => ({
  currentUser: state.currentUser.currentUser,
});

export default connect(mapStateToProps,{ createComment })(CommentForm);
