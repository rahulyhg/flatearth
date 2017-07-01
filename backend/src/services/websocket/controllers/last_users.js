// @flow
import type { Context } from 'koa';
import { lastUsers } from '../service/user';
export default {
  lastUsers() {
    lastUsers({ count: 3 });
  }
};
