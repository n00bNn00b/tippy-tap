const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000 || process.env.PORT;

require("dotenv").config();
app.use(express.json());
app.use(cors());

app.use(require("./router/auth"));
app.use(require("./router/user"));
app.use(require("./router/doctor"));
app.use(require("./router/profile"));


app.get("/", (req, res) => {
  res.send("Tippy Tap  Server is Running! 😎");
});

app.listen(port, () => {
  console.log("Server is Running on port: ", port);
});
