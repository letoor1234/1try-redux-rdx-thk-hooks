import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import movies from '../reducers/movies'
//combining all reducers into a single store of states
const reducers=combineReducers({
    movies
})

export default () =>{
    return{
        ...createStore(reducers, applyMiddleware(thunk))
    }
}