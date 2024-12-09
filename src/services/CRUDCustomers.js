const database = require("../config/Database");

const getdata = async (req, res) => {
  const [results, fields] = await database.query("SELECT * FROM customers");
  return results;
};

const updatedata = async (name, email, phone, address, id) => {
  const [results, fields] = await database.query(
    "UPDATE customers SET name = ?, email = ?, phone = ?, address = ? WHERE customer_id = ?",
    [name, email, phone, address, id]
  );
  return results;
};

const adddata = async (name, email, phone, address) => {
  const [results, fields] = await database.query(
    "INSERT INTO customers (name, email, phone, address) VALUES (?, ?, ?, ?)",
    [name, email, phone, address]
  );
  return results;
};

const getdatabyid = async (id) => {
  const [results, fields] = await database.query(
    "SELECT * FROM customers WHERE customer_id = ?",
    [id]
  );
  return results;
};

module.exports = {
  getdata,
  updatedata,
  adddata,
  getdatabyid,
};
