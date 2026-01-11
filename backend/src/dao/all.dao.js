import Client from "../model/client.model.js";
import contract from "../model/contract.model.js";

export const createClient = async (name, email, company, address, user) => {
  const client = await Client.create({
    name,
    email,
    company,
    address,
    UserId: user._id,
  });
  return client;
};
export const getClienByUserId = async (userId) => {
  const client = await Client.find({ UserId: userId });
  return client;
};
export const getClienById = async (id) => {
  const client = await Client.findOne({ _id: id });
  return client;
};
export const createContract = async (
  title,
  startDate,
  endDate,
  terms,
  status,
  clientId,
  userId
) => {
  const Contract = await contract.create({
    title,
    startDate,
    endDate,
    terms,
    status,
    clientId,
    userId,
  });
  return Contract;
};
export const getContractByClientId = async (clientId) => {
  const client = await contract.find({ clientId });
  return client;
};
export const getContractById = async (id) => {
  const client = await contract.findOne({ _id: id });
  return client;
};