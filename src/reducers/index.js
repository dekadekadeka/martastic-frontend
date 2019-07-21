import { combineReducers } from 'redux';
import scheduleReducer from './scheduleReducer';
import picReducer from './picReducer';

export default combineReducers({
    schedule: scheduleReducer,
    pics: picReducer
})