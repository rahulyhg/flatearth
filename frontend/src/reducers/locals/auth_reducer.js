import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
      console.log(action, state);
      return {
        ...state,
        error: '',
        authenticated: true,
        accessToken: action.payload.accessToken,
        userInfo: action.payload.userInfo
      };
    case UNAUTH_USER:
      return { ...state, error: '', authenticated: false, accessToken: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload, accessToken: false };
    default:
      return state;
  }
};
