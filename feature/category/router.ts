import { Router } from "express";

import * as categoryController from "./controller";

const router = Router();

router.route("/").get(categoryController.getList);

export default router;
