const express = require("express");
const cors = require("cors");
const { ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ema is running");
});

app.listen(port, () => {
  console.log("johan with running in port");
});

const { MongoClient, ServerApiVersion } = require("mongodb");
const { request } = require("express");
const uri = `mongodb+srv://${process.env.DB_AMAZON}:${process.env.DB_PASSWORD}@cluster0.kisgx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const productCollection = client.db("amazon").collection("product");

    // get data to database filter pagination
    app.get("/product", async (req, res) => {
      console.log("query", req.query);
      const page = parseInt(req.query.page);
      const size = parseInt(req.query.size);

      const query = {};
      const cursor = productCollection.find(query);
      let product;

      if (page || size) {
        product = await cursor
          .skip(page * size)
          .limit(size)
          .toArray();
      } else {
        product = await cursor.toArray();
      }
      res.send(product);
    });

    // item count pagination

    app.get("/productcount", async (req, res) => {
      const Count = await productCollection.estimatedDocumentCount();
      res.send({ count: Count });
    });

    // use post to get products by ids
    app.post("/productByKeys", async (req, res) => {
      const keys = req.body;
      const ids = keys.map((id) => ObjectId(id));
      const query = { _id: { $in: ids } };
      const cursor = productCollection.find(query);
      const products = await cursor.toArray();
      console.log(products);
      res.send(products);
    });
  } finally {
  }
}
run().catch(console.dir());
