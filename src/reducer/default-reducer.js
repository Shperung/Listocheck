import {combineReducers} from 'redux';

import counterReducer from './counter-reducer.js';
import articles  from "./articles-reduser";

export default combineReducers({
  count: counterReducer,
  articles,
});