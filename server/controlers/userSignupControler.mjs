import db from '../models/index.mjs';

const userSignupControler = async (ctx) => {
  const { username, email, password } = ctx.request.body;
  const user = new db.User({
    username,
    email,
    password,
  });

  // create token
  await user.save()
    .then((newUser) => {
      ctx.status = 200;
      ctx.body = {
        success: true,
        data: newUser,
      };
    })
    .catch((err) => {
      ctx.status = 403;
      const { username: userErr, email: emailErr } = err.errors;
      const message = userErr ? userErr.message : emailErr.message;
      ctx.body = {
        message,
      };
    });
};

export default userSignupControler;
