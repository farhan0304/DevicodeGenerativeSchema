import { Router } from 'express';
import { generateAccessToken, logoutUser } from '../controllers/registerController.js';

const userRoute = Router();

userRoute.route("/login")
.post(generateAccessToken)

userRoute.route("/logout")
.get(logoutUser)


export default userRoute