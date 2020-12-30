import {applyMiddleware, combineReducers, createStore} from 'redux';
import postsReducer from './posts';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const reducer = combineReducers({posts: postsReducer});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
