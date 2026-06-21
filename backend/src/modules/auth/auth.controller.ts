import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/common/helpers/CatchAsync.js";
import { authService } from "./auth.container.js";
import { sendResponse } from "../../utils/common/response/AppResonse.js";
import { setAuthCookies } from "./auth.helper.js";

export class AuthController {
  registerUser = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { name, email, password } = req.body;

      const result = await authService.registerUserService({
        name,
        email,
        password,
      });

      setAuthCookies(res, result.refreshToken);

      sendResponse(res, 201, {
        success: true,
        message: "User registered successfully",
        data: {
          user: result.user,
          accessToken: result.accessToken,
        },
      });
    },
  );

  loginUser = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { email, password } = req.body;

      const result = await authService.loginUserService({ email, password });

      setAuthCookies(res, result.refreshToken);

      sendResponse(res, 200, {
        success: true,
        message: "User logged in successfully",
        data: {
          user: result.user,
          accessToken: result.accessToken,
        },
      });
    },
  );

  getLOggedInUser = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const userId = req.user?.userId as string;

      const result = await authService.getLoggedInUserDetails(userId);

      sendResponse(res, 200, {
        success: true,
        message: "User details feteched successfully",
        data: result,
      });
    },
  );
}
