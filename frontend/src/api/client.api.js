import axiosInstance from "./axiosInstance";

export const createClient = async (data) => {
  try {
    const response = await axiosInstance.post("/client/create", data);
    return response.data;
  } catch (error) {}
};

export const getAllClient = async () => {
  try {
    const response = await axiosInstance.get("/client/all");
    return response.data;
  } catch (error) {}
};
export const getClienById = async (id) => {
  try {
    const response = await axiosInstance.get(`/client/${id}`);
    return response.data;
  } catch (error) {}
};
