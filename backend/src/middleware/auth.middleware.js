import { config } from "../config/config.js";
import { findUserbyId } from "../dao/auth.dao.js";
import { UnauthorizedError } from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  try {
    const token =
      req.headers.authorization?.split(" ")[1] || req.cookies.accessToken;
    if (!token) {
      throw new UnauthorizedError("Please login first");
    }
    const decoded = jwt.verify(token, config.jwtSecret);
    const user = await findUserbyId(decoded.id);
    req.user = user
    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "User registration failed",
      error: err.message,
    });
  }
};
