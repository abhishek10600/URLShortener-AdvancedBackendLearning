import { prisma } from "../../lib/prisma.js";
import { User } from "../../generated/prisma/client.js";
import { IAuthRepository } from "./auth.interface.js";
import { RegisterUserType } from "./auth.type.js";

export class AuthRepository implements IAuthRepository {
  async findUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }
  async createUser(data: RegisterUserType): Promise<User> {
    const newUser = await prisma.user.create({
      data,
    });

    return newUser;
  }

  async findUserById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }
}
