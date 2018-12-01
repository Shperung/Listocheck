import {combineReducers} from 'redux';

import counterReducer from './counter-reducer.js';
import articles  from "./articles-reduser";
import filters  from "./filters-reduser";

export default combineReducers({
  count: counterReducer,
  articles,
  filters
});