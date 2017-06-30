// @flow
import type { Context } from 'koa';
import User from '../../../models/User';

export default {
  post(ctx: Context) {
    ctx.body = 'ok';
  },
  async get(ctx: Context) {
    const users = await User.find({});
    console.log(users);
    ctx.body = users;
  }
};
