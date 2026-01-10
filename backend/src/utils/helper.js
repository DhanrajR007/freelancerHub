import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export const signToken = (user) => {
  const token = jwt.sign({ id: user._id }, config.jwtSecret, {
    expiresIn: config.jwtExpiry,
  });
 
  return token;
};
export const comparePassword = async (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};

export const bcryptPassword = async (password) => {
  return bcrypt.hashSync(password, 10);
};
