
import { Router } from "express";

import { registerController } from "./auth.controller";
import { registerSchema } from "./dto/register.dto";
import { validationMiddleware } from "../../common/middleware/validation.middleware";

const router = Router();

router.post(
  "/register",
  validationMiddleware(registerSchema),
  registerController
);

export default router;
