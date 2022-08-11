import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_ALL_NEWS,
  GET_SINGLE_NEWS,
  GET_ERRORS,
  GET_USERS_NEWS,
  ADD_POSTS,
} from "./types";


export const globalHeaders = {
  "Content-Type": "application/json;charset=UTF-8",
  "Access-Control-Allow-Origin": "*",
};


const baseUrl = "http://localhost:5001"
//GET all characters of owner
export const getAllNews = (category, page_number) => async (dispatch) => {

  let response = await axios
    .get(`${baseUrl}/post_apis/posts/${category}/${page_number}`)
    .then((res) => {
      console.log('all news ', res.data)
      dispatch({
        type: GET_ALL_NEWS,
        payload: res.data,
      });
      return res.data;
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
      return false;
    });

  return response;
};


export const getUserPost = (id) => async (dispatch) => {

  const header = { headers: { ...globalHeaders,  'Content-Type': 'multipart/form-data',  "x-auth-token": localStorage.getItem('token') } }
  let response = await axios
    .get(`${baseUrl}/post_apis/user-posts/:page_number`, header)
    .then((res) => {
      dispatch({
        type: GET_USERS_NEWS,
        payload: res.data,
      });
      return res.data;
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
      return false;
    });

  return response;
};



export const addPost = (formData) => async (dispatch) => {
 
  const header = { headers: { ...globalHeaders,  'Content-Type': 'multipart/form-data',  "x-auth-token": localStorage.getItem('token') } }
  let response = await axios
    .post(`${baseUrl}/post_apis/post`, formData, header)
    .then((res) => {
      dispatch({
        type: ADD_POSTS,
        payload: res.data,
      });
      return res.data;
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    dispatch(setAlert('Post Created', 'success'));
      
    });

  return response;
};








