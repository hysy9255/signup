const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(morgan("tiny"));

  app.post("/signIn", async (req, res) => {
    const { email, password } = req.body;
    const payload = { email, password };
    const token = jwt.sign(payload, "secret key");
    res.status(200).json({ token });
  });

  const PORT = 3000;
  app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
};

createApp();
