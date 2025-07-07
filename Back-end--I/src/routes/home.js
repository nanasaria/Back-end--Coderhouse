import { Router } from "express";
import HomeController from "../controller/HomeController";

const router = Router({ mergeParams: true });

router.get("/", (req, res) => HomeController.index(req, res));

export default router;
