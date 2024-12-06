const express = require("express");
const ConfigViewEngine = require("./config/viewsEngine");
const webRoutes = require("./routes/web");
const dotenv = require("dotenv");
const database = require("./config/Database");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME;

//Config view engine
ConfigViewEngine(app);
app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Server is running on port ${port}`);
});
