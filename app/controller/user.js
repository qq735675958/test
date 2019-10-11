/* eslint-disable */
'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');

class UserController extends Controller {
  async index() {
    const ctx = this.ctx
    const authorization = ctx.get('Authorization');
	console.log(authorization)
    if (authorization === '') {
        ctx.throw(401, 'no token detected in http header "Authorization"');
		// ctx.status =401
    }
    const token = authorization.split(' ')[1];
    // console.log(token)
    let tokenContent;
    try {
        tokenContent = await jwt.verify(token, 'shenzhouhaotian');     //如果token过期或验证失败，将抛出错误
				console.log('-----------------------')
				console.log(tokenContent)
				console.log('----------555---------')
        ctx.body = tokenContent
    } catch (err) {
        // ctx.throw(401, 'invalid token');
		ctx.status =401
    }
  }
}

module.exports = UserController;
