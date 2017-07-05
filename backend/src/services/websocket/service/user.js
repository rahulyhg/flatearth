// @flow
import User from '../../../models/User';

export default {
  lastUsers(count: { count: number }): Object {
    return User.find({}).limit(count.count).sort('+date').exec();
  }
};
