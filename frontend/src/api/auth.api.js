import axiosInstance from "./axiosInstance.js";

export const LoginUser = async (userData) => {
  const response = await axiosInstance.post("/auth/login", userData);
  return response.data;
};

export const RegisterUser = async (formData) => {
  const response = await axiosInstance.post("/auth/register", formData);
  return response.data;
};
