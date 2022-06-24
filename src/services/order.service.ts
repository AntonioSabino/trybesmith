import OrderModel from '../models/order.model';

const getAll = async () => {
  const data = await OrderModel.getAll();

  const orders = data.map(({ id, userId, productsIds }) => ({
    id,
    userId,
    productsIds: [productsIds],
  }));

  return orders;
};

const OrderService = { getAll };

export default OrderService;
