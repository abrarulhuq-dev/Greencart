 import express from 'express'
import { isAuth, login, logout, register } from '../controller/usercontroller.js'
import authUser from '../middlewares/authUser.js'

 const userRoute = express.Router()

 userRoute.post('/register', register)
 userRoute.post('/login', login)
 userRoute.get('/isauth', authUser, isAuth )
 userRoute.post('/logout', authUser, logout )

 export default userRoute