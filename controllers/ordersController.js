const ctrlWrapper = require("../helpers/ctrlWrapper");
const {
  getOrders,
  createOrder,
  getCustomerOrders,
} = require("../services/orders");

const getAllOrders = async (req, res, next) => {
  const orders = await getOrders();
  res.json(orders);
};

const createNewOrder = async (req, res, next) => {
  const order = await createOrder(req.body);
  res.json(order);
};

const getOrdersByCustomer = async (req, res, next) => {
  const email = req.body.email;
  const orders = await getCustomerOrders({ "customer.email": email });
  res.json(orders);
};

module.exports = {
  getAllOrders: ctrlWrapper(getAllOrders),
  createNewOrder: ctrlWrapper(createNewOrder),
  getOrdersByCustomer: ctrlWrapper(getOrdersByCustomer),
};
