'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = async (ctx, next) => {
  ctx.api = (status = 200, options = {}) => {
    ctx.status = status;
    ctx.body = { status: 'success', message: Object.assign({}, options) };
  };
  ctx.log = {
    error({ err }, message) {
      console.log('\x1b[33m%s\x1b[0m \x1b[31m%s\x1b[0m', err, message);
    }
  };
  await next();
};
//# sourceMappingURL=06-api.js.map