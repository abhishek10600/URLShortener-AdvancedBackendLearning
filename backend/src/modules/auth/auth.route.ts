import express from "express";
import { validate } from "../../middlewares/validate.middleware.js";
import { loginUserSchema, registerUserSchema } from "./auth.schema.js";
import { AuthController } from "./auth.controller.js";
import { authMiddleware } from "../../middlewares/authentication.middleware.js";

const router = express.Router();

const authController = new AuthController();

router
  .route("/register")
  .post(validate(registerUserSchema), authController.registerUser);

router
  .route("/login")
  .post(validate(loginUserSchema), authController.loginUser);

router.route("/me").get(authMiddleware, authController.getLOggedInUser);

export default router;
