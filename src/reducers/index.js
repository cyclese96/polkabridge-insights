import { combineReducers } from "redux";
import newsReducers from "./news";
import alert from './alert';
import auth from './auth';

export default combineReducers({
  alert,
  auth,
  news: newsReducers,

});