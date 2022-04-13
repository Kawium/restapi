import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

// Mock data
const products = [];

router.get("/", (req, res) => {
  res.send("Products");
});

// adds new product
router.post("/", (req, res) => {
  const product = req.body;

  products.push({ ...product, id: uuidv4() });
  res.send(`Product with the name ${product.productName} added to mockdata`);
});

// adds spefic id for its product
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundProduct = products.find((product) => product.id === id);
  res.send(foundProduct);
});

export default router;
