import express from "express";
import authrouter from "./router/auth.router.js"
import { errorHandler } from "./utils/errorHandler.js";
import cookieParser from "cookie-parser";
import clientRouter from './router/client.route.js'
import contractRouter from './router/contract.route.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(errorHandler)
app.use(cookieParser())

app.use("/api/auth",authrouter)
app.use("/api/client",clientRouter)
app.use("/api/contract",contractRouter)
export default app;