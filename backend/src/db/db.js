import mongoose from "mongoose";
import { config } from "../config/config.js";


export const connectDb = async () => {
 try {
   await mongoose.connect(config.mongoUri);
  console.log("db connected");
 } catch (error) {
  console.log(error.message)
 }
};
