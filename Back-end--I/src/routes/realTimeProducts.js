import { Router } from "express";
import realTimeProductsController from "../controller/realTimeProductsController.js";

const router = Router({ mergeParams: true });

router.get("/", (req, res) => realTimeProductsController.index(req, res));
router.get("/form", (req, res) =>
  realTimeProductsController.showForm(req, res)
);

export default router;
