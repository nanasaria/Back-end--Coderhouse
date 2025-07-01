import { join, dirname, resolve, extname } from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";
import "dotenv/config";
import express from "express";
import multer from "multer";
import products from "./src/routes/products.js";
import carts from "./src/routes/carts.js";
import home from "./src/routes/home.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class App {
  constructor() {
    this.app = express();
    this.path = resolve(__dirname);
    this.middlewares();
    this.routes();
    this.views();
    this.uploads();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(join(this.path, "src", "public")));
  }

  routes() {
    this.app.use("/", home);
    this.app.use("/api/products", products);
    this.app.use("/api/carts", carts);
  }

  views() {
    this.app.engine("handlebars", engine());
    this.app.set("view engine", "handlebars");
    this.app.set("views", join(this.path, "src", "view"));
  }

  /* Talvez esse método fique estático */
  uploads() {
    const storageConfig = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, join(this.path, "src", "public", "uploads"));
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + extname(file.originalname));
      },

      /*
      Quando tiver o controller de arquivos:

      const uploadDir = join(this.path, "src", "public", "uploads")

      if(!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir)
      }
      */
    });

    //Middleware
    const upload = multer({ storage: storageConfig });

    /*
    Para utilizar na rota e enviar 1 arquivo de cada vez:
    app.post("/upload", upload.single("file"), (req, res) => {
      if(!req.file) return res.status(400).send("Nenhum arquivo selecionado")

      res.status(201).send(`Arquivo enviado com sucesso: ${req.file.filename}`)
    })

    Formulário para enviar mensagens precisa ser multipart/form-data
    */
  }
}

export default new App().app;
