// import express from "express"
const express = require('express')
const router = express.Router();

// import couponRouter from "./Coupons.js"
const couponRouter = require('./Coupons.js')
// import userRouter from './User.js'
const  userRouter = require('./User.js')

router.use("/coupon", couponRouter);
router.use('/user',userRouter)

// export default router;
module.exports = router
