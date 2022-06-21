import { Product } from '../interface/interfaces';
import ProductModel from '../models/product.model';

const getAll = async () => {
  const products = await ProductModel.getAll();

  return products;
};

const createProduct = async (product: Product): Promise<Product> => {
  const newProduct = await ProductModel.createProduct(product);

  return newProduct;
};

const ProductService = { getAll, createProduct };

export default ProductService;
