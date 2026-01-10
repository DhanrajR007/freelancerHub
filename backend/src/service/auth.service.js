import { findUserbyEmail } from "../dao/auth.dao.js";
import User from "../model/user.model.js";
import { BadRequestError, ConflictError } from "../utils/errorHandler.js";
import { bcryptPassword, comparePassword } from "../utils/helper.js";

export const loginService = async(email, password) => {
  const isUserExist = await findUserbyEmail(email);
  if (!isUserExist) {
    throw new BadRequestError("invalid credentials");
  }
  try {
    const isValidPassword = comparePassword(password, isUserExist.password);
    if (!isValidPassword) {
      throw new BadRequestError("invalid credentials");
    }
    return isUserExist;
  } catch (err) {}
};

export const registerService = async (name, username, email, password) => {
  const isUserExist = await findUserbyEmail(email);
  if (isUserExist) {
    throw new ConflictError("User already exist");
  }
  try {
    const hash = await bcryptPassword(password);
    const user = await User.create({name, username, email, password:hash});
    return user;
  } catch (err) {
    throw new Error(err.message)
  }
};
