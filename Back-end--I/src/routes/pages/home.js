import { Router } from "express";
import PageController from "../../controller/PageController.js";

const router = Router({ mergeParams: true });

router.get("/", (req, res) => PageController.index(req, res));

export default router;
