const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/ordersController");

router.get("/", ctrl.getAllOrders);

router.get("/customer", ctrl.getOrdersByCustomer);

router.post("/", ctrl.createNewOrder);

module.exports = router;
