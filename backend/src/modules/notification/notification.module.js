// @flow
import Koa from 'koa';
import router from 'koa-route';
import koajwt from 'koa-jwt';
import config from 'config';

import lastJoined from './controller/last_joined.controller';
import newStatus from './controller/new_status.controller';

const NotificationModule = new Koa();

NotificationModule.use(router.get('/last-joined', lastJoined.get));
NotificationModule.use(koajwt({ secret: config.secret, algorithm: 'HS256' }));
NotificationModule.use(router.post('/new-status', lastJoined.post));
NotificationModule.use(router.post('/last-joined', newStatus.post));

export default NotificationModule;
