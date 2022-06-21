import { ResultSetHeader } from 'mysql2';
import { Product } from '../interface/interfaces';
import connection from './connection';

const getAll = async () => {
  const query = 'SELECT * FROM Trybesmith.Products';

  const [products] = await connection.execute(query);

  return products;
};

const createProduct = async (product: Product): Promise<Product> => {
  const { name, amount } = product;

  const query = `
      INSERT INTO 
        Trybesmith.Products (name, amount) 
      VALUES(?, ?)
    `;

  const [result] = await connection.execute<ResultSetHeader>(query, [
    name,
    amount,
  ]);

  return { id: result.insertId, name, amount };
};

const ProductModel = { getAll, createProduct };

export default ProductModel;
