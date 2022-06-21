import connection from './connection';

const getAll = async () => {
  const query = 'SELECT * FROM Trybesmith.Products';

  const [products] = await connection.execute(query);

  return products;
};

const ProductModel = { getAll };

export default ProductModel;
