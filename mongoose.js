const mongoose = require("mongoose");
const Product = require("./models/products");

mongoose
  .connect(
    "mongodb+srv://tg-lender:GZSCIeHCWGyrmyZE@cluster0.rwg4svv.mongodb.net/my-products"
  )
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createdProduct.save();
  res.json(result);
};

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();
  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
