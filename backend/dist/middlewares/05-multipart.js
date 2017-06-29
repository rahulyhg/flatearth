'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asyncBusboy = require('async-busboy');

var _asyncBusboy2 = _interopRequireDefault(_asyncBusboy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (ctx, next) => {
  if (!ctx.request.is('multipart/*')) {
    return await next();
  }
  const { files, fields } = await (0, _asyncBusboy2.default)(ctx.req);

  if (files) {
    files.forEach((_, index) => {
      console.log(index);
    });
  }
  // console.log(fields);
  // Object.keys(fields).forEach(key => {
  //   ctx.request.body[key] = fields[key];
  // });

  await next();
};
//# sourceMappingURL=05-multipart.js.map