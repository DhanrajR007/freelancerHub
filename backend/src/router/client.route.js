import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { ConflictError } from "../utils/errorHandler.js";
import { createClient, getClienById, getClienByUserId } from "../dao/all.dao.js";

const router = express.Router();

router.post("/create", authMiddleware, async (req, res) => {
  try {
    const { name, email, company, address } = req.body;
    const user = req.user;
    if (!name || !email || !company || !address) {
      throw new ConflictError("Please Fill All the Details");
    }
    const client = await createClient(name, email, company, address, user);
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      client,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "User registration failed",
      error: err.message,
    });
  }
});
router.get("/all", authMiddleware, async (req, res) => {
  const user = req.user;
  const allClients = await getClienByUserId(user._id);
  res.status(200).json({
    success: true,
    message: "User logged in successfully",
    allClients,
  });
});
router.get("/:id",authMiddleware,async(req,res)=>{
    const { id } = req.params 
    const client = await getClienById(id)
     res.status(200).json({
    success: true,
    message: "User logged in successfully",
    client,
  });
})
export default router;
