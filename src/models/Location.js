import mongoose from "mongoose"

const location = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  bike: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Bike'
  }
});

export default mongoose.models.Location || mongoose.model("Location", location)