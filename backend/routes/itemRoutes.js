import express from "express";
import Item from "../models/itemModel";

const itemRoutes = express.Router();

// Create a new item
itemRoutes.post("/", async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all items
itemRoutes.get("/", async (req, res) => {
  try {
    const items = await Item.findAll();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default itemRoutes;
