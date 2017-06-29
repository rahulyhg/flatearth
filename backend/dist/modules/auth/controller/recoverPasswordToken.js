'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _User = require('../../../models/User');

var _User2 = _interopRequireDefault(_User);

var _db = require('../../../services/db');

var _db2 = _interopRequireDefault(_db);

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
  async post(ctx, recoveryToken) {
    (0, _bodyValidation2.default)(ctx, 'password');

    const { password } = ctx.request.body;
    let user = _db2.default.getCachedDBQuery(recoveryToken);
    if (!user) {
      user = await _User2.default.find({
        where: {
          passwordResetToken: recoveryToken,
          passwordResetTokenExpiries: {
            $lt: Date.now()
          }
        }
      });
      _db2.default.cacheDBQuery({ recoveryToken, user });
    }

    if (!user) {
      ctx.throw(500, 'password is incorrect or token expiried');
    }

    if (!user.validPassword(password)) {
      ctx.throw(401, 'password is incorrect');
    }
    ctx.api();
  }
};
//# sourceMappingURL=recoverPasswordToken.js.map