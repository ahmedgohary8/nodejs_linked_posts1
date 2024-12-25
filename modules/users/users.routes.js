import { Router } from "express";
import { signin, signup } from "./users.controller.js";
import { checkEmailExist } from "../../middleware/checkEmailExist.js";


const userRouter =Router()

userRouter.post('/signup',checkEmailExist,signup)

userRouter.post('/signin',signin)

export default userRouter
