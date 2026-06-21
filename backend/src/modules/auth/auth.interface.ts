import { RegisterUserType } from "./auth.type.js";
import { User } from "../../generated/prisma/client.js";

export interface IAuthRepository {
  findUserById(id: string): Promise<User | null>;

  findUserByEmail(email: string): Promise<User | null>;

  createUser(data: RegisterUserType): Promise<User>;
}
