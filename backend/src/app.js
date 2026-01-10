import express from "express";
import authrouter from "./router/auth.router.js"



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use("/api/auth",authrouter)

export default app;