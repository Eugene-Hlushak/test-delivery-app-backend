const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: { type: "String", required: true },
    price: { type: "Number", required: true },
    img: { type: "String", required: true },
    shop: {
      type: Schema.Types.ObjectId,
      ref: "shop",
    },
  },
  {
    versionKey: false,
  }
);

const Product = model("product", productSchema);

module.exports = Product;
