import jwt from 'jsonwebtoken';

import config from '../config/index.mjs';
import db from '../models/index.mjs';

const userLoginControler = async (ctx) => {
  const { username, password } = ctx.request.body;
  await db.User.findOne({ username })
    .then((user) => {
      if (user.checkPassword(password)) {
        ctx.status = 200;
        const token = jwt.sign({ _id: user._id }, config.secret);
        ctx.body = {
          authenticated: true,
          username: user.username,
          token,
        };
      } else {
        ctx.status = 401;
        ctx.body = {
          authenticated: false,
          message: 'Invalid password',
        };
      }
    })
    .catch(() => {
      ctx.status = 401;
      ctx.body = {
        authenticated: false,
        message: 'Invalid user name',
      };
    });
};

export default userLoginControler;
