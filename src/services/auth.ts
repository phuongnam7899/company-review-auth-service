import { Optional } from "sequelize";
import User from "../models/user";
import { generateToken } from "../utils/jwtUtils";

interface LoginResult {
  token: string;
  user: User;
}
export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResult> => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error("User not found");
  }
  if (user.password !== password) {
    throw new Error("Invalid password");
  }

  const token = generateToken({ id: user.dataValues.id });
  return {
    token,
    user,
  };
};

export const registerUser = async (
  user: Optional<any, string>
): Promise<string> => {
  const createdUser = await User.create(user);
  const token = generateToken({ id: createdUser.dataValues.id });

  return token;
};
