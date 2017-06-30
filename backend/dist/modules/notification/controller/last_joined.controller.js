'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _User = require('../../../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  post(ctx) {
    ctx.body = 'ok';
  },
  async get(ctx) {
    const users = await _User2.default.find({});
    console.log(users);
    ctx.body = users;
  }
};
//# sourceMappingURL=last_joined.controller.js.map