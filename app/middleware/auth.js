'use strict';
const jwt = require('jsonwebtoken');

module.exports = () => {
  return async function auth(ctx, next) {
    const exception = /(^\/$)|(\/profile)|(^\/login.*)|(^\/news.*)|(^\/decrypt.*)/;
		// const token = authorization.split(' ')[1];
		console.log(ctx.request.url)
		if(!exception.test(ctx.request.url)){
			ctx.status =401
		}else {
			// const authorization = ctx.get('Authorization');
			// const token = authorization.split(' ')[1];
			// let  tokenContent
			//  try {
			// 		 tokenContent = await jwt.verify (token, 'shenzhouhaotian');     //如果token过期或验证失败，将抛出错误
			// 		 ctx.body = tokenContent;
					 await next();
			//  } catch (err) {
			// 		 // ctx.throw(401, 'invalid token');
			// 		ctx.status =401
			//  }
    }
  };
};
