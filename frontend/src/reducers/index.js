import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import AuthReducer from './auth_reducer';
import usersStatus from './database/userStatuses_reducer';
import newUsers from './database/newUsers_reducer';

const rootReducer = combineReducers({
  db: combineReducers({
    usersStatus,
    newUsers
  }),
  locals: combineReducers({
    auth: AuthReducer
  }),
  vendor: combineReducers({
    forms: combineReducers({
      signupForm: form
    })
  })
});

export default rootReducer;
