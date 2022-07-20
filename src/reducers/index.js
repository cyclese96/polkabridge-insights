import { combineReducers } from "redux";
import newsReducers from "./news";


export default combineReducers({

  news: newsReducers,

});