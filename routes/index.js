import express from "express"
const router = express.Router();

import couponRouter from "./Coupons.js"
import userRouter from './User.js'

router.use("/coupon", couponRouter);
router.use('/user',userRouter)

export default router;
