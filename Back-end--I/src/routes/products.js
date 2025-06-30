import { Router } from "express";
import ProductsController from "../controller/ProductsController.js";

const router = Router({ mergeParams: true });

router.get("/", ProductsController.index);
router.get("/:pid", ProductsController.show);
router.post("/", ProductsController.store);
router.put("/:pid", ProductsController.update);
router.delete("/:pid", ProductsController.delete);

export default router;
