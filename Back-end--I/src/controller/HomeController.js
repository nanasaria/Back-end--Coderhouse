import ProductManager from "../model/ProductModel.js";

const productManager = new ProductManager();

class HomeController {
  index(req, res) {
    try {
      const products = productManager.getProducts();
      return res.render("home", { title: "BookHouse", products });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Erro ao listar produtos ${error.message}` });
    }
  }
}

export default new HomeController();
