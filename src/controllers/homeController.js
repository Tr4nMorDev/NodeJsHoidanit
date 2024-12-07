const database = require("../config/Database");

const getLogin = (req, res) => {
  return res.render("login.ejs");
};
const getCreate = (req, res) => {
  let { name, email, phone, address } = req.body;
  database.query(
    "INSERT INTO customers (name, email, phone, address) VALUES (?, ?, ?, ?)",
    [name, email, phone, address],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Create successfully");
        console.log("Đã lưu vào database ", req.body);
      }
    }
  );
};

const getdata = (req, res) => {
  res.render("home.ejs");
};

const getSamples = (req, res) => {
  res.render("sample.ejs");
};
const getAbout = (req, res) => {
  res.render("about.ejs");
};
module.exports = {
  getSamples,
  getAbout,
  getLogin,
  getCreate,
  getdata,
};
