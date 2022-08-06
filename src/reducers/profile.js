import { CREATE_PROFILE } from "../actions/types";
  
  const initalState = {
    news: [],
    singleNews: null,
  
  };
  
  export default function (state = initalState, action) {
    switch (action.type) {
      case CREATE_PROFILE:
        return {
          ...state,
          news: action.payload,
        };


      default:
        return state;
    }
  }