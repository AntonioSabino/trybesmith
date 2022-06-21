import { Request, Response } from 'express';
import ProductService from '../services/product.service';

const getAll = async (_req: Request, res: Response) => {
  const products = await ProductService.getAll();

  res.status(200).json(products);
};

const createProduct = async (req: Request, res: Response) => {
  const product = req.body;

  const newProduct = await ProductService.createProduct(product);

  res.status(201).json(newProduct);
};

const ProductController = { getAll, createProduct };

export default ProductController;
