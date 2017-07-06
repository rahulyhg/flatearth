// @flow
import user from '../service/user';

export default {
  lastUsers(count: number) {
    return user.lastUsers(count);
  }
};
