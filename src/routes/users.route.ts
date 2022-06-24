import express from 'express';
import UserController from '../controllers/user.controller';
import validateUser from '../middlewares/user.middleware';

const router = express.Router();

router.post('/', validateUser, UserController.createUser);

export default router;
