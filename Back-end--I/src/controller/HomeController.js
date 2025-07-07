import ProductManager from "../model/ProductModel.js";
import events from "../utils/events.js";

const productManager = new ProductManager();

class homeController {
  index(req, res) {
    try {
      const products = productManager.getProducts();
      return res.render("realTimeProducts", { title: "BookHouse", products });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Erro ao listar produtos ${error.message}` });
    }
  }
}

export default new homeController();
