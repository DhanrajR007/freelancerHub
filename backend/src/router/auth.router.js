import express from "express";
import { loginController, registerController } from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/login" , loginController);
router.post("/register",registerController)
router.get("/me",authMiddleware,(req,res)=>{
    res.status(200).json({
    success: true,
    message: "User logged in successfully",
    user: req.user,
  });
})
export default router;
