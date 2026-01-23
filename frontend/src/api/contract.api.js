import axiosInstance from "./axiosInstance";

export const getContractByuserId = async () => {
  try {
    const data = await axiosInstance.get("/contract/all");
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
