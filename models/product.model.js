const mongoose = require("mongoose");
const { model } = require("mongoose");
const PorductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },

  quantity: {
    type: Number,
    required: true,
    default: 0,
  },

  price: {
    type: Number,
    required: true,
    default: 0,
  },

  image: {
    type: String,
    required: false,
  },

  timeStamp: {
    type: Boolean,
    required: true,  // Or set to false if not mandatory
    default: false   // Or true, depending on your use case
}
});

const Product = mongoose.model("Product", PorductSchema)

module.exports = Product;