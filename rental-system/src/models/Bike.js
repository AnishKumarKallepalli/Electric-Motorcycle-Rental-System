import mongoose from "mongoose"

const bike = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    // required: true,
  },
  mileage: {
    type: Number,
  },
  charge: {
    type: Number,
    required: true,
  },
  price: {
    per_hour: Number,
    per_day: Number,
  },
  image: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
  location: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Bike || mongoose.model("Bike", bike)