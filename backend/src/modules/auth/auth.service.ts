import { AppError } from "../../utils/common/Errors/AppError.js";
import {
  hashPassword,
  signAccessToken,
  signRefreshToken,
} from "./auth.helper.js";
import { IAuthRepository } from "./auth.interface.js";
import { toUserResponse } from "./auth.response.js";
import { RegisterUserInputType } from "./auth.schema.js";

export class AuthService {
  constructor(private authRepo: IAuthRepository) {}

  async registerUserService(data: RegisterUserInputType) {
    const existingUser = await this.authRepo.findUserByEmail(data.email);

    if (existingUser) {
      throw new AppError("User already exists", 400);
    }

    const hashedPassword = await hashPassword(data.password);

    const user = await this.authRepo.createUser({
      name: data.name,
      email: data.email,
      passwordHash: hashedPassword,
    });

    const accessToken = signAccessToken({
      userId: user.id,
    });

    const refreshToken = signRefreshToken({
      userId: user.id,
    });

    return {
      user: toUserResponse(user),
      accessToken,
      refreshToken,
    };
  }
}
