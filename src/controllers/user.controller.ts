import { Request, Response } from 'express';
import UserService from '../services/user.service';

const createUser = async (req: Request, res: Response) => {
  const user = req.body;

  const token = await UserService.createUser(user);

  res.status(201).json({ token });
};

const UserController = { createUser };

export default UserController;
