import { prisma } from "../../lib/prisma.js";
import { User } from "../../../generated/prisma/client.js";
import { IAuthRepository } from "./auth.interface.js";
import { RegisterUserType } from "./auth.type.js";
import { measureQuery } from "../../utils/common/helpers/MeasureQuery.js";

export class AuthRepository implements IAuthRepository {
  async findUserByEmail(email: string): Promise<User | null> {
    return measureQuery("findUserByEmail", () =>
      prisma.user.findUnique({
        where: {
          email,
        },
      }),
    );
  }

  async createUser(data: RegisterUserType): Promise<User> {
    return measureQuery("createUser", () =>
      prisma.user.create({
        data,
      }),
    );
  }

  async findUserById(id: string): Promise<User | null> {
    return measureQuery("findUserById", () =>
      prisma.user.findUnique({
        where: {
          id,
        },
      }),
    );
  }
}
