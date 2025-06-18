import { Router } from "express";
import ProductsController from "../controller/ProductsController.js";

const router = Router({ mergeParams: true });

//Deve listar todos os produtos do banco de dados.
router.get("/", ProductsController.index);

//Deve retornar apenas o produto com o id fornecido.
router.get("/:pid", ProductsController.show);

/*
Deve adicionar um novo produto com os seguintes campos:
id: Number/String (Não deve ser enviado pelo body, é gerado automaticamente para garantir que os ids nunca se repitam).

title: String

description: String

code: String

price: Number

status: Boolean

stock: Number

category: String

thumbnails: Array de Strings (caminhos onde estão armazenadas as imagens do produto).
*/
router.post("/", ProductsController.store);

/*Deve atualizar um produto com os campos enviados pelo
body. Não se deve atualizar nem remover o id no momento
da atualização. */
router.put("/:pid", ProductsController.update);

/*Deve remover o produto com o pid indicado. ### Rotas para Gerenciamento de Carrinhos (/api/carts/) */
router.delete("/:pid", ProductsController.delete);

export default router;
