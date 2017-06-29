'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _User = require('../../../models/User');

var _User2 = _interopRequireDefault(_User);

var _bodyValidation = require('../service/bodyValidation');

var _bodyValidation2 = _interopRequireDefault(_bodyValidation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  async post(ctx) {
    (0, _bodyValidation2.default)(ctx, 'user', 'email', 'password');
    const { user: name, email, password } = ctx.request.body;
    let user;
    try {
      user = await _User2.default.create({ name, email, password });
    } catch (e) {
      let errFields;
      if (e.errors) {
        Object.keys(e.errors).forEach(field => {
          ctx.log.error({ err: e.errors[field] }, 'signup error');
          errFields = e.errors[field].message;
        });
      } else {
        const duplicate = e.message.match(/index\:\ (?:.*\.)?\$?(?:([_a-z0-9]*)(?:_\d*)|([_a-z0-9]*))\s*dup key/i);
        errFields = duplicate[1] || duplicate[2];
        errFields = `${errFields.toUpperCase()} in use `;
        ctx.log.error({ err: e }, `signup error ${errFields}`);
      }
      ctx.throw(422, errFields || e.message || 'Bad credentials.');
    }

    ctx.api(200);
  }
};
//# sourceMappingURL=signup.js.map