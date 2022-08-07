import { combineReducers } from "redux";
import newsReducers from "./news";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";

export default combineReducers({
  alert,
  auth,
  news: newsReducers,
  profile: profile,
});
