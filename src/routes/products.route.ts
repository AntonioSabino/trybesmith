import express from 'express';
import ProductController from '../controllers/product.controller';
import validateProduct from '../middlewares/product.middleware';

const router = express.Router();

router.get('/', ProductController.getAll);

router.post('/', validateProduct, ProductController.createProduct);

export default router;
