import { resolve, join, dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default class ProductManager {
  constructor() {
    this.path = resolve(__dirname);
    this.products = [];
  }

  addProduct({
    title,
    description,
    price,
    thumbnail,
    code,
    stock,
    category,
    thumbnails,
  }) {
    const newProduct = {
      id: this.generateId(),
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      category,
      thumbnails,
    };

    this.products.push(newProduct);
    this.AppendToFile();

    return newProduct;
  }

  getProducts() {
    return this.readFile();
  }

  getProductById(id) {
    const products = this.readFile();
    const product = products.find((product) => product.id === id);
    return product ?? "Produto não encontrado.";
  }

  generateId() {
    return (this.products.at(-1)?.id ?? 0) + 1;
  }

  AppendToFile() {
    const jsonData = JSON.stringify(this.products, null, 2);

    try {
      fs.writeFileSync(
        join(__dirname, "..", "utils", "products.json"),
        jsonData
      );

      return "Arquivo criado";
    } catch (error) {
      return console.error("Error:", error.message);
    }
  }

  readFile() {
    try {
      const data = fs.readFileSync(
        join(__dirname, "..", "utils", "products.json"),
        "utf-8"
      );
      const products = JSON.parse(data);
      return products;
    } catch (error) {
      console.error("Error:", error.message);
      return [];
    }
  }
}
