import { FETCH_PICS } from './types';

export const fetchPics = () => dispatch => {
    fetch("http://localhost:3000/pics")
    .then(resp => resp.json())
    .then(pics =>
        dispatch({
            type: FETCH_PICS,
            payload: pics
        })
    );
}