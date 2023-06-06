const express = require("express");
const router = express.Router();
const {
  getCustomerOrders,
  createOrder,
  getOrders,
} = require("../../services/orders");

router.get("/", async (req, res, next) => {
  const data = await getOrders();
  res.json(data);
});

router.get("/customer", async (req, res, next) => {
  const email = req.body.email;
  const data = await getCustomerOrders({ "customer.email": email });
  res.json(data);
});

router.post("/", async (req, res, next) => {
  const order = await createOrder(req.body);
  res.json(order);
});

module.exports = router;
