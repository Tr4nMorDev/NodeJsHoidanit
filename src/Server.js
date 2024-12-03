const express = require("express");
const ConfigViewEngine = require("./config/viewsEngine");
const webRoutes = require("./routes/web");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME;

//Config view engine
ConfigViewEngine(app);
app.use("/test", webRoutes);
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
