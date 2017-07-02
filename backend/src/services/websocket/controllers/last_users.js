// @flow
import type { Context } from 'koa';

import user from '../service/user';

export default {
  lastUsers() {
    return user.lastUsers({ count: 3 });
  }
};
