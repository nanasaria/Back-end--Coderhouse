import { resolve, join, dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default class ProductManager {
  constructor() {
    this.path = resolve(__dirname);
    this.filePath = join(this.path, "..", "utils", "products.json");
    this.products = [];
  }

  addProduct({ title, description, price, code, stock, category, thumbnails }) {
    try {
      this.loadProducts();

      const product = {
        title,
        description,
        price,
        code,
        stock,
        category,
        thumbnails,
      };

      console.log("O que chega", product);

      if (!this.verifyInputs(product)) throw new Error("Parâmetros Inválidos");

      const productExists = this.products.some(
        (p) =>
          p.title === product.title &&
          p.price === product.price &&
          p.code === product.code
      );

      if (productExists) return this.updateStock({ title, price, code, stock });

      const newProduct = {
        id: this.generateId(),
        ...product,
      };

      this.products.push(newProduct);
      this.appendToFile();

      return newProduct;
    } catch (error) {
      throw error;
    }
  }

  getProducts() {
    return this.readFile();
  }

  getProductById({ id }) {
    try {
      const products = this.readFile();
      const product = products.find((product) => product.id === Number(id));
      if (!product) throw new Error("Produto não encontrado");
      return product;
    } catch (error) {
      throw error;
    }
  }

  updateProduct({ id, product }) {
    try {
      this.loadProducts();
      const index = this.findIndexProduct({ id });
      if (index === -1) throw new Error("Produto não encontrado");

      const newProduct = {
        ...this.products[index],
        ...product,
      };

      this.products[index] = newProduct;
      this.appendToFile();
      return newProduct;
    } catch (error) {
      throw error;
    }
  }

  deleteProduct({ id }) {
    try {
      const index = this.findIndexProduct({ id });
      if (index === -1) throw new Error("Produto não encontrado");

      const deletedProduct = this.products[index];
      this.products.splice(index, 1);
      this.appendToFile();
      return deletedProduct;
    } catch (error) {
      throw error;
    }
  }

  generateId() {
    return (this.products.at(-1)?.id ?? 0) + 1;
  }

  findIndexProduct({ id }) {
    this.loadProducts();
    return this.products.findIndex((product) => product.id === Number(id));
  }

  updateStock({ title, price, code, stock }) {
    this.loadProducts();

    const index = this.products.findIndex(
      (p) => p.title === title && p.price === price && p.code === code
    );

    const product = this.products[index];
    const newStock = Number(product.stock) + Number(stock);

    const newProduct = {
      ...product,
      stock: newStock,
    };

    this.products[index] = newProduct;
    this.appendToFile();
    return newProduct;
  }

  appendToFile() {
    const jsonData = JSON.stringify(this.products, null, 2);

    try {
      fs.writeFileSync(this.filePath, jsonData);

      return jsonData;
    } catch (error) {
      throw error;
    }
  }

  readFile() {
    try {
      const data = fs.readFileSync(this.filePath, "utf-8");
      const products = JSON.parse(data);
      return products;
    } catch (error) {
      return [];
    }
  }

  loadProducts() {
    this.products = this.readFile();
  }

  verifyInputs(product) {
    const { title, description, price, code, stock, category, thumbnails } =
      product;

    if (
      !title ||
      !description ||
      !price ||
      !code ||
      !stock ||
      !category ||
      !thumbnails
    )
      return false;

    if (!Array.isArray(thumbnails) || thumbnails.length === 0) return false;

    if (isNaN(Number(price))) return false;
    if (isNaN(Number(stock))) return false;

    return true;
  }
}
