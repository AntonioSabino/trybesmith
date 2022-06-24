import { Order } from '../interface/interfaces';
import connection from './connection';

const getAll = async (): Promise<Order[]> => {
  const query = `
    SELECT 
      od.*, pr.id AS productsIds 
    FROM 
      Trybesmith.Orders od 
      INNER JOIN 
      Trybesmith.Products AS pr 
      ON od.id = pr.orderId
  `;

  const [result] = await connection.execute(query);

  return result as Order[];
};

const OrderModel = { getAll };

export default OrderModel;
