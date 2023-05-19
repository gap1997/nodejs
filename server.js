const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorhandler.js");
const connectDb = require("./config/db.connection.js")

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/contacts", require("./routes/conatctRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server listing on port ${port}`);
});
