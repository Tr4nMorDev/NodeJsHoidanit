const express = require("express");
const {
  getHomepage,
  getSamples,
  getAbout,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.get("/sample", getSamples);
router.get("/about", getAbout);
module.exports = router;
