import Koa from 'koa';
import mount from 'koa-mount';

import AuthModule from './auth/auth-module';
import EarthModule from './earth/earth-module';

const APIModules = new Koa();

APIModules.use(mount('/auth', AuthModule));
APIModules.use(mount('/curve', EarthModule));

export default APIModules;
