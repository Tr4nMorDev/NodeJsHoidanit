const database = require("../config/Database");

const getdata = async (req, res) => {
  const [results, fields] = await database.query("SELECT * FROM customers");
  return results;
};

module.exports = {
  getdata,
};
