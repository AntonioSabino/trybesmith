import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';
import { UserLogin } from '../interface/interfaces';

const schema = Joi.object<UserLogin>({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const validateLoginInputs = (req: Request, _res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  const { error } = schema.validate({ username, password });

  if (error) {
    next({ status: StatusCodes.BAD_REQUEST, message: error.message });
  }
  next();
};

export default validateLoginInputs;