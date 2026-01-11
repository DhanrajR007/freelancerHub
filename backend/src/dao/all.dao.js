import Client from "../model/client.model.js";

export const createClient = async (name, email, company, address, user) => {
  const client = await Client.create({
    name,
    email,
    company,
    address,
    UserId: user._id,
  });
  return client
};
