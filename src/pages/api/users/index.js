import connectDB from "@/middleware/mongodb";
import User from "@/models/User";

async function createUser(req, res) {
  try {
    delete req.body._id;
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateOrCreateuser(req, res) {
  console.log("updateOrCreateuser", req.body)
  try {
    delete req.body._id;
    const email = req.body.email;
    delete req.body.email;
    const user = await User.findOneAndUpdate({
      email
    }, req.body, {
      // new: true,
      upsert: true
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.findOneAndDelete({
      email: req.body._id
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const handler = async (req, res) => {
  if (req.method === "POST") {
    await createUser(req, res);
    return;
  } else if (req.method == "GET") {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method == "PUT") {
    await updateOrCreateuser(req, res);
    return;
  } else if (req.method == "DELETE") {
    await deleteUser(req, res);
    return;
  }
  else {
    res.status(500).json({ error: "Invalid request method" });
  }
}

export default connectDB(handler)
