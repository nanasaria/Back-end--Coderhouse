import { Router } from "express";
import RealTimeProductsController from "../controller/RealTimeProductsController.js";

const router = Router({ mergeParams: true });

router.get("/", (req, res) => RealTimeProductsController.index(req, res));
router.get("/form", (req, res) =>
  RealTimeProductsController.showForm(req, res)
);

export default router;
