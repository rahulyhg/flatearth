// @flow

import { WS_USERS_STATE } from '../../actions/types';

type LastStatusesType = {
  id: string,
  name: string,
  statusMessage: string
};

export default (state = { meta: undefined, messages: [] }, action) => {
  switch (action.type) {
    case WS_USERS_STATE:
      return {
        ...state,
        meta: action.payload.meta,
        messages: [...state.messages, action.payload.newStatus]
      };
  }
  return state;
};
