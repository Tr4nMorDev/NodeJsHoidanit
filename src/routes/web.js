const express = require("express");
const {
  getSamples,
  getAbout,
  getLogin,
  getCreate,
  getHome,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/login", getLogin);
router.get("/sample", getSamples);
router.get("/about", getAbout);
router.get("/home", getHome);
router.post("/create", getCreate);
module.exports = router;
