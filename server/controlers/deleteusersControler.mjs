import db from '../models/index.mjs';

const deleteUser = () => db.User.remove();

export default deleteUser;
