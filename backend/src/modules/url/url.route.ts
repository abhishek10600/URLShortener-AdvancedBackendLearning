import express from "express";
import { validate } from "../../middlewares/validate.middleware.js";
import { authMiddleware } from "../../middlewares/authentication.middleware.js";
import { UrlController } from "./url.controller.js";
import { createUrlSchema, updateUrlSchema } from "./url.schema.js";
import { shortUrlTokenBuckerRateLimit } from "../../middlewares/rate-limit/short-url-token-bucket-rate-limit.js";

const router = express.Router();

const urlController = new UrlController();

router
  .route("/create-short-url")
  .post(
    authMiddleware,
    shortUrlTokenBuckerRateLimit,
    validate(createUrlSchema),
    urlController.createShortUrl,
  );

router.route("/:shortCode").get(urlController.redirectToOriginalURL);

router
  .route("/:shortCode")
  .patch(
    authMiddleware,
    validate(updateUrlSchema),
    urlController.updateOriginalUrl,
  );

export default router;
