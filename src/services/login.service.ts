import { User } from '../interface/interfaces';
import UserModel from '../models/user.model';
import generateJWT from '../utils/generateJWT';

const login = async (user: User): Promise<string | null> => {
  const userData = await UserModel.getUser(user);

  if (!userData) return null;

  const { password: passDB, ...userWithoutPass } = userData;

  const token = generateJWT(userWithoutPass);

  return token;
};

const LoginService = { login };

export default LoginService;
