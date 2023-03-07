import mongoose from "mongoose"


// User must have: name, email, password
// optional fields: ride_history, current_ride, current_location, current_bike

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    // required: true,
  },
  ride_history: {
    type: Array,
    default: [],
  },
  current_ride: {
    //bike is another model
    bike: { type: mongoose.Schema.Types.ObjectId, ref: 'Bike' },
    start_time: Date,
    start_location: String,
    cost: Number,
  },
  wallet_balance: {
    type: Number,
    default: 500,
  }
})

export default mongoose.models.User || mongoose.model("User", user)