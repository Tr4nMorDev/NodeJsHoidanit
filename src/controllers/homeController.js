const database = require("../config/Database");
const {
  getdata,
  adddata,
  updatedata,
  getdatabyid,
} = require("../services/CRUDCustomers.js");

const getLogin = (req, res) => {
  return res.render("login.ejs");
};

const update = async (req, res) => {
  let id = req.params.customer_id;
  const DATAid = getdatabyid(id);
  let user = DATAid && DATAid.length > 0 ? results[0] : {};
  return res.render("update.ejs", { usersEdit: user });
};

const getCreate = async (req, res) => {
  let { name, email, phone, address } = req.body;
  adddata(name, email, phone, address);
  res.redirect("/home");
};

const UpdateDatabase = async (req, res) => {
  let { name, email, phone, address } = req.body;
  let id = req.params.customer_id;
  updatedata(name, email, phone, address, id);
  console.log(req.body);
  res.redirect("/home");
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
  UpdateDatabase,
};
