import bcrypt from "bcryptjs";
export const comparePassword = async (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};

export const bcryptPassword = async (password)=>{
return bcrypt.hashSync(password,10)
}