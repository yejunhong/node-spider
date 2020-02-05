import { ParameterizedContext, DefaultContext, DefaultState} from 'koa';

/**
 * 首页
 * @param ctx 
 */
export function index(ctx: ParameterizedContext<DefaultState, DefaultContext>) {
    ctx.body = JSON.stringify({id: 1, name: '首页接口'});
}

/**
 * 登录
 * @param ctx 
 */
export function login(ctx: ParameterizedContext<DefaultState, DefaultContext>) {
    ctx.body = JSON.stringify({id: 2, name: '登录接口'});
}