import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';
import { User } from '../interface/interfaces';

const schema = Joi.object<User>({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const validateUser = (req: Request, _res: Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body;

  const { error } = schema.validate({ username, classe, level, password });

  if (error) {
    const { type } = error.details[0];
    if (type === 'any.required') {
      next({ status: StatusCodes.BAD_REQUEST, message: error.message });
    }
    next({ status: StatusCodes.UNPROCESSABLE_ENTITY, message: error.message });
  }
  next();
};

export default validateUser;
