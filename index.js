import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("Hello");
});

app.listen(PORT, () => {
  console.log(`Port is running on port: http://localhost:${PORT}`);
});
