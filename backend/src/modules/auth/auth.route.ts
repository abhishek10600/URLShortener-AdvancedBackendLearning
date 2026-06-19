import express from "express";
import { validate } from "../../middlewares/validate.middleware.js";
import { registerUserSchema } from "./auth.schema.js";
import { AuthController } from "./auth.controller.js";

const router = express.Router();

const authController = new AuthController();

router
  .route("/register")
  .post(validate(registerUserSchema), authController.registerUser);

export default router;
