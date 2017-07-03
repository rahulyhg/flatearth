import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import usersStatus from './database/userStatuses_reducer';
import newUsers from './database/newUsers_reducer';

import AuthReducer from './locals/auth_reducer';
import UserReducer from './locals/user_reducer';


const rootReducer = combineReducers({
  db: combineReducers({
    usersStatus,
    newUsers
  }),
  locals: combineReducers({
    auth: AuthReducer,
    user: UserReducer
  }),
  form
});

export default rootReducer;
