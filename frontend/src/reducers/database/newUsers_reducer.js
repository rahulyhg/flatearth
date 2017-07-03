// @flow
import { WS_NEW_USER } from '../../actions/types';

export default (state = { meta: undefined, users: [] }, action) => {
  // console.log(state);
  switch (action.type) {
    case WS_NEW_USER:
      return [...state, action.payload];
  }
  return state;
};
