import axios from "axios";
import { GET_PROFILE, UPDATE_PROFILE } from "./types";

export const globalHeaders = {
  "Content-Type": "application/json;charset=UTF-8",
  "Access-Control-Allow-Origin": "*",
};

const baseUrl = "http://localhost:5001";
export const updateProfile = (data) => async (dispatch) => {
  const header = {
    headers: {
      ...globalHeaders,
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  try {
    let response = await axios.put(
      `${baseUrl}/user_apis/update-profile`,
      data,
      header
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: response.data,
    });
  } catch (error) {
    console.log("update profile action error", error);
  }
};

export const getProfile = () => async (dispatch) => {
  const header = {
    headers: {
      ...globalHeaders,
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  try {
    let response = await axios.get(`${baseUrl}/user_apis/profile`, header);

    dispatch({
      type: GET_PROFILE,
      payload: response.data,
    });
  } catch (error) {
    console.log("get profile action error", error);
  }
};
