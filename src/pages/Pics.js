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
    <div className="all-pics">
      <section className="picslist">
        <div className="picslist-center">
          <PicList pics={pics} />
        </div>
      </section>
      {currentUser && (
        <React.Fragment>
          <h1 style={{marginLeft: '5rem'}}>Add A Pic</h1>
          <PicForm />
        </React.Fragment>
      )}
    </div>
  );
}

export default Pics;
