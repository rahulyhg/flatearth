import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import AuthReducer from './auth_reducer';
import UserReducer from './user_reducer';
import usersStatus from './database/userStatuses_reducer';
import newUsers from './database/newUsers_reducer';

const rootReducer = combineReducers({
  db: combineReducers({
    usersStatus,
    newUsers
  }),
  locals: combineReducers({
    auth: AuthReducer,
    user: UserReducer
  }),
  form,
  vendor: combineReducers({
    forms: combineReducers({
      signupForm: form
    })
  })
});

export default rootReducer;
