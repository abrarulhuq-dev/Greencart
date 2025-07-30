import cookieParser from 'cookie-parser';
import express from 'express'
import cors from 'cors'
import connectCloudinary from './config/cloudinary.js';
import connectDB from './config/mongodb.js';
import 'dotenv/config'
import userRoute from './route/userroute.js';
import productRouter from './route/productRoute.js';
import cartRouter from './route/cartRoute.js';
import orderRouter from './route/orderRoute.js';
import addressRouter from './route/addressRoute.js';
import sellerRouter from './route/sellerRoute.js';


const app = express()
const port = process.env.PORT  || 4000;

await connectCloudinary();
await connectDB();

// allow multiple origins
const allowedOrigins = ['http://localhost:5173' ,"https://greencart-brown.vercel.app"]



// middleware configureation 
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin : allowedOrigins, credentials: true}))



app.use('/api/user', userRoute)
app.use('/api/seller', sellerRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/address', addressRouter)
app.use('/api/order', orderRouter)



app.get('/', (req, res) => res.send('API is Working'))


app.listen(port, () => console.log(` Server is Running on http://localhost:${port}`))