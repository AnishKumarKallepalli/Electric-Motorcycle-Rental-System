import connectDB from "../../../middleware/mongodb"
import Bike from "../../../models/Bike"

async function createBike(req, res) {
  try {
    delete req.body._id
    const bike = await Bike.create(req.body)
    res.status(201).json(bike)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}


const handler = async (req, res) => {
  if (req.method === 'POST') {
    await createBike(req, res)
    return
  }
  try {
    const bikes = await Bike.find({})
    res.status(200).json(bikes)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export default connectDB(handler)