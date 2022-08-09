import {
  GET_ALL_NEWS,
   GET_SINGLE_NEWS,
   GET_USERS_NEWS, 
   ADD_POSTS,
   
  } from "../actions/types";
  
  const initalState = {
    news: [],
    singleNews: null,
  
  };
  
  export default function (state = initalState, action) {
    switch (action.type) {
      case GET_ALL_NEWS:
        return {
          ...state,
          news: action.payload,
        };
        case GET_SINGLE_NEWS:
        return {
          ...state,
          singleNews: action.payload,
        };
        case ADD_POSTS:
          return {
            ...state,
           posts : action.payload
          };
          case GET_USERS_NEWS:
            return {
              ...state,
             news : action.payload
            };

      default:
        return state;
    }
  }