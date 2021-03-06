import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { UserAddressController } from "../modules/controllers/UserAddressController";

const userAddressRoutes = Router();

const userAddressController = new UserAddressController();

userAddressRoutes.post("/", ensureAuthenticated, userAddressController.Create);

userAddressRoutes.get(
  "/",
  ensureAuthenticated,
  userAddressController.FindAllByUserId
);

userAddressRoutes.delete(
  "/:id",
  ensureAuthenticated,
  userAddressController.Delete
);

userAddressRoutes.get(
  "/:id",
  ensureAuthenticated,
  userAddressController.FindById
);

export { userAddressRoutes };
