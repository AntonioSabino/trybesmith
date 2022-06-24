import express from 'express';
import errorMiddleware from './middlewares/error.middleware';
import productsRoute from './routes/products.route';
import usersRoute from './routes/users.route';

const app = express();

app.use(express.json());

// app.use('/login');
// app.use('/orders');
app.use('/products', productsRoute);
app.use('/users', usersRoute);

app.use(errorMiddleware);

export default app;
