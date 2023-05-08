import connectDB from "@/middleware/mongodb";
import Bike from "@/models/Bike";
import User from "@/models/User";

async function getOrCreateUser(req, res) {
  try {
    const { email } = req.query;
    delete req.body._id;
    delete req.body.email
    let user = await User.findOne({ email }).populate("current_ride");
    if (!user) {
      // res.status(404).json({ error: "User not found" });
      user = await User.create({ email, ...req.body });
      return res.status(201).json(user);
    }
    // populate the ride_history bikes
    const ride_history = await Bike.find({ _id: { $in: user.ride_history.map(r => r.bike) } });
    // user.ride_history = ride_history;
    for (let i = 0; i < (user.ride_history?.length ?? 0); i++) {
      user.ride_history[i].bike = ride_history[i];
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
      wallet_balance: user.wallet_balance,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

const handler = async (req, res) => {
  if (req.method === "GET" || req.method === "POST") {
    await getOrCreateUser(req, res);
    return;
  }
  else if (req.method == "DELETE") {
    await User.deleteMany({});
    res.status(200).json({ message: "Deleted all users" });
    return
  }
  else {
    res.status(500).json({ error: "Invalid request method" });
  }
}

export default connectDB(handler);