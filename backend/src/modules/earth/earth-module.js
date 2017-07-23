// @flow
import Koa from 'koa';
import router from 'koa-route';
import koajwt from 'koa-jwt';
import config from 'config';

const EarthModule = new Koa();

EarthModule.use(koajwt({ secret: config.secret, algorithm: 'HS256' }));
EarthModule.use(router.post('/recover-password/:recoverToken', () => {

}));

export default EarthModule;
