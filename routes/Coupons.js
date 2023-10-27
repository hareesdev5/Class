import express from "express"
const routes = express.Router();

import couponController from "../controller/Coupons.js"

routes.get("/", couponController.getAllCoupons);
routes.get("/:id", couponController.getCouponById);
routes.post("/", couponController.createCoupon);
routes.put("/:id", couponController.editCoupon);
routes.delete("/:id", couponController.deleteCoupon);

export default routes;
