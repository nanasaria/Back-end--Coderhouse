import { Router } from "express";

const router = Router({ mergeParams: true });

router.get("/", (req, res) => {
  res.render("home");
});

export default router;
