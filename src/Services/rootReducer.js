import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import conceptReducer from './Concept/reducer';
import homeReducer from './Login/reducer';
import storeReducer from './Store/reducer';
import searchReducer from './Search/reducer';

const reducer = combineReducers({
  conceptReducer,
  homeReducer,
  storeReducer,
  searchReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
