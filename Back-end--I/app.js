import "dotenv/config";
import express from "express";
import products from "./src/routes/products.js";
import carts from "./src/routes/carts.js";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/api/products", products);
    this.app.use("/api/carts", carts);
  }
}

export default new App().app;
