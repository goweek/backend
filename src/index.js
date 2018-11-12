const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Routes
const tweetRoutes = require("./routes/tweets");

mongoose.connect(
  "mongodb://admin:admin123@ds155263.mlab.com:55263/go-week",
  {
    useNewUrlParser: true
  }
);

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(cors());
app.use(express.json());
app.use("/tweets", tweetRoutes);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
