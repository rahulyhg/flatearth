import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        error: '',
        authenticated: true,
        accessToken: action.payload.accessToken
      };
    case UNAUTH_USER:
      return { ...state, error: '', authenticated: false, accessToken: undefined };
    case AUTH_ERROR:
      return { ...state, error: action.payload, accessToken: undefined };
    default:
      return state;
  }
};
