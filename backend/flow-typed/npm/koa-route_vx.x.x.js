// @flow
import Koa from 'koa';

type RoutePath = string | RegExp | Array<string | RegExp>;

type RouteHandler = (ctx: Koa.Context, ...params: any[]) => any;

type CreateRoute = (routeFunc: RouteHandler) => Koa.Middleware;

interface RouteMethod {
    (path: RoutePath): CreateRoute;
    (path: RoutePath, fn: RouteHandler, opts?: pathToRegexp.ParseOptions & pathToRegexp.RegExpOptions): Koa.Middleware;
}

type CreateRouteMethod = (method: string) => RouteMethod;

interface KoaRoutes {
    all: CreateRouteMethod;
    acl: RouteMethod;
    bind: RouteMethod;
    checkout: RouteMethod;
    connect: RouteMethod;
    copy: RouteMethod;
    delete: RouteMethod;
    del: RouteMethod;
    get: RouteMethod;
    head: RouteMethod;
    link: RouteMethod;
    lock: RouteMethod;
    msearch: RouteMethod;
    merge: RouteMethod;
    mkactivity: RouteMethod;
    mkcalendar: RouteMethod;
    mkcol: RouteMethod;
    move: RouteMethod;
    notify: RouteMethod;
    options: RouteMethod;
    patch: RouteMethod;
    post: RouteMethod;
    propfind: RouteMethod;
    proppatch: RouteMethod;
    purge: RouteMethod;
    put: RouteMethod;
    rebind: RouteMethod;
    report: RouteMethod;
    search: RouteMethod;
    subscribe: RouteMethod;
    trace: RouteMethod;
    unbind: RouteMethod;
    unlink: RouteMethod;
    unlock: RouteMethod;
    unsubscribe: RouteMethod;
}

declare module.exports: KoaRoutes