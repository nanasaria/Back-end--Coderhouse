import { Router } from "express";
import PageController from "../../controller/PageController.js";

const router = Router({ mergeParams: true });

router.get("/:pid/:redirect", (req, res) => PageController.show(req, res));

export default router;
