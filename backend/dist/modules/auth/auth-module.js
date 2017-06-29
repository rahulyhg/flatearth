'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaRoute = require('koa-route');

var _koaRoute2 = _interopRequireDefault(_koaRoute);

var _koaJwt = require('koa-jwt');

var _koaJwt2 = _interopRequireDefault(_koaJwt);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _login = require('./controller/login');

var _login2 = _interopRequireDefault(_login);

var _signup = require('./controller/signup');

var _signup2 = _interopRequireDefault(_signup);

var _recoverPassword = require('./controller/recoverPassword');

var _recoverPassword2 = _interopRequireDefault(_recoverPassword);

var _recoverPasswordToken = require('./controller/recoverPasswordToken');

var _recoverPasswordToken2 = _interopRequireDefault(_recoverPasswordToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AuthModule = new _koa2.default();
AuthModule.use(_koaRoute2.default.post('/login', _login2.default.post));
AuthModule.use(_koaRoute2.default.get('/login', _login2.default.get));
AuthModule.use(_koaRoute2.default.post('/recover-password', _recoverPassword2.default.post));
AuthModule.use(_koaRoute2.default.post('/signup', _signup2.default.post));

AuthModule.use((0, _koaJwt2.default)({ secret: _config2.default.secret, algorithm: 'HS256' }));
AuthModule.use(_koaRoute2.default.get('/secret', _login2.default.get));
AuthModule.use(_koaRoute2.default.post('/recover-password/:recoverToken', _recoverPasswordToken2.default.post));

exports.default = AuthModule;
//# sourceMappingURL=auth-module.js.map