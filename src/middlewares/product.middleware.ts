import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';
import { Product } from '../interface/interfaces';

const schema = Joi.object<Product>({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;

  const { error } = schema.validate({ name, amount });

  if (error) {
    const { type } = error.details[0];
    if (type === 'any.required') {
      next({ status: StatusCodes.BAD_REQUEST, message: error.message });
    }
    next({ status: StatusCodes.UNPROCESSABLE_ENTITY, message: error.message });
  }
  next();
};

export default validateProduct;
