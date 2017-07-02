// @flow

import type { Dispatch } from 'redux';

import api from '../services/api';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

type UserAuthType = {
  _id: string,
  email: string,
  name: string,
  role: string
};
type SuccessSigninType = {
  user: UserAuthType,
  token: string
};

type AuthErrorActionType = {
  [x: string]: any,
  type: string,
  payload: string
};

type SuccessSignUpType = {
  id: string,
  name: string
};

const SERVERNOTRESPOND = 'Unexpected token P in JSON at position 0';

export function authError(error: string): AuthErrorActionType {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signinUser(
  { user, password }: { user: string, password: string },
  redirect: Function
): Function {
  return async (dispatch: Dispatch<*>): Promise<*> => {
    // Submit user/password to server\
    const signInStatus = await api.signin({ user, password });
    if (signInStatus.status === 'success') {
      // if request is good...
      const { user: userInfo, token: accessToken }: SuccessSigninType = signInStatus.message;
      // -- Update State to indicate is authenticated
      dispatch({ type: AUTH_USER, payload: { userInfo, accessToken } });
      // -- Save the JWT token
      localStorage.setItem('token', accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      // -- redirect to the  router '/feature'
      redirect();
    } else {
      // if request is bad ..
      if (signInStatus.message === SERVERNOTRESPOND) {
        dispatch(authError("Can't connect to server, try later"));
      } else {
        dispatch(authError(signInStatus.message));
      }
      // - Show an error to the user
    }
  };
}

export function signoutUser() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return {
    type: UNAUTH_USER
  };
}

export function signupUser({ user, password, email }, callback: Function) {
  return async (dispatch: Dispatch<*>) => {
    const signupStatus = await api.signup({ user, password, email });
    if (signupStatus.status === 'success') {
      // const { id, name }: SuccessSignUpType = signupStatus.message;
      dispatch(signoutUser());
      callback();
    } else {
      dispatch(authError(signupStatus.message));
    }
  };
}
