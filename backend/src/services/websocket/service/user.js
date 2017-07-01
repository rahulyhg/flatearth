// @flow
import User from '../../../models/User';

export default {
  async lastUsers(count: number): Object {
    const users = await User.find({}).sort('-date').limit(count).exec();
    return users;
  }
};
