const express = require("express");
const router = express.Router();

const couponRouter = require("./Coupons");
const userRouter = require('./User')

router.use("/coupon", couponRouter);
router.use('/user',userRouter)

module.exports = router;
