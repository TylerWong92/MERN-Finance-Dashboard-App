import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

router.get("/trasactions", async (req, res) => {
  try {
    const trasactions = await (
      await Transaction.find().limit(50)
    ).sort({ createdOm: -1 });
    res.status(200).json(trasactions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
