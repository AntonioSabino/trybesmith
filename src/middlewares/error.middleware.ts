import { NextFunction, Request, Response } from 'express';
import { ErrorHandler } from '../interface/interfaces';

const errorMiddleware = (
  error: ErrorHandler,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const { status, message } = error;

  if (status) return res.status(status).json({ message });

  return res.status(500).json({ message: 'Internal Server Error' });
};

export default errorMiddleware;
