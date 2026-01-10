import { loginService } from "../service/auth.service.js";
import { BadRequestError } from "../utils/errorHandler.js";

export const loginController = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("please fill all details");
  }
  try {

    const user = loginService(email,password)
    return user
  } catch (err) {}
};
