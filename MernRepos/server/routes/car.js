import express from "express";
import Car from "../models/Car.js";

const router = express.Router();

// POST route for creating a new car

router.post("/post-car", async (req, res) => {
  try {
    const newCar = new Car(req.body);
    const savedCar = await newCar.save();
    res.status(201).json(savedCar);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete route for creating a new car
router.delete("/remove-car/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findByIdAndDelete(id);
    if (!car) {
      res.status(404).json({ message: "No car found" });
    } else {
      res.status(200).json(car);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Update route for creating a new car
router.patch("/update-car/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateCar = await Car.findById(id);

    updateCar.name = req.body.name || updateCar.name;
    updateCar.make = req.body.make || updateCar.make;
    updateCar.cmodel = req.body.cmodel || updateCar.cmodel;
    updateCar.category = req.body.category || updateCar.category;
    updateCar.registration = req.body.registration || updateCar.registration;
    updateCar.color = req.body.color || updateCar.color;

    const car = updateCar.save();
    res.status(200).json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET route for retrieving all cars
router.get("/cars", async (req, res) => {
  try {
    const cars = await Car.find({});
    res.json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
