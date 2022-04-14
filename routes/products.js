import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

// Mock data
let products = [];

router.get("/", (req, res) => {
  res.send("Products");
});

// adds new product
router.post("/", (req, res) => {
  const product = req.body;

  products.push({ ...product, id: uuidv4() });
  res.send(
    `Product with the name ${product.productName} has been added to mockdata`
  );
});

// adds spefic id for its product
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundProduct = products.find((product) => product.id === id);
  if (!foundProduct) {
    res.status(404);
    res.send("There is already id for that product.");
  }
  res.send(foundProduct);
});

// delete product with spefic id
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  product = products.filter((product) => product.id !== id);

  res.send(`Product with id ${id} has been deleted from mockdata`);
});

// updates current ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const productFound = products.find((product) => product.id === id);
  if (!productFound) {
    res.status(404).send("Error 404: ID cannot be find.");
  }
  res.send(productFound);
});

export default router;
