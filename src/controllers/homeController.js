const getHomepage = (req, res) => {
  res.send("Hello World!");
};
const getSamples = (req, res) => {
  res.render("sample.ejs");
};
const getAbout = (req, res) => {
  res.render("about.ejs");
};
module.exports = {
  getHomepage,
  getSamples,
  getAbout,
};
