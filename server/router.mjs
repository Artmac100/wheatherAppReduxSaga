import Router from 'koa-router';
import userSignupControler from './controlers/userSignupControler.mjs';
import userLoginControler from './controlers/userLoginController.mjs';
import deleteUser from './controlers/deleteusersControler.mjs';

import getUserData from './controlers/getUserDataControler.mjs';

// import bodyParser from 'koa-parser';

const router = new Router();

router.post('/signup', userSignupControler);
router.post('/login', userLoginControler);

router.get('/getuserdata', getUserData.ensureToken, getUserData.verifyToken);

router.delete('/deluser', deleteUser);

export default router;
