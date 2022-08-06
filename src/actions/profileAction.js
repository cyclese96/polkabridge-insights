import axios from "axios";

export const globalHeaders = {
  "Content-Type": "application/json;charset=UTF-8",
  "Access-Control-Allow-Origin": "*",
};


const baseUrl = "http://localhost:5001"
export const createProfile = async (data) => {
  const header = {
    headers: {
      ...globalHeaders,
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  let response = await axios
    .post(`${baseUrl}/user_apis/user`, data, header)
    .then((output) => {
      return output.data;
    })
    .catch((err) => {});

  return response;
};
