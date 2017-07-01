import Koa from 'koa';
import mount from 'koa-mount';

import AuthModule from './auth/auth-module';
import NotificationModule from './notification/notification.module';

const APIModules = new Koa();

APIModules.use(mount('/auth', AuthModule));
// APIModules.use(mount('/notification', NotificationModule));

export default APIModules;
