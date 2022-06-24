import { User } from '../interface/interfaces';
import UserModel from '../models/user.model';
import generateJWT from '../utils/generateJWT';

const createUser = async (user: User): Promise<string> => {
  const newUser = await UserModel.createUser(user);

  const token = generateJWT(newUser);

  return token;
};

const UserService = { createUser };

export default UserService;
