import { join, dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";
import { createServer } from "http";
import { Server } from "socket.io";

import "dotenv/config";
import express from "express";
import methodOverride from "method-override";

import events from "./src/utils/events.js";
import products from "./src/routes/products.js";
import carts from "./src/routes/carts.js";
import realtimeproducts from "./src/routes/realtimeproducts.js";
import home from "./src/routes/pages/home.js";
import pageProduct from "./src/routes/pages/manipulateProduct.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class App {
  constructor() {
    this.app = express();
    this.httpServer = createServer(this.app);
    this.io = new Server(this.httpServer);
    this.path = resolve(__dirname);
    this.middlewares();
    this.routes();
    this.views();
    this.socketConnection();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(methodOverride("_method"));
    this.app.use(express.static(join(this.path, "src", "public")));
  }

  routes() {
    this.app.use("/api/products", products(this.io));
    this.app.use("/api/carts", carts);
    this.app.use("/realtimeproducts", realtimeproducts);
    this.app.use("/", home);
    this.app.use("/products", pageProduct);
  }

  views() {
    const hbs = engine({
      helpers: {
        last: function (array) {
          return array[array.length - 1];
        },
      },
    });

    this.app.engine("handlebars", hbs);
    this.app.set("view engine", "handlebars");
    this.app.set("views", resolve(this.path, "src", "view"));
  }

  socketConnection() {
    this.io.on("connection", (socket) => {
      console.log("Cliente Conectado.");

      socket.on("listProductsUpdated", () => {
        events.emit("listProductsUpdated");
      });

      socket.on("disconnect", () => {
        console.log("Cliente Desconectado.");
      });
    });
  }

  getHttpServer() {
    return this.httpServer;
  }
}

export default new App();
