import mongoose from "mongoose"
import connectDB from "../../../middleware/mongodb"
import Bike from "../../../models/Bike"



async function getBike(req, res) {
  try {
    const { id } = req.query
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "Malformed ID" })
    }
    const bike = await Bike.findById(id)
    if (!bike) {
      res.status(404).json({ message: `Bike not found.` })
    }
    res.status(200).json(bike)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function createBike(req, res) {
  try {
    const bike = await Bike.create(req.body)
    res.status(201).json(bike)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function deleteBike(req, res) {
  try {
    const { id } = req.query
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "Malformed ID" })
    }
    const deleted = await Bike.findByIdAndDelete(id)
    if (!deleted) {
      res.status(404).json({ message: `Bike not found.` })
      return;
    }
    // deleted.deleted = true
    res.status(200).json({ ...deleted, deleted: true })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function updateBike(req, res) {
  try {
    const { id } = req.query
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "Malformed ID" })
    }
    const bike = await Bike.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    })
    if (!bike) {
      res.status(404).json({ message: `Bike not found.` })
      return;
    }
    res.status(200).json(bike)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const handler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getBike(req, res)
      break
    case 'DELETE':
      await deleteBike(req, res)
      break
    case 'PUT':
    case 'PATCH':
      await updateBike(req, res)
      break
    default:
      res.status(405).json({ message: `Method ${req.method} not allowed` })
      break
  }
}

export default connectDB(handler)