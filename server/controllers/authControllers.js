const userModal = require('../modal/user');

const test = (req, res) => {
  res.status(200).json("test successful");
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.json({
        error: "Please provide name",
      });
    }

    if (!password) {
      return res.json({
        error: "Please provide password",
      });
    }

    // Use await or .then() to handle the asynchronous operation
    const exist = await userModal.findOne({ email });

    if (exist) {
      return res.json({
        error: "Email is already taken",
      });
    }

    const user = await userModal.create({
      name,
      email,
      password,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { test, register };
