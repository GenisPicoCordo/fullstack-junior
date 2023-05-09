import express from "express";
import * as dotenv from "dotenv";
import axios from "axios";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const response = await axios.get(process.env.API_URL, {
      headers: {
        "X-Shopify-Access-Token": process.env.TOKEN,
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200 && response.data && response.data.products) {
      res.json(response.data.products);
    } else {
      throw new Error("Unexpected response from API");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching products");
  }
});

const startServer = async () => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
};

startServer();
