import { User } from '../interface/interfaces';
import UserModel from '../models/user.model';
import generateJWT from '../utils/generateJWT';

const createUser = async (user: User): Promise<string> => {
  const userData = await UserModel.createUser(user);

  const { password: passDB, ...userWithoutPass } = userData;

  const token = generateJWT(userWithoutPass);

  return token;
};

const UserService = { createUser };

export default UserService;
