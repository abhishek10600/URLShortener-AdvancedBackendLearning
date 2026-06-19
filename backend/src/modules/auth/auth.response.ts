import { UserResponseType } from "./auth.type.js";

export const toUserResponse = (user: UserResponseType) => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};
