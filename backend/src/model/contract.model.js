import mongoose from "mongoose";

const contractSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    terms: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    active: true,
  },
  {
    timestamps: true,
  }
);

const contract = mongoose.model("Contract", contractSchema);

export default contract;
