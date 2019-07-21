import { FETCH_PICS, RANDOM_PIC } from './types';
import { sample } from 'lodash';

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

export const randomPic = () => dispatch => {
    fetch("http://localhost:3000/pics")
    .then(resp => resp.json())
    .then(pic => 
        dispatch({
            type: RANDOM_PIC,
            payload: sample(pic)
        })
    );
}