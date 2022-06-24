import { Request, Response } from 'express';
import LoginService from '../services/login.service';

const login = async (req: Request, res: Response) => {
  const user = req.body;

  const token = await LoginService.login(user);

  if (!token) return res.status(401).json({ message: 'Username or password invalid' });

  res.status(200).json({ token });
};

const LoginController = { login };

export default LoginController;
