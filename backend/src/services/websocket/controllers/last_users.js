// @flow
import type { Context } from 'koa';

import user from '../service/user';

export default {
  lastUsers(count) {
    return user.lastUsers(count);
  }
};
