const express = require("express");
const {
  getSamples,
  getAbout,
  getLogin,
  getCreate,
  getHome,
  update,
  UpdateDatabase,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/login", getLogin);
router.get("/sample", getSamples);
router.get("/about", getAbout);
router.get("/home", getHome);
router.post("/create", getCreate);
router.get("/update/:customer_id", update);
router.post("/updateUser/:customer_id", UpdateDatabase);

module.exports = router;
