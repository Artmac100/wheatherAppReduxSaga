import Koa from 'koa';

import logger from 'koa-logger';
import cors from 'koa2-cors';
import bodyParser from 'koa-parser';
import mongoose from 'mongoose';

import config from './config/index.mjs';
import router from './router.mjs';

const app = new Koa();

mongoose.connect(config.database, { useMongoClient: true }, () => {
  console.log('db connected');
});

app
  .use(logger())
  .use(cors())
  .use(bodyParser())
  .use(router.routes());


app
  .listen(config.port, () =>
    (console.log(`app works on ${config.port} port`)));
