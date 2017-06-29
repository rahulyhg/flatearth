'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _flowIo = require('flow-io');

var t = _interopRequireWildcard(_flowIo);

var _default = require('flow-io/lib/reporters/default');

var _User = require('../../../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const err = reporter => ({
  status: 401,
  message: `check fields: ${reporter.join(' ')}`
});

const LoginTypeImpl = t.$exact({
  user: t.string,
  password: t.string
});

/*
ROUTE - /api/v1/auth/login
  QUERY POST:
  - { user: string, password: string }
  ANSWERS:
   - { status: 'success', token: 'some-token' }
   - { status: 'error', message: 'some-error' }
*/

exports.default = {
  async post(ctx) {
    // anti-bruteforce pause
    await new Promise(resolve => {
      setTimeout(resolve, 100);
    });

    const validation = t.validate(ctx.request.body, LoginTypeImpl);
    let reporter = _default.PathReporter.report(validation);

    // a bit tricky
    if (!reporter[0].includes('No errors!')) {
      reporter = reporter.map(error => error.match(/\/(.*?): (.*?)?$/g)[0]);
      throw err(reporter);
    }

    const { user: name, password } = ctx.request.body;
    let user;
    try {
      user = await _User2.default.findOne({ name });
      if (!user) {
        throw new Error();
      }
      user.update({ lastVisited: Date.now() });
    } catch (e) {
      ctx.log.error({ err: e }, 'User not found in DB');
      ctx.throw(401, `No such User ${name}`);
    }
    if (!user.validPassword(password)) {
      ctx.throw(401, 'password is incorrect');
    }
    const jsonUser = user.toJSON();
    ctx.api(201, {
      token: _jsonwebtoken2.default.sign(jsonUser, _config2.default.secret, { expiresIn: '1d' }),
      user: jsonUser
    });
    // ctx.body = { status: 'success', token: jwt.sign(user, config.secret, { expiresIn: '1d' }) };
  },
  async get(ctx) {
    ctx.api(200, (await _User2.default.find({})));
  }
};
//# sourceMappingURL=login.js.map