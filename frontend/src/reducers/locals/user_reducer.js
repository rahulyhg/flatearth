import { USER_INFO } from '../../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...action.payload.userInfo
        }
      };
    default:
      return state;
  }
};
