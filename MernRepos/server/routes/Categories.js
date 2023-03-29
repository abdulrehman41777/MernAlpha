import express from "express";
import Categories from "../models/Categories.js";

const router = express.Router();

// POST route for creating a new car

router.post("/post-category", async (req, res) => {
  try {
    const newCategory = new Categories(req.body);
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete route for creating a new car
router.delete("/remove-category/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const Category = await Categories.findByIdAndDelete(id);
    if (!Category) {
      res.status(404).json({ message: "No car found" });
    } else {
      res.status(200).json(Category);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});



// GET route for retrieving all cars
router.get("/all-category", async (req, res) => {
  try {
    const Category = await Categories.find();
    res.json(Category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
