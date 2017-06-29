'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = (ctx, ...args) => {
  const { body } = ctx.request;
  console.log(body);
  if (!Object.keys(body).length) {
    ctx.throw(400, 'Bad request');
  }
  const badFields = args.reduce((badValidationFields, field) => {
    if (body[field] === undefined) {
      badValidationFields.push(field);
    }
    return badValidationFields;
  }, []);
  if (badFields.length) {
    ctx.throw(401, `please check fields ${badFields.join(' ')}`);
  }
};
//# sourceMappingURL=bodyValidation.js.map