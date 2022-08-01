import axios from 'axios';
import api from '../utils/api';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT
} from './types';

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/



// Load User
export const checkUserAuthenticated = () => async (dispatch) => {
  try {
    
let localToken=localStorage.getItem('token');
if(localToken){
  dispatch(loadUser(localToken));
}
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Load User
export const loadUser = (token) => async (dispatch) => {
  try {
    // const res = await api.get('/user_apis/users/current_user',token);
   

    const config = {
       headers: {
        'Content-Type': 'application/json',
        'x-auth-token':token
      }
    };

    const baseURL= "http://localhost:5001/user_apis/current_user";
 const res = await axios.get(baseURL,config);

 console.log(res);

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const signUp = (formData) => async (dispatch) => {
  try {
    const res = await api.post('user_apis/user', formData);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const loginUser = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const res = await api.post('/user_apis/login', body); 
    localStorage.setItem('token',res.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
     dispatch(loadUser(res.data.token));
  } catch (err) {
    console.log(err);
   

  }
};

// Logout
export const logout = () => ({ type: LOGOUT });