const express = require("express");
const tweetsController = require("../controllers/tweetsController");
const LikesController = require("../controllers/LikesController");

const routes = express.Router();

routes.get("/", tweetsController.index);
routes.post("/", tweetsController.store);

routes.post("/likes/:id", LikesController.store);

module.exports = routes;
