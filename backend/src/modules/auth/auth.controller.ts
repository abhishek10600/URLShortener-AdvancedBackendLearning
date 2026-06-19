import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/common/helpers/CatchAsync.js";
import { authService } from "./auth.container.js";
import { sendResponse } from "../../utils/common/response/AppResonse.js";

export class AuthController {
  registerUser = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { name, email, password } = req.body;

      const result = await authService.registerUserService({
        name,
        email,
        password,
      });

      sendResponse(res, 201, {
        success: true,
        message: "User registered successfully",
        data: result,
      });
    },
  );
}
