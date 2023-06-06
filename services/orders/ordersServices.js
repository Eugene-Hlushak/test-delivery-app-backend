const models = require("../../models");

const getCustomerOrders = async (customer) => await models.Order.find(customer);

const getOrders = async () => await models.Order.find();

const createOrder = async (order) => await models.Order.create(order);

module.exports = { getCustomerOrders, createOrder, getOrders };
