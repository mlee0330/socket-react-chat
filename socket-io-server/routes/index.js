const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "Express response" }).status(200);
});

router.get("/test", (req, res) => {
  res.send({ response: "Test response"}).status(200);
});

module.exports = router;