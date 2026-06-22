import express from "express";
import { validate } from "../../middlewares/validate.middleware.js";
import { authMiddleware } from "../../middlewares/authentication.middleware.js";
import { UrlController } from "./url.controller.js";
import { urlSchema } from "./url.schema.js";

const router = express.Router();

const urlController = new UrlController();

router
  .route("/create-short-url")
  .post(validate(urlSchema), authMiddleware, urlController.createShortUrl);

router.route("/:shortCode").get(urlController.redirectToOriginalURL);

export default router;
