const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Email:", email);
  console.log("Password:", password);

  res.json({
    message: "Login successful!"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});