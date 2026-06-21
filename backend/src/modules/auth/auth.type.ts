export type RegisterUserType = {
  name: string;
  email: string;
  passwordHash: string;
};

export type LoginUserType = {
  email: string;
  password: string;
};

export type UserResponseType = {
  name: string;
  email: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type JwtPayloadType = {
  userId: string;
};
