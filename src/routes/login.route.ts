import express from 'express';
import LoginController from '../controllers/login.controller';
import validateLoginInputs from '../middlewares/login.middleware';

const router = express.Router();

router.post('/', validateLoginInputs, LoginController.login);

export default router;
