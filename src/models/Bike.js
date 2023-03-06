import mongoose from "mongoose"

const bike = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
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
    type: Number,
    required: true
  },
  pricePerHour: {
    type: Number,
    required: false,

  },
  image: {
    type: String,
    required: true,
  },
  available: {
    type: String,
    default: true,
  },
  location: {
    type: String,
    required: true,
  },
  additionalInfo: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Bike || mongoose.model("Bike", bike)