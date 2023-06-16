import { Router } from "express";

import * as userController from "./controller";
import { validateUserCreate } from "./schema";

const router = Router();

router
  .route("/")
  .get(userController.getList)
  .post(validateUserCreate, userController.create);

router.route("/:id").get(userController.getById);

export default router;
