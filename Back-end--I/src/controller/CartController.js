import CartManager from "../model/CartModel.js";
const cartManager = new CartManager();

class CartController {
  constructor() {}

  productCart(req, res) {
    const { cid, pid } = req.params;
    const { quantity } = req.body || {};

    try {
      const cart = cartManager.addProductOnCart(pid, cid, quantity);

      res.status(201).json({
        message: `Produtos adicionados ao carrinho com sucesso!`,
        cart,
      });
    } catch (error) {
      res.status(500).json({
        message: `Erro ao adicionar produtos ao carrinho: ${error.message}`,
      });
    }
  }

  store(req, res) {
    try {
      const cart = cartManager.createCart();

      res.status(201).json({ message: `Carrinho criado com sucesso!`, cart });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Erro ao criar carrinho: ${error.message}` });
    }
  }

  show(req, res) {
    const { cid } = req.params;

    try {
      const cart = cartManager.getCartById(cid);

      res.status(200).json({ Cart: cart });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Erro ao mostrar carrinho: ${error.message}` });
    }
  }
}

export default new CartController();
