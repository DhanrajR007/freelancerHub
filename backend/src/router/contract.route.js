import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { ConflictError } from "../utils/errorHandler.js";
import { createContract } from "../dao/all.dao.js";

const router = express.Router();

router.post("/create", authMiddleware, async (req, res) => {
  try{
    const { title, startDate, endDate, terms, status, clientId } = req.body;
  if (!title || !startDate || !endDate || !terms || !status || !clientId) {
    throw new ConflictError("please pass all the details");
  }
  const user = req.user;

  const contract = await createContract(
    title,
    startDate,
    endDate,
    terms,
    status,
    clientId,
    user._id
  );
  res.status(200).json({
    success: true,
    message: "User logged in successfully",
    contract,
  });
  }catch(err){
     res.status(500).json({
      success: false,
      message: "User registration failed",
      error: err.message,
    });
  }
});

export default router;
