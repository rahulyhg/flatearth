'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _User = require('../../../models/User');

var _User2 = _interopRequireDefault(_User);

var _bodyValidation = require('../service/bodyValidation');

var _bodyValidation2 = _interopRequireDefault(_bodyValidation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
ROUTE /api/v1/auth/recover-password
  QUERY POST:
   - { email: string }
  ANSWERS:
   - { status: 'success', token: 'some-token' }
   - { status: 'error', message: 'some-error' }
*/
exports.default = {
  async post(ctx) {
    (0, _bodyValidation2.default)(ctx, 'email');
    const { email } = ctx.request.body;
    const user = await _User2.default.find({ where: { email } });
    if (!user) {
      ctx.throw(500, 'user not found');
    }
    const token = _jsonwebtoken2.default.sign(user.toJSON(), _config2.default.secret, { expiresIn: '1d' });
    const oneDay = 60 * 60 * 24 * 1000;
    try {
      // db.sequelize.transaction(t =>
      user.update({ passwordResetToken: token, passwordResetTokenExpiries: Date.now() + oneDay });
      ctx.api(200, { token });
    } catch (e) {
      ctx.log.error({ err: e }, 'Transaction failed');
      ctx.throw(500, 'connection to db is broken');
    }
  }
};
//# sourceMappingURL=recoverPassword.js.map