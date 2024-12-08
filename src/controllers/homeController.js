const database = require("../config/Database");
const { getdata } = require("../services/CRUDCustomers.js");

const getLogin = (req, res) => {
  return res.render("login.ejs");
};

const update = async (req, res) => {
  return res.render("update.ejs");
};
const getUpdateData = async (req, res) => {
  let id = req.params.id;
  const [results, fields] = await database.query(
    "SELECT * FROM customers WHERE id = ?",
    [id]
  );
  console.log(results);
  return res.render("update.ejs", { data: results[0] });
};
const getCreate = async (req, res) => {
  let { name, email, phone, address } = req.body;
  const [results, fields] = await database.query(
    "INSERT INTO customers (name, email, phone, address) VALUES (?, ?, ?, ?)",
    [name, email, phone, address]
  );
  console.log(results);
  res.send("Create success");
};

const getHome = async (req, res) => {
  let results = await getdata();
  return res.render("home.ejs", { listUsers: results });
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
  getHome,
  update,
  getUpdateData,
};
