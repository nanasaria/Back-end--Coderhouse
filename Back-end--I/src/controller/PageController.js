import ProductManager from "../model/ProductModel.js";

const productManager = new ProductManager();

class PageController {
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

  show(req, res) {
    let { pid: id, redirect } = req.params;

    try {
      const product = productManager.getProductById({ id });
      redirect =
        redirect === "remove" ? "formDeleteProduct" : "formEditProduct";

      return res.render(redirect, { title: "BookHouse", product });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Erro ao procurar produto: ${error.message}` });
    }
  }
}

export default new PageController();
