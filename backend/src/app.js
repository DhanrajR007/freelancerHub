import express from "express";
import authrouter from "./router/auth.router.js";
import { errorHandler } from "./utils/errorHandler.js";
import cookieParser from "cookie-parser";
import clientRouter from "./router/client.route.js";
import contractRouter from "./router/contract.route.js";
import invoiceRouter from "./router/invoice.route.js";
import cors from "cors";

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);
app.use(cookieParser());

app.use("/api/auth", authrouter);
app.use("/api/client", clientRouter);
app.use("/api/contract", contractRouter);
app.use("/api/invoice", invoiceRouter);
export default app;
