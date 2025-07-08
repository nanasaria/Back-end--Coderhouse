import { Router } from "express";
import ProductsController from "../controller/ProductsController.js";
import upload from "../utils/upload.js";

const router = Router({ mergeParams: true });

export default function (io) {
  router.get("/", ProductsController.index);
  router.get("/:pid", ProductsController.show);
  router.post("/", upload.single("file"), (req, res) =>
    ProductsController.store(req, res, io)
  );
  router.put("/:pid", upload.single("file"), (req, res) =>
    ProductsController.update(req, res, io)
  );
  router.delete("/:pid", (req, res) => ProductsController.delete(req, res, io));

  return router;
}
