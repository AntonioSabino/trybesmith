import express from 'express';
import productsRoute from './routes/products.route';

const app = express();

app.use(express.json());

// app.use('/login');
// app.use('/orders');
app.use('/products', productsRoute);
// app.use('/users');

export default app;
