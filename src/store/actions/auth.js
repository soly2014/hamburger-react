import * as actionTypes from './actionTypes';
import Axios from 'axios';

export const authStart = () => {
  return {
    type:actionTypes.AUTH_START
  }
};

export const authSuccess = (token,userId) => {
  return {
    type:actionTypes.AUTH_SUCCESS,
    token,
    userId
  }
};

export const authFail = (errors) => {
  return {
    type:actionTypes.AUTH_FAIL,
    errors
  }
};

export const authLogout = () => {
  return {
    type:actionTypes.AUTH_LOG_OUT
  }
}

export const auth = ({authData,history,authType}) => dispatch => {
  dispatch(authStart());
  let url;
  if (authType === 'login') {
    url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword";
  } else {
    url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser";
  }
  Axios.post(url+"?key=AIzaSyBkeEizd21ZUndKTaZ83cQgYUjOXjdgeM0",{...authData,returnSecureToken:true})
      .then(response => {
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', response.data.localId);
        dispatch(authSuccess(response.data.idToken,response.data.localId));
      })
      .catch(err => {
        dispatch(authFail(err.response.data.error.errors));
        if (authType === 'signup' && err.response.data.error.message === 'EMAIL_EXISTS') {
          history.push('/login')
        }
      });
};

export const deleteAuthMessages = () => {
  return {
    type:actionTypes.DELETE_AUTH_FLASH_MESSAGES
  }
}