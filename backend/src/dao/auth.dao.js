import User from "../model/user.model.js";

export const findUserbyEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (err) {
    throw new Error(err);
  }
};

export const findUserbyId = async (id) => {
  try {
    const user = await User.findById(id)
    return user;
  } catch (err) {
    throw new Error(err);
  }
};


