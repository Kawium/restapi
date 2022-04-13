import express from "express";
import bodyParser from "body-parser";
import productRouter from "./routes/products.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.send("Main");
});

app.listen(PORT, () => {
  console.log(`Port is running on port: http://localhost:${PORT}`);
});
