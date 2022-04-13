import express from "express";
const router = express.Router();

// Mock data
const products = [
  {
    productName: "iPhone",
    brandName: "Apple",
    ramInfo: 8,
  },
  {
    productName: "Galaxy s22",
    brandName: "Samsung",
    ramInfo: 9,
  },
  {
    productName: "Nord 2",
    brandName: "Oneplus",
    ramInfo: 12,
  },
];

router.get("/", (req, res) => {
  res.send("Products");
});

router.post("/", (req, res) => {
  const product = req.body;
  products.push(product);

  // checks if new product is added
  res.send("Added to database");
});

export default router;
