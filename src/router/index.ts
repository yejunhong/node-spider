import { ParameterizedContext, DefaultContext, DefaultState} from 'koa';
import KoaRouter from 'koa-router';
import koa2Cors from 'koa2-cors';

import { index, login } from '../controller/test';

// 跨域
export const Cors = koa2Cors({
    origin: (ctx: ParameterizedContext<DefaultState, DefaultContext>) => { // 设置允许来自指定域名请求
        if (ctx.url === '/test') {
            console.log(ctx.header)
            return '*'; // 允许来自所有域名请求
        }
        return 'http://localhost:8080'; // 只允许http://localhost:8080这个域名的请求
    },
    maxAge: 5, // 指定本次预检请求的有效期，单位为秒。
    credentials: true, // 是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // 设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], // 设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] // 设置获取其他自定义字段
})

export const Router = new KoaRouter();

Router.get('/', index);
Router.get('/login', login);