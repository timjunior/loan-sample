const express = require("express");
const bodyParser = require("body-parser");
const { getProducts, createProduct } = require("./mongoose");
const port = process.env.PORT || 8008;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res, next) => {
  res.json({ message: "server is up...!" });
});
app.get("/products", getProducts);
app.post("/products", createProduct);
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
