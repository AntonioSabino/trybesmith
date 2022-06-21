import ProductModel from '../models/product.model';

const getAll = async () => {
  const products = await ProductModel.getAll();

  return products;
};

const ProductService = { getAll };

export default ProductService;
