const express = require("express");
const routes = express.Router();

const couponController = require("../controller/Coupons");

routes.get("/", couponController.getAllCoupons);
routes.get("/:id", couponController.getCouponById);
routes.post("/", couponController.createCoupon);
routes.put("/:id", couponController.editCoupon);
routes.delete("/:id", couponController.deleteCoupon);

module.exports = routes;
