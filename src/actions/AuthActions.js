// import firebase from 'firebase';
// import {Actions} from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

export const LoginUser = ({ email, password, navigator }) => {
  return(dispatch) => {
    dispatch({ type: LOGIN_USER });
    userLoginSuccess(dispatch, []);
  }
};

const userLoginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

const userLoginFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: error.message
  });
};
