import { findUserbyEmail } from "../dao/auth.dao.js";
import User from "../model/user.model.js";
import { BadRequestError, ConflictError } from "../utils/errorHandler.js";
import { bcryptPassword, comparePassword, signToken } from "../utils/helper.js";

export const loginService = async (email, password) => {
  try {
    const user = await findUserbyEmail(email);
    // console.log(user)
    if (!user) {
      throw new BadRequestError("invalid credentials");
    }
    const isValidPassword = comparePassword(password, user.password);
    if (!isValidPassword) {
      throw new BadRequestError("invalid credentials");
    }
    const token = signToken(user);
    return {user, token };
  } catch (err) {}
};

export const registerService = async (name, username, email, password) => {
  const isUserExist = await findUserbyEmail(email);
  if (isUserExist) {
    throw new ConflictError("User already exist");
  }
  try {
    const hash = await bcryptPassword(password);
    const user = await User.create({ name, username, email, password: hash });
    const token = signToken(user);
    return { user, token };
  } catch (err) {
    throw new Error(err.message);
  }
};
