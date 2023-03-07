import connectDB from "../../../middleware/mongodb"
import Location from "../../../models/Location"
import Bike from "../../../models/Bike"

async function createLocation(req, res) {
  try {
    delete req.body._id
    const location = await Location.create(req.body)
    res.status(201).json(location)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const handler = async (req, res) => {
  if (req.method === 'POST') {
    await createLocation(req, res)
    return
  }
  try {
    const locations = await Location.find({}).populate('bike')
    res.status(200).json(locations)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
export default connectDB(handler)