import ProductManager from "../model/ProductModel.js";
import events from "../utils/events.js";

const productManager = new ProductManager();

let products = productManager.getProducts();

events.on("listProductsUpdated", () => {
  products = productManager.getProducts();
});

class RealTimeProductController {
  index(req, res) {
    try {
      products = productManager.getProducts();
      return res.render("realTimeProducts", { title: "BookHouse", products });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Erro ao listar produtos ${error.message}` });
    }
  }

  showForm(req, res) {
    return res.render("formProduct", { title: "BookHouse" });
  }
}

export default new RealTimeProductController();
