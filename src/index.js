import express from 'express'
import paymentRoutes from './routes/payment.routers.js'
import {port} from './config.js'
import path from 'path'
import cors from 'cors'

const app = express()

app.use(cors());

app.use(express.json())

app.use('/checkout-session', paymentRoutes);

app.use(express.static(path.resolve('src/public')))

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});


const serverURL = process.env.SERVER_URL || 'http://localhost:3000'

app.listen(port)
console.log('server on port', port)