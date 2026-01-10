import bcrypt from "bcryptjs";
export const comparePassword = async (password, hashPassword) => {
  return await bcrypt.compare(password, hashPassword);
};
