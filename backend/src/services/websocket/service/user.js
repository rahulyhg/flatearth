// @flow
import User from '../../../models/User';

export default {
  lastUsers(count: { count: number }): Object {
    return User.find({}).sort('-date').limit(count.count).lean();
  }
};
