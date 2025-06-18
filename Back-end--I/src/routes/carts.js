import { Router } from "express";
import CartController from "../controller/CartController.js";

const router = Router({ mergeParams: true });

/* Deve listar os produtos que pertencem ao carrinho com o cid fornecido. */
router.get("/:cid", CartController.show);

/* Deve criar um novo carrinho com a seguinte estrutura:
id: Number/String (Gerado automaticamente para garantir que os ids nunca se repitam).

products: Array que conterá objetos representando cada produto. */
router.post("/", CartController.store);

/* Deve adicionar o produto ao array products do carrinho selecionado, utilizando o seguinte formato:
product: Deve conter apenas o ID do produto.
quantity: Deve conter o número de unidades do produto
(será adicionado um por vez).
Se um produto já existente for adicionado novamente, o
campo quantity desse produto deve ser incrementado. ### Persistência da Informação */
router.post("/:cid/product/:pid", CartController.update);

export default router;
