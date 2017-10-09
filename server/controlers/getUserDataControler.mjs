import jwt from 'jsonwebtoken';
import bluebird from 'bluebird';
import config from '../config/index.mjs';
import db from '../models/index.mjs';

bluebird.promisifyAll(jwt);

const verifyToken = async (ctx) => {
  const { token } = ctx.request.body;
  try {
    const { _id } = await jwt.verifyAsync(token, config.secret);
    await db.User.findOne({ _id })
      .then(({ username }) => {
        ctx.status = 200;
        ctx.body = {
          authenticated: true,
          username,
        };
      });
  } catch (e) {
    ctx.status = 401;
    ctx.body = {
      authenticated: false,
      err: `cannot veryfy ${token}`,
    };
  }
};

const ensureToken = async (ctx, next) => {
  const header = ctx.headers['x-authorization-token'];
  try {
    const bearer = header.split(' ');
    const bearerToken = bearer[1];
    ctx.request.body.token = bearerToken;
    await next();
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      authenticated: false,
      err: 'token is undefined',
    };
  }
};

export default { verifyToken, ensureToken };
