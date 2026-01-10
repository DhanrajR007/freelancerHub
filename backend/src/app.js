import express from "express";
import authrouter from "./router/auth.router.js"
import { errorHandler } from "./utils/errorHandler.js";



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(errorHandler)


app.use("/api/auth",authrouter)

export default app;