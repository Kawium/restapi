import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

// Mock data
let products = [];

router.get("/", (req, res) => {
  if (products === undefined || products.length == 0) {
    res.send("There are no products yet");
  } else {
    res.send(products);
  }
});

// adds new product
router.post("/", (req, res) => {
  const name = req.body.name;
  const brand = req.body.brand;
  const price = req.body.price;
  products.push({ name, brand, price, id: uuidv4() });
  res.send(`Product with the name ${name} has been added to mockdata`);
});

// adds spefic id for its product
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundProduct = products.find((product) => product.id === id);
  if (!foundProduct) {
    res.status(404).send("Specified product cannot be found");
  } else {
    res.send(foundProduct);
  }
});

// delete product with spefic id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const foundProduct = products.find((product) => product.id === id);
  if (!foundProduct) {
    res.status(404).send("Specified product cannot be found");
  } else {
    products = products.filter((product) => product.id !== id);
    res.send(`Product with id ${id} has been deleted from mockdata`);
  }
});

// updates product by its ID.
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const productFound = products.find((product) => product.id === id);
  if (!productFound) {
    res.status(404).send("Error 404: ID cannot be found.");
  }
  productFound.name = req.body.name;
  productFound.brand = req.body.brand;
  productFound.price = req.body.price;
  res.send(productFound);
});

export default router;
