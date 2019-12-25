import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
///BELOW IS JUST A BACKUP!!! in case the real Marta API goes down///
//please uncomment below//
//and comment out the blank initialState//

// import backup from '../src/backup-api.json'

// const initialState = {
//     schedule: {
//         trains: backup,
//         sortedTrains: backup
//     }
// };

const initialState = {}

const middleware = [thunk];

const store = createStore(rootReducer,
    initialState,
    compose(
    applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;