import express from 'express';
import OrderController from '../controllers/order.controller';

const router = express.Router();

router.get('/', OrderController.getAll);

export default router;
