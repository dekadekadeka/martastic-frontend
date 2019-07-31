import { combineReducers } from 'redux';
import scheduleReducer from './scheduleReducer';
import picReducer from './picReducer';
import authReducer from './authReducer';
import stationReducer from './stationReducer';
import commentReducer from './commentReducer'
import userReducer from './userReducer'

export default combineReducers({
    schedule: scheduleReducer,
    pics: picReducer,
    currentUser: authReducer,
    stations: stationReducer,
    comments: commentReducer,
    user: userReducer
})