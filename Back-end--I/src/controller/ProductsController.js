import ProductManager from "../model/ProductModel.js";
const productManager = new ProductManager();

class ProductController {
  index(req, res) {
    try {
      const products = productManager.getProducts();
      return res.status(200).json({ products, length: products.length });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Erro ao listar produtos ${error.message}` });
    }
  }

  store(req, res, io) {
    let {
      title,
      description,
      price,
      code,
      stock,
      category,
      thumbnails = [""],
    } = req.body;

    console.log(req.body);

    price = Number(price);
    stock = Number(stock);

    try {
      const product = productManager.addProduct({
        title,
        description,
        price,
        code,
        stock,
        category,
        thumbnails,
      });

      io.emit("listProductsUpdated");

      res
        .status(201)
        .json({ message: `Produto adicionado com sucesso!`, product });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Erro ao adicionar o produto: ${error.message}` });
    }
  }

  update(req, res, io) {
    const { pid: id } = req.params;

    const product = req.body;

    try {
      const productUpdated = productManager.updateProduct({
        id,
        product,
      });

      io.emit("listProductsUpdated");

      res.status(200).json({
        message: `Produto atualizado com sucesso!`,
        product: productUpdated,
      });
    } catch (error) {
      if (error.message === "Produto não encontrado") {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: `${error.message}` });
    }
  }

  show(req, res) {
    const { pid: id } = req.params;

    try {
      const product = productManager.getProductById({ id });
      return res.status(200).json({ product });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Erro ao procurar produto: ${error.message}` });
    }
  }

  delete(req, res, io) {
    const { pid: id } = req.params;

    try {
      const product = productManager.deleteProduct({ id });
      io.emit("listProductsUpdated");
      return res
        .status(200)
        .json({ message: `Produto deletado com sucesso!`, product });
    } catch (error) {
      if (error.message === "Produto não encontrado") {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: `${error.message}` });
    }
  }
}

export default new ProductController();
