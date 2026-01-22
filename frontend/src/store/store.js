import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/auth.slice.js";
import clientsReducer from "./slice/client.slice.js";
export const store = configureStore({
  reducer: { auth: authReducer, clients: clientsReducer },
});
