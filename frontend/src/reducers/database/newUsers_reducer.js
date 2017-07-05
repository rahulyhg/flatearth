// @flow

import { WS_USERS_INIT } from '../../actions/types';

export default (state = { meta: undefined, users: [] }, action) => {
  // console.log(state);
  switch (action.type) {
    case WS_USERS_INIT:
      return {
        ...state,
        meta: { ...action.payload.meta },
        users: [...state.users, ...action.payload.users]
      };
  }
  return state;
};
