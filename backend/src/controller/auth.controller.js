import { loginService, registerService } from "../service/auth.service.js";
import { BadRequestError } from "../utils/errorHandler.js";

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("please fill all details");
  }
  try {
    const { user, token } = await loginService(email, password);
    res.cookie("accessToken", token);
    // req.user = user
    res.status(201).json({
      user,
      token,
      success: true,
      message: "User registered successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "User registration failed",
      error: err.message,
    });
  }
};

export const registerController = async (req, res) => {
  const { name, username, email, password } = req.body;
  if (!name || !username || !email || !password) {
    throw new BadRequestError("please fill all the details ");
  }
  try {
    const { user, token } = await registerService(
      name,
      username,
      email,
      password
    );
    res.cookie("accessToken", token);
    res.status(201).json({
      user,
      token,
      success: true,
      message: "User registered successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "User registration failed",
      error: err.message,
    });
  }
};
