import express from "express";
import { createInvoice, getInvoiceByContractId, getInvoiceById } from "../dao/all.dao.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();
router.post("/create", authMiddleware, async (req, res) => {
  try {
    const { invoiceNumber, clientId, contractId, tax, items, dueDate } =
      req.body;
    if (
      !invoiceNumber ||
      !contractId ||
      !clientId ||
      !items ||
      !dueDate ||
      !tax
    ) {
      throw new ConflictError("please pass all the details");
    }
    const user = req.user;

    const invoice = await createInvoice(
      items,
      dueDate,
      tax,
      invoiceNumber,
      clientId,
      contractId,
      user._id
    );
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      invoice,
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
  const {contractId}= req.body
  const allInvoices = await getInvoiceByContractId(contractId);
  res.status(200).json({
    success: true,
    message: "User logged in successfully",
    allInvoices,
  });
});
router.get("/:id",authMiddleware,async(req,res)=>{
    const { id } = req.params 
    const invoice = await getInvoiceById(id)
     res.status(200).json({
    success: true,
    message: "User logged in successfully",
    invoice,
  });
})

export default router;
