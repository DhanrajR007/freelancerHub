import axiosInstance from "./axiosInstance";

export const getContractByClientId = async (clientId) => {
  try {
    const data = await axiosInstance.get("/contract/all", clientId);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
