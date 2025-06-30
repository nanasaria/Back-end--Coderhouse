import { Router } from "express";
import CartController from "../controller/CartController.js";

const router = Router({ mergeParams: true });

router.get("/:cid", CartController.show);
router.post("/", CartController.store);
router.post("/:cid/product/:pid", CartController.productCart);

export default router;
