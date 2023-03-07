import { BASE_URL } from "@/constants"
import connectDB from "../../../middleware/mongodb"
import Bike from "../../../models/Bike"
import Location from "../../../models/Location"


async function createBike(req, res) {
  console.log("Create bike req", req.body)
  try {
    delete req.body._id
    const bike = await Bike.create(req.body)
    if (req.body.location) {
      const location = await Location.create({
        address: req.body.location,
        bike: bike._id
      })
    }
    res.redirect(`${BASE_URL}/admin/bikes`);
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