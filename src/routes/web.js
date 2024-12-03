const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello World!");
});
router.get("/sample", (req, res) => {
  res.render("sample.ejs");
});
router.get("/about", (req, res) => {
  res.render("about.ejs");
});
module.exports = router;
