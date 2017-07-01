'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaMount = require('koa-mount');

var _koaMount2 = _interopRequireDefault(_koaMount);

var _authModule = require('./auth/auth-module');

var _authModule2 = _interopRequireDefault(_authModule);

var _notification = require('./notification/notification.module');

var _notification2 = _interopRequireDefault(_notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const APIModules = new _koa2.default();

APIModules.use((0, _koaMount2.default)('/auth', _authModule2.default));
// APIModules.use(mount('/notification', NotificationModule));

exports.default = APIModules;
//# sourceMappingURL=API-modules.js.map