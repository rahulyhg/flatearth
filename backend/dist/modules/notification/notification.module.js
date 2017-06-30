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

var _last_joined = require('./controller/last_joined.controller');

var _last_joined2 = _interopRequireDefault(_last_joined);

var _new_status = require('./controller/new_status.controller');

var _new_status2 = _interopRequireDefault(_new_status);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NotificationModule = new _koa2.default();

NotificationModule.use(_koaRoute2.default.get('/last-joined', _last_joined2.default.get));
NotificationModule.use((0, _koaJwt2.default)({ secret: _config2.default.secret, algorithm: 'HS256' }));
NotificationModule.use(_koaRoute2.default.post('/new-status', _last_joined2.default.post));
NotificationModule.use(_koaRoute2.default.post('/last-joined', _new_status2.default.post));

exports.default = NotificationModule;
//# sourceMappingURL=notification.module.js.map