import User from "../model/user.model.js";

export const findUserbyEmail = async (email) => {
  const user = await User.findOne({ email: email });
  return user;
};
