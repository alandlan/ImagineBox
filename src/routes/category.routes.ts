import { Router } from "express";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CategoryController } from "../modules/controllers/CategoryController";

const categoryRouter = Router();
const categoryController = new CategoryController();

categoryRouter.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  categoryController.create
);

categoryRouter.get("/:Id", categoryController.findById);

categoryRouter.get("/", categoryController.findByName);

export { categoryRouter };