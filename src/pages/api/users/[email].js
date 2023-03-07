import connectDB from "@/middleware/mongodb";
import Bike from "@/models/Bike";
import User from "@/models/User";

async function getUser(req, res) {
  try {
    const { email } = req.query;
    const user = await User.findOne({ email }).populate("current_ride");
    if (!user) {
      res.status(404).json({ error: "User not found" });
    }
    const bike = await Bike.findOne({ _id: user.current_ride.bike });
    if (bike) {
      console.log(bike)
      user.current_ride.bike = bike.name;
    }
    res.status(200).json({
      name: user.name,
      email: user.email,
      ride_history: user.ride_history,
      current_ride: {
        bike: bike,
        start_time: user.current_ride.start_time,
        start_location: user.current_ride.start_location,
        cost: user.current_ride.cost,
      },

    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

const handler = async (req, res) => {
  if (req.method === "GET") {
    await getUser(req, res);
    return;
  }
  else {
    res.status(500).json({ error: "Invalid request method" });
  }
}

export default connectDB(handler);