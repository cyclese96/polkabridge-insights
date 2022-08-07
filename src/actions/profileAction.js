import axios from "axios";
import {UPDATE_PROFILE} from './types'

export const globalHeaders = {
  "Content-Type": "application/json;charset=UTF-8",
  "Access-Control-Allow-Origin": "*",
};


const baseUrl = "http://localhost:5001"
export const updateProfile = (data) => async (dispatch) => {
  const header = {
    headers: {
      ...globalHeaders,
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  let response = await axios
    .put(`${baseUrl}/user_apis/update-profile`, data, header)
    .then((res) => {

      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      })
    })
    .catch((err) => {
      console.log('update profile action error', err);
    });
};


