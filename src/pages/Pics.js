import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PicList from '../components/PicList'
import PicForm from '../components/PicForm'
import { fetchPics } from "../actions/picActions";

const Pics = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPics());
  }, [dispatch]);

  const currentUser = useSelector(state => state.currentUser.currentUser);
  const pics = useSelector(state => state.pics.pics);

  return (
    <React.Fragment>
      <div className="pics-station-list">
        <PicList pics={pics} />
      </div>
      {currentUser && (
        <React.Fragment>
          <h1 style={{marginLeft: '5rem'}}>Add A Pic</h1>
          <PicForm />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Pics;
