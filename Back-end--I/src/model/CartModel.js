import { resolve, join, dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default class CartManager {
  constructor() {
    this.path = resolve(__dirname);
    this.filePath = join(this.path, "..", "utils", "carts.json");
    this.productPath = join(this.path, "..", "utils", "products.json");
    this.cart = [];
  }

  createCart() {
    this.loadCarts();

    try {
      const newCart = {
        id: this.generateId(),
        products: [],
      };

      this.cart.push(newCart);
      this.appendToFile();

      return newCart;
    } catch (error) {
      throw error;
    }
  }

  addProductOnCart(pid, cartId, quantity) {
    this.loadCarts();

    try {
      const indexCart = this.findIndexCart(cartId);
      const cart = this.cart[indexCart];
      const productId = Number(pid);

      const productExists = cart.products.find((p) => p.id === productId);
      if (productExists)
        return this.updateQuantity(cartId, productId, quantity);

      if (!this.verifyQuantity(quantity))
        throw new Error("Quantity precisa ser um número inteiro.");

      const newProduct = {
        id: productId,
        quantity,
      };

      cart.products.push(newProduct);
      this.appendToFile();

      return cart;
    } catch (error) {
      throw error;
    }
  }

  getCartById(id) {
    this.loadCarts();

    try {
      const carts = this.readFile("cart");
      const products = this.readFile("product");

      const cart = carts.find((c) => c.id === Number(id));
      if (!cart) throw new Error("Carrinho não encontrado");

      const productsInfo = cart.products.map(({ id }) => {
        return products.find((p) => p.id === Number(id));
      });

      return {
        id: cart.id,
        products: productsInfo,
      };
    } catch (error) {
      throw error;
    }
  }

  generateId() {
    return (this.cart.at(-1)?.id ?? 0) + 1;
  }

  findIndexCart(id) {
    return this.cart.findIndex((c) => c.id === Number(id));
  }

  updateQuantity(cartId, productId, quantity) {
    const index = this.findIndexCart(cartId);
    const cart = this.cart[index];
    const productIndex = cart.products.findIndex((p) => p.id === productId);

    if (productIndex === -1)
      throw new Error("Produto não encontrado no carrinho");

    if (quantity === undefined) {
      cart.products[productIndex].quantity++;
    } else {
      if (!this.verifyQuantity(quantity))
        throw new Error("Quantity precisa ser um número inteiro.");

      const quantityOnCart = cart.products[productIndex].quantity;
      cart.products[productIndex].quantity = quantityOnCart + quantity;
    }

    this.appendToFile();
    return cart;
  }

  loadCarts() {
    this.cart = this.readFile("cart");
  }

  appendToFile() {
    const jsonData = JSON.stringify(this.cart, null, 2);

    try {
      fs.writeFileSync(this.filePath, jsonData);

      return jsonData;
    } catch (error) {
      throw error;
    }
  }

  readFile(fileToRead) {
    try {
      const file = fileToRead === "cart" ? this.filePath : this.productPath;

      const data = fs.readFileSync(file, "utf-8");
      const fileRead = JSON.parse(data);
      return fileRead;
    } catch (error) {
      return [];
    }
  }

  verifyQuantity(quantity) {
    return Number.isInteger(quantity) && quantity > 0;
  }
}
