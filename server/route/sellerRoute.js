import express from 'express';
import authSeller from '../middlewares/authSeller.js';
import { isSellerAuth, sellerLogin, sellerlogout } from '../controller/sellerController.js';


const sellerRouter = express.Router();

sellerRouter.post('/login', sellerLogin);
sellerRouter.get('/isauth', authSeller, isSellerAuth);
sellerRouter.post('/logout',authSeller, sellerlogout);

export default sellerRouter;