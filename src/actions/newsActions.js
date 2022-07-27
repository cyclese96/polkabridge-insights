import axios from "axios";

import {
  GET_ALL_NEWS,
  GET_SINGLE_NEWS,
  GET_ERRORS,
  GET_USERS_NEWS,
  ADD_POSTS,
} from "./types";


const baseUrl = "http://localhost:5001"
//GET all characters of owner
export const getAllNews = () => async (dispatch) => {

  let response = await axios
    .get(`${baseUrl}/post_apis/posts/public/all/1`)
    .then((res) => {
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

  let response = await axios
    .get(`${baseUrl}/post_apis/posts/${id}`)
    .then((res) => {
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



export const addPost = (iformDatad) => async (dispatch) => {

  let response = await axios
    .post(`${baseUrl}/post_apis/post`)
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
      return false;
    });

  return response;
};





