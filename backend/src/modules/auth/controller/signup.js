import User from '../../../models/User';
import bodyValidation from '../service/bodyValidation';

export default {
  async post(ctx) {
    if (process.env.__DEV__) {
      console.log(ctx.request.body);
    }
    // TODO flow-io validation
    bodyValidation(ctx, 'user', 'email', 'password');
    const { user: name, email, password } = ctx.request.body;
    try {
      await User.create({ name, email, password });
    } catch (e) {
      let errFields;
      if (e.errors) {
        Object.keys(e.errors).forEach(field => {
          ctx.log.error({ err: e.errors[field] }, 'signup error');
          errFields = e.errors[field].message;
        });
      } else {
        /*eslint-disable */
        const duplicate = e.message.match(
          /index\:\ (?:.*\.)?\$?(?:([_a-z0-9]*)(?:_\d*)|([_a-z0-9]*))\s*dup key/i
        );
        /*eslint-enable */
        errFields = duplicate[1] || duplicate[2];
        errFields = `${errFields.toUpperCase()} in use `;
        ctx.log.error({ err: e }, `signup error ${errFields}`);
      }
      ctx.throw(422, errFields || e.message || 'Bad credentials.');
    }

    ctx.api(200);
  }
};
