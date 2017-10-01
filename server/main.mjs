import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import bodyParser from 'koa-parser';
import passport from 'koa-passport';

import config from './config/index';

const app = new Koa();
const router = new Router();

app
  .use(logger('hi'))
  .use(bodyParser())
  .use(passport.initialize())
  .use(router.routes());


router.get('/', (ctx) => {
  ctx.body = 'Hello World';
});

router.post('/test', (ctx) => {
  ctx.body = { data: ctx.request.body };
});

app
  .listen(config.port, () =>
    (console.log(`app works on ${config.port} port`)));
