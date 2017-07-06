// @flow
import type { Middleware } from 'redux';

const logMiddleware: Middleware<*, *> = () => next => action => {
  console.log(`Action: ${action.type}`);
  next(action);
};

export default logMiddleware;
