import { Request, Response } from 'express';
import OrderService from '../services/order.service';

const getAll = async (_req: Request, res: Response) => {
  const orders = await OrderService.getAll();

  res.status(200).json(orders);
};

const OrderController = { getAll };

export default OrderController;
